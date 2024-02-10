import db from "$db/mongo";

export const session = db.collection("session");
