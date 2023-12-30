import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client';
import { DB_URL, AUTH_TOKEN } from '$env/static/private';

const client = createClient({ url: DB_URL, authToken: AUTH_TOKEN });
export const db = drizzle(client);
