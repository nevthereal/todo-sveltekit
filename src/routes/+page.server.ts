import { db } from '$lib/db/db';
import { todosTable } from '$lib/db/schema';

export const load = async () => {
	const result = await db.select().from(todosTable);
	return {
		result
	};
};
