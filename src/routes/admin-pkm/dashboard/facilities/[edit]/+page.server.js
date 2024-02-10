import { facility } from "$db/collection/facility";
import { ObjectId } from "mongodb";
import { redirect } from "@sveltejs/kit";
import { pb, getAuthToken } from "$lib/server/pocketbase";
import { POCKETBASE_URL } from "$env/static/private";

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
  const id = new ObjectId(params.edit.toString());
  const data = await facility.findOne({ _id: id });

  return {
    facility: { ...data, _id: data._id.toString() },
  };
}

/** @type {import('./$types').Actions} */
export const actions = {
  edit: async ({ params, request }) => {
    const data = await request.formData();
    const name = data.get("name");
    const description = data.get("description");
    let doc = {
      name,
      description,
    };
    const image = data.get("image");
    if (image.size > 0) {
      const authToken = await getAuthToken();
      const headers = {
        Authorization: authToken,
      };
      const record = await pb
        .collection("facility_image")
        .create({ image }, { headers });
      doc = {
        ...doc,
        image: `${POCKETBASE_URL}/api/files/${record.collectionId}/${record.id}/${record.image}`,
      };
    }

    const id = new ObjectId(params.edit.toString());
    const result = await facility.updateOne({ _id: id }, { $set: doc });

    throw redirect(301, "/admin-pkm/dashboard/facilities");
  },
};
