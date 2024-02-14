import { redirect } from "@sveltejs/kit";

export function redirectRoleIsNot(role, credential, redirectRoute) {
  if (!credential || !credential.role) {
    redirect(307, redirectRoute || "/");
  }

  const roleRedirectURL = {
    admin: "/admin/dashboard",
    "admin-pkm": "/admin-pkm/dashboard",
    user: "/",
  };

  if (credential.role !== role) {
    redirect(307, roleRedirectURL[credential.role] || "/");
  }
}
