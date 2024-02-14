import { feedback } from "$db/collection/feedback";
import { fail, redirect } from "@sveltejs/kit";

/** @type {import('./$types').Actions} */
export const actions = {
  add: async ({ request }) => {
    const data = await request.formData();
    const name = data.get("name");
    const email = data.get("email");
    const message = data.get("message");

    const feedbacks = await feedback.insertOne({
      name,
      email,
      message,
    });

    if (!feedbacks) {
      return fail(401);
    }

    redirect(301, "/about-us");
  },
};
