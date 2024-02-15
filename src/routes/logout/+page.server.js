import { session } from "$lib/server/auth.js";
import { redirect } from "@sveltejs/kit";

export const load = async ({ locals }) => {
  if (!locals.credential) {
    redirect(302, "/");
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

    const role = locals.credential.role;

    if (deleted) {
      cookies.delete("sessionId", {
        path: "/",
      });
      locals.credential = null;
    }

    let redirectPath;
    if (role === "admin") {
      redirectPath = "/admin/login";
    } else if (role === "admin-pkm") {
      redirectPath = "/admin-pkm/login";
    } else {
      redirectPath = "/";
    }

    redirect(302, redirectPath);
  },
};
