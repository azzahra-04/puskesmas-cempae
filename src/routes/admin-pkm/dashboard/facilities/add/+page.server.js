import { facility } from "$db/collection/facility";
import { fail, redirect } from "@sveltejs/kit";
import { pb, getAuthToken } from "$lib/server/pocketbase";
import { POCKETBASE_URL } from "$env/static/private";

/** @type {import('./$types').Actions} */
export const actions = {
  add: async ({ request }) => {
    const data = await request.formData();
    const name = data.get("name");
    const description = data.get("description");
    const image = data.get("image");

    const authToken = await getAuthToken();
    const headers = {
      Authorization: authToken,
    };
    const record = await pb
      .collection("facility_image")
      .create({ image }, { headers });

    const facilities = await facility.insertOne({
      name,
      description,
      image: `${POCKETBASE_URL}/api/files/${record.collectionId}/${record.id}/${record.image}`,
    });

    if (!facilities) {
      return fail(401);
    }

    throw redirect(301, "/admin-pkm/dashboard/facilities");
  },
};
