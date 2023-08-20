/** @type {import('./$types').LayoutLoad} */
export function load() {
	return {
		sections: [
			{ slug: 'profile', title: 'Profile' },
			{ slug: 'users', title: 'Users' },
			{ slug: 'annonces', title: 'Annonces' }
		]
	};
}
