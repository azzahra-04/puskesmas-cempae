import { user } from "$db/collection/user";
import { adminPuskesmas } from "$db/collection/adminPuskesmas";
import { redirectRoleIsNot } from "$lib/server/guard";

/** @type {import('./$types').PageLoad} */
export async function load({ locals }) {
  redirectRoleIsNot("admin", locals.credential, "/admin/login");

  const users = await user.find({}).toArray();
  const adminsPuskesmas = await adminPuskesmas.find({}).toArray();

  return {
    users: users.map((v) => ({
      ...v,
      _id: v._id.toString(),
    })),
    adminsPuskesmas: adminsPuskesmas.map((v) => ({
      ...v,
      _id: v._id.toString(),
    })),
  };
}
