import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
const sql = neon(process.env.POSTGRESS_URL as string);
export const db = drizzle(sql)