import { inpatientRoom } from "$db/collection/inpatientRoom";
import { bookingRoom } from "$db/collection/bookingRoom";
import { redirect } from "@sveltejs/kit";
import { ObjectId } from "mongodb";

/** @type {import('./$types').PageLoad} */
export async function load() {
  const inpatientRooms = await inpatientRoom.find({}).toArray();
  const bookingRooms = await bookingRoom.find({}).toArray();

  return {
    inpatientRooms: inpatientRooms.map((v) => ({
      ...v,
      _id: v._id.toString(),
    })),
    bookingRooms: bookingRooms.map((v) => ({
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
    const result = await inpatientRoom.deleteOne({ _id: id });

    redirect(301, "/admin-pkm/dashboard/rooms");
  },
};
