import { redirectRoleIsNot } from "$lib/server/guard";
import { user } from "$db/collection/user";
import { ObjectId } from "mongodb";

/** @type {import('./$types').PageLoad} */
export async function load({ locals }) {
  // redirectRoleIsNot("user", locals.credential, "/login");\
  if (!locals.credential) {
    return {};
  }

  const data = await user.findOne({
    _id: new ObjectId(locals.credential.userId),
  });

  return {
    credential: locals.credential,
    user: {
      ...data,
      _id: data._id.toString(),
    },
  };
}
