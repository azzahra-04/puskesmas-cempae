import { credential } from "$db/collection/credential";
import { user } from "$db/collection/user";
import { fail, redirect } from "@sveltejs/kit";
import bcrypt from "bcrypt";

/** @type {import('./$types').PageServerLoad} */
export const load = async ({ locals }) => {
  if (locals.credential) {
    throw redirect(301, "/");
  }
};

/** @type {import('./$types').Actions} */
export const actions = {
  register: async ({ request }) => {
    const data = await request.formData();
    const username = data.get("username");
    const password = data.get("password");

    const fullName = data.get("full-name");
    const image = data.get("image");
    const gender = data.get("gender");
    const dateOfBirth = data.get("date-of-birth");
    const telephoneNumber = data.get("phone");
    const email = data.get("email");
    const address = data.get("address");

    const checkCredential = await credential.findOne(
      { username: username },
      {
        projection: { username: 1 },
      }
    );

    if (checkCredential) {
      return fail(401);
    }

    const checkUser = await user.findOne({
      $or: [{ email: email }, { telephoneNumber: telephoneNumber }],
    });

    if (checkUser) {
      return fail(401);
    }

    const users = await user.insertOne({
      fullName,
      image,
      gender,
      dateOfBirth,
      telephoneNumber,
      email,
      address,
    });

    if (!users) {
      return fail(401);
    }

    const credentials = await credential.insertOne({
      username: username,
      password: await bcrypt.hash(password, 10),
      role: "user",
      userId: users.insertedId.toString(),
    });

    if (!credentials) {
      await user.deleteOne({ _id: users.insertedId });
      return fail(401);
    }

    throw redirect(301, "/login");
  },
};
