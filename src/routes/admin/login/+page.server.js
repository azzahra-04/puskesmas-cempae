import { credential } from "$db/collection/credential";
import { session } from "$lib/server/auth";
import { fail, redirect } from "@sveltejs/kit";

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

    const credentials = await credential.findOne({
      username: username,
      password: password,
      role: "admin",
    });

    if (!credentials) {
      return fail(401);
    }

    const { password: _, ...rest } = credentials;
    const sessions = await session.create({
      credential: { ...rest, _id: rest._id.toString() },
    });
    cookies.set("sessionId", sessions, {
      path: "/",
      httpOnly: true,
    });

    redirect(301, "/admin/dashboard");
  },
};
