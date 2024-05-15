import { user } from "$db/collection/user";
import { credential } from "$db/collection/credential";
import { ObjectId } from "mongodb";
import { redirect } from "@sveltejs/kit";

/** @type {import('./$types').PageLoad} */
export async function load() {
  const users = await user.find({}).toArray();

  return {
    users: users.map((v) => ({
      ...v,
      _id: v._id.toString(),
    })),
  };
}

/** @type {import('./$types').Actions} */
export const actions = {
  delete: async ({ request }) => {
    const data = await request.formData();
    const id = new ObjectId(data.get("id"));

    const deleteCredential = await credential.find({}).toArray();
    const specificData = deleteCredential
      .filter((item) => item.userId === id.toString())
      .map((item) => item.userId);

    if (specificData.includes(id.toString())) {
      const deleteAdmin = await user.deleteOne({ _id: id });
      const deleteCredential = await credential.deleteOne({
        userId: id.toString(),
      });
    }

    redirect(301, "/admin/dashboard/user-data");
  },
};
