import { feedback } from "$db/collection/feedback";
import { redirect } from "@sveltejs/kit";
import { ObjectId } from "mongodb";

/** @type {import('./$types').PageLoad} */
export async function load() {
  const feedbacks = await feedback.find({}).toArray();

  return {
    feedbacks: feedbacks.map((v) => ({ ...v, _id: v._id.toString() })),
  };
}

/** @type {import('./$types').Actions} */
export const actions = {
  delete: async ({ request }) => {
    const data = await request.formData();
    const id = new ObjectId(data.get("id"));
    const result = await feedback.deleteOne({ _id: id });

    redirect(301, "/admin-pkm/dashboard/feedbacks");
  },
};
