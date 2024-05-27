import { adminPuskesmas } from "$db/collection/adminPuskesmas";
import { ObjectId } from "mongodb";

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
  const id = new ObjectId(params.edit.toString());
  const data = await adminPuskesmas.findOne({ _id: id });

  return {
    adminPuskesmas: { ...data, _id: data._id.toString() },
  };
}

/** @type {import('./$types').Actions} */
export const actions = {
  edit: async ({ params, request }) => {
    const data = await request.formData();
    const name = data.get("name");
    const telephoneNumber = data.get("phone");
    const address = data.get("address");
    let doc = {
      name,
      telephoneNumber,
      address,
    };

    const id = new ObjectId(params.edit.toString());
    const result = await adminPuskesmas.updateOne({ _id: id }, { $set: doc });

    if (result.modifiedCount === 0) {
      return { success: false, message: "Tidak ada data yang diperbarui." };
    }

    return { success: true };
  },
};
