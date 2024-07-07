import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client';

const client = createClient({ url: 'http://127.0.0.1:8080' });
export const db = drizzle(client);
