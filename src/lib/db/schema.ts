import { boolean, pgTable, serial, text } from 'drizzle-orm/pg-core';

export const todosTable = pgTable('todos', {
	id: serial('id').primaryKey(),
	content: text('content').notNull(),
	completed: boolean('completed').notNull().default(false)
});
