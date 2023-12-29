import { boolean, pgTable, serial, text } from 'drizzle-orm/pg-core';

export const todosTable = pgTable('todos', {
	id: serial('id').primaryKey(),
	title: text('title').notNull(),
	content: text('content'),
	completed: boolean('completed').notNull().default(false)
});
