import { doctorsSchedule } from "$db/collection/doctorsSchedule";
import { ObjectId } from "mongodb";
import { pb, getAuthToken } from "$lib/server/pocketbase";
import { POCKETBASE_URL } from "$env/static/private";

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
  const id = new ObjectId(params.edit.toString());
  const data = await doctorsSchedule.findOne({ _id: id });

  return {
    doctorsSchedule: { ...data, _id: data._id.toString() },
  };
}

/** @type {import('./$types').Actions} */
export const actions = {
  edit: async ({ params, request }) => {
    const data = await request.formData();
    const name = data.get("name");
    const practiceLicense = data.get("practiceLicense");
    const telephoneNumber = data.get("telephoneNumber");
    const address = data.get("address");
    const specialist = data.get("specialist");
    const practiceSchedule = data.get("practiceSchedule");
    let doc = {
      name,
      practiceLicense,
      telephoneNumber,
      address,
      specialist,
      practiceSchedule,
    };
    const image = data.get("image");
    if (image.size > 0) {
      const authToken = await getAuthToken();
      const headers = {
        Authorization: authToken,
      };
      const record = await pb
        .collection("doctor_image")
        .create({ image }, { headers });
      doc = {
        ...doc,
        image: `${POCKETBASE_URL}/api/files/${record.collectionId}/${record.id}/${record.image}`,
      };
    }

    const id = new ObjectId(params.edit.toString());
    const result = await doctorsSchedule.updateOne({ _id: id }, { $set: doc });

    if (result.modifiedCount === 0) {
      return { success: false, message: "Tidak ada data yang diperbarui." };
    }

    return { success: true };
  },
};
