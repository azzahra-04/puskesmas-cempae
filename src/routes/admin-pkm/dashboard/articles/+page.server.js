import { article } from "$db/collection/article";
import { redirect } from "@sveltejs/kit";
import { ObjectId } from "mongodb";

/** @type {import('./$types').PageLoad} */
export async function load() {
  const articles = await article.find({}).toArray();

  return {
    articles: articles.map((v) => ({ ...v, _id: v._id.toString() })),
  };
}

/** @type {import('./$types').Actions} */
export const actions = {
  delete: async ({ request }) => {
    const data = await request.formData();
    const id = new ObjectId(data.get("id"));
    const result = await article.deleteOne({ _id: id });

    redirect(301, "/admin-pkm/dashboard/articles");
  },
};
