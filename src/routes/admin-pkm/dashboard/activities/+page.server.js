import { activity } from "$db/collection/activity";
import { ObjectId } from "mongodb";
import { redirect } from "@sveltejs/kit";

/** @type {import('./$types').PageLoad} */
export async function load() {
  const activities = await activity.find({}).toArray();

  return {
    activities: activities.map((v) => ({
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
    const result = await activity.deleteOne({ _id: id });

    throw redirect(301, "/admin-pkm/dashboard/activities");
  },
};
