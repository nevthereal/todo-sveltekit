import { db } from '$lib/db/db';
import { todosTable } from '$lib/db/schema';
import type { Actions, PageServerLoad } from './$types';

export const load = (async () => {
	const result = await db.select().from(todosTable);
	return {
		result
	};
}) satisfies PageServerLoad;

export const actions = {
	default: async ({ request }) => {
		const formData = await request.formData();
		const content = formData.get('content') as string;
		const due = formData.get('due') as string;
		await db.insert(todosTable).values([
			{
				content,
				due
			}
		]);
	}
} satisfies Actions;
