import { db } from '$lib/db/db';
import { todosTable } from '$lib/db/schema';
import { eq } from 'drizzle-orm';
import type { Actions, PageServerLoad } from './$types';

export const load = (async () => {
	const result = await db.select().from(todosTable);
	return {
		result
	};
}) satisfies PageServerLoad;

export const actions = {
	createTodo: async ({ request }) => {
		const formData = await request.formData();
		console.log(formData);
		const title = formData.get('title') as string;
		const content = formData.get('content') as string;
		await db.insert(todosTable).values({
			completed: false,
			title: title,
			content: content
		});
	},
	deleteTodo: async ({ request }) => {
		const formData = await request.formData();
		const id = parseInt(formData.get('id') as string);
		await db.delete(todosTable).where(eq(todosTable.id, id));
	},
	triggerComplete: async ({ request }) => {
		const formData = await request.formData();
		const id = parseInt(formData.get('id') as string);
		await db.update(todosTable).set({ completed: true }).where(eq(todosTable.id, id));
	}
} satisfies Actions;
