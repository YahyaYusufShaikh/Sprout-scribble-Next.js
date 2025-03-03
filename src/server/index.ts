import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from "@/server/shcema"


const sql = neon(process.env.POSTGRESS_URL as string);
export const db = drizzle(sql, {schema, logger: true})

