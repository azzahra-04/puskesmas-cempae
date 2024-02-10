import { activity } from "$db/collection/activity";
import { ObjectId } from "mongodb";

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
  const id = new ObjectId(params.activity_id.toString());
  const data = await activity.findOne({ _id: id });

  return {
    activity: { ...data, _id: data._id.toString() },
  };
}
