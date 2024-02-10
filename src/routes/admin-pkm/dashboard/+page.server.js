import { inpatientRoom } from "$db/collection/inpatientRoom";
import { facility } from "$db/collection/facility";
import { article } from "$db/collection/article";
import { activity } from "$db/collection/activity";
import { doctorsSchedule } from "$db/collection/doctorsSchedule";
import { user } from "$db/collection/user";
import { redirectRoleIsNot } from "$lib/server/guard";

/** @type {import('./$types').PageLoad} */
export async function load({ locals }) {
  redirectRoleIsNot("admin-pkm", locals.credential, "/admin-pkm/login");

  const users = await user.find({}).toArray();
  const inpatientRooms = await inpatientRoom.find({}).toArray();
  const facilities = await facility.find({}).toArray();
  const articles = await article.find({}).toArray();
  const activities = await activity.find({}).toArray();
  const doctorsSchedules = await doctorsSchedule.find({}).toArray();

  return {
    users: users.map((v) => ({
      ...v,
      _id: v._id.toString(),
    })),
    inpatientRooms: inpatientRooms.map((v) => ({
      ...v,
      _id: v._id.toString(),
    })),
    facilities: facilities.map((v) => ({
      ...v,
      _id: v._id.toString(),
    })),
    articles: articles.map((v) => ({
      ...v,
      _id: v._id.toString(),
    })),
    activities: activities.map((v) => ({
      ...v,
      _id: v._id.toString(),
    })),
    doctorsSchedules: doctorsSchedules.map((v) => ({
      ...v,
      _id: v._id.toString(),
    })),
  };
}
