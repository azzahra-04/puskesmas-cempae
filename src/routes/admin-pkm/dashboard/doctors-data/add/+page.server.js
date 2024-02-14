import { doctorsSchedule } from "$db/collection/doctorsSchedule";
import { fail, redirect } from "@sveltejs/kit";
import { pb, getAuthToken } from "$lib/server/pocketbase";
import { POCKETBASE_URL } from "$env/static/private";

/** @type {import('./$types').Actions} */
export const actions = {
  add: async ({ request }) => {
    const data = await request.formData();
    const name = data.get("name");
    const practiceLicense = data.get("practiceLicense");
    const telephoneNumber = data.get("telephoneNumber");
    const address = data.get("address");
    const specialist = data.get("specialist");
    const practiceSchedule = data.get("practiceSchedule");
    const image = data.get("image");

    const authToken = await getAuthToken();
    const headers = {
      Authorization: authToken,
    };
    const record = await pb
      .collection("doctor_image")
      .create({ image }, { headers });

    const doctorsSchedules = await doctorsSchedule.insertOne({
      name,
      practiceLicense,
      telephoneNumber,
      address,
      specialist,
      practiceSchedule,
      image: `${POCKETBASE_URL}/api/files/${record.collectionId}/${record.id}/${record.image}`,
    });

    if (!doctorsSchedules) {
      return fail(401);
    }

    redirect(301, "/admin-pkm/dashboard/doctors-data");
  },
};
