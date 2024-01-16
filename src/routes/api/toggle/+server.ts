import { db } from '$lib/db/db';
import { todosTable } from '$lib/db/schema';
import { eq } from 'drizzle-orm';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ url }) => {
	const id = Number(url.searchParams.get('id'));
	const completedVal = await db
		.select({
			completed: todosTable.completed
		})
		.from(todosTable)
		.where(eq(todosTable.id, id));

	await db
		.update(todosTable)
		.set({ completed: !completedVal[0].completed })
		.where(eq(todosTable.id, id));
	return new Response(String('Success'));
};
