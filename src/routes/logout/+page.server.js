import { session } from "$lib/server/auth.js";
import { redirect } from "@sveltejs/kit";

export const load = async ({ cookies, locals }) => {
  if (!locals.credential) {
    throw redirect(302, "/");
  }

  const sessionId = cookies.get("sessionId");
  let deleted;
  try {
    deleted = await session.destroy(sessionId);
  } catch (error) {
    console.error(error);
  }

  if (deleted) {
    cookies.delete("sessionId");
  }

  if (locals.credential.role === "admin") {
    throw redirect(302, "/admin/login");
  } else if (locals.credential.role === "admin-pkm") {
    throw redirect(302, "/admin-pkm/login");
  } else {
    throw redirect(302, "/");
  }
};
