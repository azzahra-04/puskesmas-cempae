import { connect } from "$db/mongo";
import { session } from "$lib/server/auth";

connect()
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error(err);
  });

export const handle = async ({ event, resolve }) => {
  const sessionId = event.cookies.get("sessionId");

  let credential;

  try {
    credential = await session.validate(sessionId);
  } catch (error) {
    // console.error(error);
  }

  if (credential) {
    event.locals.credential = credential;
  }

  return resolve(event);
};
