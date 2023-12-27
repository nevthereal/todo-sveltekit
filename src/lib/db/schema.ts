import { boolean, pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';

export const todosTable = pgTable('todos', {
	id: serial('id').primaryKey(),
	content: text('content').notNull(),
	completed: boolean('completed').notNull().default(false),
	due: timestamp('due', { withTimezone: false, precision: 0 }).notNull()
});
