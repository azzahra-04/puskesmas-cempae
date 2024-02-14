import { session } from "$lib/server/auth.js";
import { redirect } from "@sveltejs/kit";

export const load = async ({ cookies, locals }) => {
  if (!locals.credential) {
    throw redirect(302, "/");
  }
};

export const actions = {
  default: async ({ cookies, locals }) => {
    const sessionId = cookies.get("sessionId");
    let deleted;
    try {
      deleted = await session.destroy(sessionId);
    } catch (error) {
      console.error(error);
    }

    if (deleted) {
      cookies.delete("sessionId");
      locals.credential = null;
    }

    throw redirect(302, "/");
  },
};
