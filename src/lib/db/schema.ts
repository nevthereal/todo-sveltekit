import { sqliteTable, integer, primaryKey, text } from 'drizzle-orm/sqlite-core';

export const todosTable = sqliteTable('todos', {
	id: integer('id').primaryKey(),
	title: text('title').notNull(),
	content: text('content'),
	completed: integer('completed', { mode: 'boolean' }).notNull().default(false)
});
