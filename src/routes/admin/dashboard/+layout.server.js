import { redirectRoleIsNot } from "$lib/server/guard.js";

export const load = async ({ locals }) => {
  redirectRoleIsNot("admin", locals.credential, "/admin/login");
};
