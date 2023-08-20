/** @type {import('./$types').PageLoad} */
export function load({ params }) {
	return {
		annonce: {
			title: `Title for ${params.slug} goes here`,
			content: `Content for ${params.slug} goes here`
		}
	};
}

//Real Life Example importing data on page.server.js
// import * as db from '$lib/server/database';

// /** @type {import('./$types').PageServerLoad} */
// export async function load({ params }) {
//   return {
//     post: await db.getPost(params.slug)
//   };
// }
