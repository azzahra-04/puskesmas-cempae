import { credential } from "$db/collection/credential";
import { session } from "$lib/server/auth";
import { redirect } from "@sveltejs/kit";
import bcrypt from "bcrypt";

/** @type {import('./$types').PageServerLoad} */
export const load = async ({ locals }) => {
  if (locals.credential) {
    redirect(301, "/");
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
      role: "user",
    });

    if (userCredential) {
      const match = await bcrypt.compare(password, userCredential.password);
      if (match) {
        const { password: _, ...rest } = userCredential;
        const sessions = await session.create({
          credential: { ...rest, _id: rest._id.toString() },
        });
        cookies.set("sessionId", sessions, {
          path: "/",
          httpOnly: true,
        });
        redirect(301, "/");
      }
    }
  },
};
