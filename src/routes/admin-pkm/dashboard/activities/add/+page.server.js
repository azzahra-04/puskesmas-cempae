import { POCKETBASE_URL } from "$env/static/private";
import { activity } from "$db/collection/activity";
import { fail } from "@sveltejs/kit";
import { pb, getAuthToken } from "$lib/server/pocketbase";

/** @type {import('./$types').Actions} */
export const actions = {
  add: async ({ request }) => {
    const data = await request.formData();
    const title = data.get("title");
    const created_at = data.get("created_at");
    const location = data.get("location");
    const description = data.get("description");
    const image = data.get("image");

    const authToken = await getAuthToken();
    const headers = {
      Authorization: authToken,
    };
    const record = await pb
      .collection("activity_image")
      .create({ image }, { headers });

    const activities = await activity.insertOne({
      title,
      created_at,
      location,
      description,
      image: `${POCKETBASE_URL}/api/files/${record.collectionId}/${record.id}/${record.image}`,
    });

    if (!activities) {
      return fail(401);
    }

    return { success: true };
  },
};
