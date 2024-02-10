import { article } from "$db/collection/article";
import { testimoni } from "$db/collection/testimoni";

/** @type {import('./$types').PageLoad} */
export async function load() {
  const articles = await article.find({}).toArray();
  const testimonial = await testimoni.find({}).toArray();

  return {
    articles: articles.map((v) => ({ ...v, _id: v._id.toString() })),
    testimonial: testimonial.map((v) => ({ ...v, _id: v._id.toString() })),
  };
}
