import PocketBase from "pocketbase";
import {
  POCKETBASE_URL,
  POCKETBASE_ADMIN_USERNAME,
  POCKETBASE_ADMIN_PASSWORD,
} from "$env/static/private";

export const pb = new PocketBase(POCKETBASE_URL);

export async function getAuthToken() {
  const auth = await pb.admins.authWithPassword(
    POCKETBASE_ADMIN_USERNAME,
    POCKETBASE_ADMIN_PASSWORD
  );
  return auth.token;
}
