import { adminPuskesmas } from "$db/collection/adminPuskesmas";
import { ObjectId } from "mongodb";
import { redirect } from "@sveltejs/kit";

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

    redirect(301, "/admin/dashboard/admin-data");
  },
};
