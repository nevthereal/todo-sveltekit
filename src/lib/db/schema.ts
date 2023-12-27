import { boolean, pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';

export const todosTable = pgTable('todos', {
	id: serial('id').primaryKey(),
	content: text('content').notNull(),
	completed: boolean('completed').notNull().default(false),
	createdAt: timestamp('created_at', { withTimezone: false }).notNull().default(new Date())
});
