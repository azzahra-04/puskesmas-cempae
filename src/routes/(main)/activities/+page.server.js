import { activity } from "$db/collection/activity";

/** @type {import('./$types').PageLoad} */
export async function load() {
  const activities = await activity.find({}).toArray();

  return {
    activities: activities.map((v) => ({ ...v, _id: v._id.toString() })),
  };
}
