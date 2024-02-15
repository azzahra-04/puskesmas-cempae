import { article } from "$db/collection/article";
import { ObjectId } from "mongodb";
import { pb, getAuthToken } from "$lib/server/pocketbase";
import { POCKETBASE_URL } from "$env/static/private";

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
  const id = new ObjectId(params.edit.toString());
  const data = await article.findOne({ _id: id });

  return {
    article: { ...data, _id: data._id.toString() },
  };
}

/** @type {import('./$types').Actions} */
export const actions = {
  edit: async ({ params, request }) => {
    const data = await request.formData();
    const title = data.get("title");
    const description = data.get("description");
    let doc = {
      title,
      description,
    };
    const image = data.get("image");
    if (image.size > 0) {
      const authToken = await getAuthToken();
      const headers = {
        Authorization: authToken,
      };
      const record = await pb
        .collection("article_image")
        .create({ image }, { headers });
      doc = {
        ...doc,
        image: `${POCKETBASE_URL}/api/files/${record.collectionId}/${record.id}/${record.image}`,
      };
    }

    const id = new ObjectId(params.edit.toString());
    const result = await article.updateOne({ _id: id }, { $set: doc });

    return { success: true };
  },
};
