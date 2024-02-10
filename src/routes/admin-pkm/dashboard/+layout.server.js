import { redirectRoleIsNot } from "$lib/server/guard.js";

export const load = async ({ locals }) => {
  redirectRoleIsNot("admin-pkm", locals.credential, "/admin-pkm/login");
};
