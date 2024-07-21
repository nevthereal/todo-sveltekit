import { db } from '$lib/db/db';
import { todosTable } from '$lib/db/schema';
import { desc } from 'drizzle-orm';
import type { Actions, PageServerLoad } from './$types';
import { z } from 'zod';
import { fail, superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';

const schema = z.object({
	title: z.string(),
	content: z.string()
});

export const load: PageServerLoad = async ({ depends }) => {
	depends('query:todos');
	const todos = await db.select().from(todosTable).orderBy(desc(todosTable.id));

	const form = await superValidate(zod(schema));

	return {
		todos,
		form
	};
};

export const actions = {
	default: async ({ request }) => {
		const form = await superValidate(request, zod(schema));

		if (!form.valid) {
			return fail(400, { form });
		}

		await db.insert(todosTable).values({
			title: form.data.title,
			content: form.data.content
		});
	}
} satisfies Actions;
