import { redirect } from '@sveltejs/kit';
/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ cookies, request }) => {
		const formData = await request.formData();
		const email = formData.get('email');
		const password = formData.get('password');

		if (email === 'test@test.com' && password === 'admin') {
			cookies.set('access', 'true', { path: '/', sameSite: 'strict' });
			throw redirect(302, '/admin');
		}
		return {
			email,
			message: 'Mot de passe ou email incorrect'
		};
	}
};
