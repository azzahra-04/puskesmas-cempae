import { inpatientRoom } from "$db/collection/inpatientRoom";
import { ObjectId } from "mongodb";
import { pb, getAuthToken } from "$lib/server/pocketbase";
import { POCKETBASE_URL } from "$env/static/private";

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
  const id = new ObjectId(params.edit.toString());
  const data = await inpatientRoom.findOne({ _id: id });

  return {
    inpatientRoom: { ...data, _id: data._id.toString() },
  };
}

/** @type {import('./$types').Actions} */
export const actions = {
  edit: async ({ params, request }) => {
    const data = await request.formData();
    const name = data.get("name");
    const totalBed = data.get("totalBed");
    const emptyBed = data.get("emptyBed");
    const filledBed = data.get("filledBed");
    let doc = {
      name,
      totalBed,
      emptyBed,
      filledBed,
    };
    const image = data.get("image");
    if (image.size > 0) {
      const authToken = await getAuthToken();
      const headers = {
        Authorization: authToken,
      };
      const record = await pb
        .collection("room_image")
        .create({ image }, { headers });
      doc = {
        ...doc,
        image: `${POCKETBASE_URL}/api/files/${record.collectionId}/${record.id}/${record.image}`,
      };
    }

    const id = new ObjectId(params.edit.toString());
    const result = await inpatientRoom.updateOne({ _id: id }, { $set: doc });

    return { success: true };
  },
};
