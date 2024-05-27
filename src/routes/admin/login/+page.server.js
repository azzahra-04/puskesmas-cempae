import { credential } from "$db/collection/credential";
import { session } from "$lib/server/auth";
import { fail, redirect } from "@sveltejs/kit";
import bcrypt from "bcrypt";

/** @type {import('./$types').PageServerLoad} */
export const load = async ({ locals }) => {
  if (locals.credential) {
    redirect(301, "/admin/dashboard");
  }
};

/** @type {import('./$types').Actions} */
export const actions = {
  login: async ({ cookies, request }) => {
    const data = await request.formData();
    const username = data.get("username");
    const password = data.get("password");

    const userCredential = await credential.findOne({
      username: username,
      role: "admin",
    });

    if (!userCredential) {
      return fail(401, { message: "Invalid username or password." });
    }

    const match = await bcrypt.compare(password, userCredential.password);
    if (!match) {
      return fail(401, { message: "Invalid username or password." });
    }

    const { password: _, ...rest } = userCredential;
    const sessionData = await session.create({
      credential: { ...rest, _id: rest._id.toString() },
    });

    cookies.set("sessionId", sessionData, {
      path: "/",
      httpOnly: true,
    });

    redirect(301, "/admin/dashboard");
  },
};
