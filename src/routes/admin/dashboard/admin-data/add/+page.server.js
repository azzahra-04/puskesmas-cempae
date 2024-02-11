import { credential } from "$db/collection/credential";
import { adminPuskesmas } from "$db/collection/adminPuskesmas";
import { fail, redirect } from "@sveltejs/kit";
import { POCKETBASE_URL } from "$env/static/private";
import { pb, getAuthToken } from "$lib/server/pocketbase";
import bcrypt from "bcrypt";

/** @type {import('./$types').Actions} */
export const actions = {
  registerAdmin: async ({ request }) => {
    const data = await request.formData();
    const username = data.get("username");
    const password = data.get("password");

    const name = data.get("name");
    const telephoneNumber = data.get("phone");
    const email = data.get("email");
    const address = data.get("address");
    const image = data.get("image");

    const checkCredential = await credential.findOne(
      { username: username },
      {
        projection: { username: 1 },
      }
    );

    if (checkCredential) {
      return fail(401);
    }

    const checkAdmin = await adminPuskesmas.findOne({
      $or: [{ email: email }, { telephoneNumber: telephoneNumber }],
    });

    if (checkAdmin) {
      return fail(401);
    }

    const authToken = await getAuthToken();
    const headers = {
      Authorization: authToken,
    };
    const record = await pb
      .collection("adminpkm_image")
      .create({ image }, { headers });

    const adminsPuskesmas = await adminPuskesmas.insertOne({
      name,
      telephoneNumber,
      email,
      address,
      image: `${POCKETBASE_URL}/api/files/${record.collectionId}/${record.id}/${record.image}`,
    });

    if (!adminsPuskesmas) {
      return fail(401);
    }

    const credentials = await credential.insertOne({
      username: username,
      password: await bcrypt.hash(password, 10),
      role: "admin-pkm",
      userId: adminsPuskesmas.insertedId.toString(),
    });

    if (!credentials) {
      await adminPuskesmas.deleteOne({ _id: adminsPuskesmas.insertedId });
      return fail(401);
    }

    throw redirect(301, "/admin/dashboard/admin-data");
  },
};
