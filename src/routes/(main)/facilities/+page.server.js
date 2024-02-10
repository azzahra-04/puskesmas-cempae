import { facility } from "$db/collection/facility";

/** @type {import('./$types').PageLoad} */
export async function load() {
  const facilities = await facility.find({}).toArray();

  return {
    facilities: facilities.map((v) => ({ ...v, _id: v._id.toString() })),
  };
}
