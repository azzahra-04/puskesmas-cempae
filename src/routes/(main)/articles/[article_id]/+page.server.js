import { article } from "$db/collection/article";
import { ObjectId } from "mongodb";

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
  const id = new ObjectId(params.article_id.toString());
  const data = await article.findOne({ _id: id });

  return {
    article: { ...data, _id: data._id.toString() },
  };
}
