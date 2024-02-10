/** @type {import('./$types').PageLoad} */
export async function load({ locals }) {
  return {
    credential: locals.credential,
  };
}
