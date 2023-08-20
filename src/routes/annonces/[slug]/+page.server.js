import { error } from '@sveltejs/kit';
/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
	const annonce = await getAnnonceFromDatabase(params.slug);
	if (annonce) {
		return annonce;
	}
	throw error(404, 'Aucune annonce pour le moment');
}
