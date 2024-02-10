import { inpatientRoom } from "$db/collection/inpatientRoom";

/** @type {import('./$types').PageLoad} */
export async function load() {
  const inpatientRooms = await inpatientRoom.find({}).toArray();

  return {
    inpatientRooms: inpatientRooms.map((v) => ({
      ...v,
      _id: v._id.toString(),
    })),
  };
}
