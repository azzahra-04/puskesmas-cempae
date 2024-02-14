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
  const doctorSchedules = await doctorsSchedule.find({}).toArray();

  return {
    users: users.map((v) => ({
      ...v,
      _id: v._id.toString(),
    })),
    doctorSchedules: doctorSchedules.map((v) => ({
      ...v,
      _id: v._id.toString(),
    })),
    inpatientRoomsCount: inpatientRoom.count(),
    facilitiesCount: facility.count(),
    articlesCount: article.count(),
    activitiesCount: activity.count(),
    doctorSchedulesCount: doctorsSchedule.count(),
    usersCount: user.count(),
  };
}
