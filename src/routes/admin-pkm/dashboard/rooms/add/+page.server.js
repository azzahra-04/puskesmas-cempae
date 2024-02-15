import { inpatientRoom } from "$db/collection/inpatientRoom";
import { fail } from "@sveltejs/kit";
import { pb, getAuthToken } from "$lib/server/pocketbase";
import { POCKETBASE_URL } from "$env/static/private";

/** @type {import('./$types').Actions} */
export const actions = {
  add: async ({ request }) => {
    const data = await request.formData();
    const name = data.get("name");
    const totalBed = data.get("totalBed");
    const emptyBed = data.get("emptyBed");
    const filledBed = data.get("filledBed");
    const image = data.get("image");

    const authToken = await getAuthToken();
    const headers = {
      Authorization: authToken,
    };
    const record = await pb
      .collection("room_image")
      .create({ image }, { headers });

    const inpatientRooms = await inpatientRoom.insertOne({
      name,
      totalBed,
      emptyBed,
      filledBed,
      image: `${POCKETBASE_URL}/api/files/${record.collectionId}/${record.id}/${record.image}`,
    });

    if (!inpatientRooms) {
      return fail(401);
    }

    return { success: true };
  },
};
