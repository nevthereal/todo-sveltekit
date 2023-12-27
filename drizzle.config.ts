import type { Config } from 'drizzle-kit';
import * as dotenv from 'dotenv';

const { DB_URL } = process.env;
if (!DB_URL) {
	throw new Error('DB_URL is not set');
}

export default {
	schema: './src/lib/db/schema.ts',
	out: './migrations',
	driver: 'pg',
	dbCredentials: {
		connectionString: DB_URL
	}
} satisfies Config;
