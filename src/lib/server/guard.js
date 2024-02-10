import { redirect } from "@sveltejs/kit";

export function redirectRoleIsNot(role, credential, redirectRoute) {
  if (!credential || !credential.role) {
    throw redirect(307, redirectRoute || "/");
  }

  const roleRedirectURL = {
    admin: "/admin/dashboard",
    "admin-pkm": "/admin-pkm/dashboard",
    user: "/",
  };

  if (credential.role !== role) {
    throw redirect(307, roleRedirectURL[credential.role] || "/");
  }
}
