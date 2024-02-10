import { activity } from "$db/collection/activity";
import { ObjectId } from "mongodb";
import { redirect } from "@sveltejs/kit";
import { pb, getAuthToken } from "$lib/server/pocketbase";
import { POCKETBASE_URL } from "$env/static/private";

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
  const id = new ObjectId(params.edit.toString());
  const data = await activity.findOne({ _id: id });

  return {
    activity: { ...data, _id: data._id.toString() },
  };
}

/** @type {import('./$types').Actions} */
export const actions = {
  edit: async ({ params, request }) => {
    const data = await request.formData();
    const title = data.get("title");
    const created_at = data.get("created_at");
    const location = data.get("location");
    const description = data.get("description");
    let doc = {
      title,
      created_at,
      location,
      description,
    };
    const image = data.get("image");
    if (image.size > 0) {
      const authToken = await getAuthToken();
      const headers = {
        Authorization: authToken,
      };
      const record = await pb
        .collection("activity_image")
        .create({ image }, { headers });
      doc = {
        ...doc,
        image: `${POCKETBASE_URL}/api/files/${record.collectionId}/${record.id}/${record.image}`,
      };
    }

    const id = new ObjectId(params.edit.toString());
    const result = await activity.updateOne({ _id: id }, { $set: doc });

    throw redirect(301, "/admin-pkm/dashboard/activities");
  },
};
