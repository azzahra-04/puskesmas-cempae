import { article } from "$db/collection/article";
import { fail, redirect } from "@sveltejs/kit";
import { pb, getAuthToken } from "$lib/server/pocketbase";
import { POCKETBASE_URL } from "$env/static/private";

/** @type {import('./$types').Actions} */
export const actions = {
  add: async ({ request, locals }) => {
    const data = await request.formData();
    const title = data.get("title");
    const author = locals.credential.username;
    const description = data.get("description");
    const created_at = data.get("created_at");
    const image = data.get("image");

    const authToken = await getAuthToken();
    const headers = {
      Authorization: authToken,
    };
    const record = await pb
      .collection("article_image")
      .create({ image }, { headers });

    const articles = await article.insertOne({
      title,
      author,
      description,
      created_at,
      image: `${POCKETBASE_URL}/api/files/${record.collectionId}/${record.id}/${record.image}`,
    });

    if (!articles) {
      return fail(401);
    }

    throw redirect(301, "/admin-pkm/dashboard/articles");
  },
};
