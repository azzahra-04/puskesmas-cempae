import { redirectRoleIsNot } from "$lib/server/guard";
import { user } from "$db/collection/user";
import { ObjectId } from "mongodb";
import { redirect } from "@sveltejs/kit";
import { pb, getAuthToken } from "$lib/server/pocketbase";
import { POCKETBASE_URL } from "$env/static/private";

/** @type {import('./$types').PageLoad} */
export async function load({ locals }) {
  redirectRoleIsNot("user", locals.credential, "/login");

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

/** @type {import('./$types').Actions} */
export const actions = {
  editProfile: async ({ locals, request }) => {
    const data = await request.formData();
    const fullName = data.get("full-name");
    const gender = data.get("gender");
    const dateOfBirth = data.get("date-of-birth");
    const telephoneNumber = data.get("phone");
    const address = data.get("address");
    let doc = {
      fullName,
      gender,
      dateOfBirth,
      telephoneNumber,
      address,
    };
    const image = data.get("image");
    if (image.size > 0) {
      const authToken = await getAuthToken();
      const headers = {
        Authorization: authToken,
      };
      const record = await pb
        .collection("user_image")
        .create({ image }, { headers });
      doc = {
        ...doc,
        image: `${POCKETBASE_URL}/api/files/${record.collectionId}/${record.id}/${record.image}`,
      };
    }

    const id = new ObjectId(locals.credential.userId.toString());
    const result = await user.updateOne({ _id: id }, { $set: doc });

    throw redirect(301, "/manage-account");
  },
};
