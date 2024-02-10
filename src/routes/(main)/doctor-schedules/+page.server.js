import { doctorsSchedule } from "$db/collection/doctorsSchedule";

/** @type {import('./$types').PageLoad} */
export async function load() {
  const doctorsSchedules = await doctorsSchedule.find({}).toArray();

  return {
    doctorsSchedules: doctorsSchedules.map((v) => ({
      ...v,
      _id: v._id.toString(),
    })),
  };
}
