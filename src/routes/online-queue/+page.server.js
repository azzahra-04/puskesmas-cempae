import { onlineQueue } from "$db/collection/onlineQueue";
import { fail } from "@sveltejs/kit";
import { redirectRoleIsNot } from "$lib/server/guard";

/** @type {import('./$types').PageLoad} */
export async function load({ locals }) {
  redirectRoleIsNot("user", locals.credential, "/login");
}

/** @type {import('./$types').Actions} */
export const actions = {
  add: async ({ request }) => {
    const data = await request.formData();
    const complaint = data.get("complaint");
    const poli = data.get("poli");
    const visitDate = data.get("visit-date");

    const onlineQueues = await onlineQueue.insertOne({
      complaint,
      poli,
      visitDate,
    });

    if (!onlineQueues) {
      return fail(401);
    }

    const formatDate = visitDate.split("-").reverse().join("-");
    const queueNumber = await onlineQueue.count({ visitDate: visitDate });
    return {
      success: true,
      detail: { complaint, poli, formatDate },
      queueNumber,
    };
  },
};
