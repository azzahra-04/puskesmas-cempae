import { session as dbSession } from "$db/collection/session";
import { ObjectId } from "mongodb";

export const session = {
  create: async function (data) {
    try {
      // Insert session data into the database collection
      const sessionData = await dbSession.insertOne(data);

      // Check if the insertion was successful
      if (!sessionData) {
        throw new Error("Failed to create session in database");
      }

      return sessionData.insertedId.toString();
    } catch (error) {
      throw new Error("Failed to create session with database");
    }
  },
  validate: async function (id) {
    try {
      // Check if the session exists in the store
      const sessionData = await dbSession.findOne({
        _id: new ObjectId(id),
      });

      if (!sessionData) {
        throw new Error("Session not found");
      }

      return sessionData.credential;
    } catch (error) {
      throw new Error("Failed to validate session");
    }
  },
  destroy: async function (id) {
    try {
      // Remove the session from the store
      const sessionData = await dbSession.deleteOne({
        // return value dri deleteOne() adalah { acknowledged: true, deletedCount: 1 }
        _id: new ObjectId(id),
      });

      if (sessionData.deletedCount < 1) {
        throw new Error("Failed to destroy session");
      }

      return true;
    } catch (error) {
      throw new Error("Failed to destroy session");
    }
  },
};
