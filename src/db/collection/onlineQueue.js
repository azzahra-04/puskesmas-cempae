import db from "$db/mongo";

export const onlineQueue = db.collection("onlineQueue");
