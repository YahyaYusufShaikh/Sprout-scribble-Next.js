import 'dotenv/config';
import type { Config } from 'drizzle-kit';

export default{
    schema: './server/schema.ts',
    out: './server/drizzle',
    driver: "pg",
    dbCredentials: {
        connectionString: process.env.POSTGRESS_URL!,
    },
}satisfies Config;
