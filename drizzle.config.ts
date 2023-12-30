import type { Config } from 'drizzle-kit';
import 'dotenv/config';

const { DB_URL, AUTH_TOKEN } = process.env;

export default {
	schema: './src/lib/db/schema.ts',
	out: './migrations',
	driver: 'turso',
	dbCredentials: {
		url: process.env.DB_URL!,
		authToken: process.env.AUTH_TOKEN
	}
} satisfies Config;
