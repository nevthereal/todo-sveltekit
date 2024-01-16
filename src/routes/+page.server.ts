import { db } from '$lib/db/db';
import { todosTable } from '$lib/db/schema';
import { desc, eq } from 'drizzle-orm';
import type { Actions, PageServerLoad } from './$types';

export const load = (async () => {
	const result = await db.select().from(todosTable).orderBy(desc(todosTable.id));
	return {
		result
	};
}) satisfies PageServerLoad;

export const actions = {
	default: async ({ request }) => {
		const formData = await request.formData();
		const title = formData.get('title') as string;
		const content = formData.get('content') as string;
		await db.insert(todosTable).values({
			completed: false,
			title: title,
			content: content
		});
	}
} satisfies Actions;
