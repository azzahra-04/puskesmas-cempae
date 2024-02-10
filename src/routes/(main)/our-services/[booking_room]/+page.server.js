import { POCKETBASE_URL } from "$env/static/private";
import { bookingRoom } from "$db/collection/bookingRoom";
import { inpatientRoom } from "$db/collection/inpatientRoom";
import { user } from "$db/collection/user";
import { ObjectId } from "mongodb";
import { fail, redirect } from "@sveltejs/kit";
import { pb, getAuthToken } from "$lib/server/pocketbase";
import { redirectRoleIsNot } from "$lib/server/guard";

/** @type {import('./$types').PageLoad} */
export async function load({ locals, params }) {
  redirectRoleIsNot("user", locals.credential, "/login");

  const id = new ObjectId(params.booking_room.toString());
  const data = await inpatientRoom.findOne({ _id: id });

  const userId = locals.credential.userId;
  const users = await user.findOne({ _id: new ObjectId(userId) });

  return {
    inpatientRoom: { ...data, _id: data._id.toString() },
    credential: locals.credential,
    users: { ...users, _id: users._id.toString() },
  };
}

/** @type {import('./$types').Actions} */
export const actions = {
  bookingRoom: async ({ locals, params, request }) => {
    const data = await request.formData();
    const complaint = data.get("complaint");
    const visitDate = data.get("visit-date");
    const status = data.get("status");
    const document = data.get("document");

    const id = new ObjectId(params.booking_room.toString());
    const roomName = await inpatientRoom.findOne({ _id: id });

    const userId = locals.credential.userId;
    const users = await user.findOne({ _id: new ObjectId(userId) });
    const userIdString = users._id.toString();

    if (userIdString === userId) {
      const authToken = await getAuthToken();
      const headers = {
        Authorization: authToken,
      };
      const record = await pb
        .collection("bookingRoom_image")
        .create({ document }, { headers });

      const bookingRooms = await bookingRoom.insertOne({
        userId,
        name: users.fullName,
        roomName: roomName.name,
        complaint,
        visitDate,
        status,
        document: `${POCKETBASE_URL}/api/files/${record.collectionId}/${record.id}/${record.document}`,
      });

      if (!bookingRooms) {
        return fail(401);
      }
    }

    throw redirect(301, "/our-services");
  },
};
