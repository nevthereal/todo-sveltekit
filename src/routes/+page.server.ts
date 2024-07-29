import { db } from '$lib/db/db';
import { todosTable } from '$lib/db/schema';
import { desc, eq } from 'drizzle-orm';
import type { Actions, PageServerLoad } from './$types';
import { fail, superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { createSchema, deleteSchema, toggleSchema } from '$lib/zod';

export const load: PageServerLoad = async ({ depends }) => {
	depends('query:todos');
	const todos = await db.select().from(todosTable).orderBy(desc(todosTable.id));

	const createForm = await superValidate(zod(createSchema));
	const toggleForm = await superValidate(zod(toggleSchema));
	const deleteForm = await superValidate(zod(deleteSchema));

	return {
		todos,
		createForm,
		toggleForm,
		deleteForm
	};
};

export const actions = {
	create: async ({ request }) => {
		const form = await superValidate(request, zod(createSchema));

		if (!form.valid) {
			return fail(400, { form });
		}

		await db.insert(todosTable).values({
			title: form.data.title,
			content: form.data.content
		});
	},
	toggle: async ({ request }) => {
		const form = await superValidate(request, zod(toggleSchema));

		if (!form.valid) {
			return fail(400, { form });
		}

		await db
			.update(todosTable)
			.set({
				completed: !form.data.state
			})
			.where(eq(todosTable.id, form.data.id));

		return { form };
	},
	delete: async ({ request }) => {
		const form = await superValidate(request, zod(toggleSchema));

		if (!form.valid) {
			return fail(400, { form });
		}

		await db.delete(todosTable).where(eq(todosTable.id, form.data.id));
		return { form };
	}
} satisfies Actions;
