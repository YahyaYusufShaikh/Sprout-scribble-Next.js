import 'dotenv/config';
import type { Config } from 'tailwindcss';

export default  {
    schema: './server/schema.ts',
    out: './server/migrations',
    dialect: "postgres",
    driver: 'pg',
    dbCredentials: {
        connectionString: process.env.POSTGRESS_URL!,
    },
    content: []
} satisfies Config;