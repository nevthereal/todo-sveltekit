import { z } from 'zod';

export const createSchema = z.object({
	title: z.string(),
	content: z.string()
});

export const toggleSchema = z.object({
	id: z.number(),
	state: z.boolean()
});

export const deleteSchema = z.object({
	id: z.number()
});
