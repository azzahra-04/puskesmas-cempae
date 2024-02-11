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

    // const queues = await onlineQueue
    //   .find({ visitDate: visitDate, poli: poli })
    //   .toArray();

    // return { success: true, queueNumber: length(queues) };
    // // throw redirect(301, "/doctor-schedules");
  },
};
