import type { Config } from 'drizzle-kit';

export default {
	schema: './src/lib/db/schema.ts',
	out: './migrations',
	driver: 'turso',
	dbCredentials: {
		url: 'file:local.db'
	}
} satisfies Config;
