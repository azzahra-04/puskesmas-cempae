import { doctorsSchedule } from "$db/collection/doctorsSchedule";
import { redirect } from "@sveltejs/kit";
import { ObjectId } from "mongodb";

/** @type {import('./$types').PageLoad} */
export async function load() {
  const doctorsSchedules = await doctorsSchedule.find({}).toArray();

  return {
    doctorsSchedules: doctorsSchedules.map((v) => ({
      ...v,
      _id: v._id.toString(),
    })),
  };
}

/** @type {import('./$types').Actions} */
export const actions = {
  delete: async ({ request }) => {
    const data = await request.formData();
    const id = new ObjectId(data.get("id"));
    const result = await doctorsSchedule.deleteOne({ _id: id });

    redirect(301, "/admin-pkm/dashboard/doctors-data");
  },
};
