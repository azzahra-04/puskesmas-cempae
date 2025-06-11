import { article } from "$db/collection/article";
// import {error} from '@sveltejs/kit'

/** @type {import('./$types').PageLoad} */
export async function load() {
  const articles = await article.find({}).toArray();

  return {
    articles: articles.map((v) => ({ ...v, _id: v._id.toString() })),
  };
}
