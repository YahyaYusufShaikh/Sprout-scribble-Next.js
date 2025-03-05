import 'dotenv/config';
import type { Config } from 'drizzle-kit';
import * as dotenv from "dotenv"

dotenv.config({
    path: ".env.local",
})

export default  {
    schema: "./src/server/shcema.ts",
    out: './src/server/migrations',
    dialect: "postgresql", // Replace with the correct dialect for your database
    driver:"pglite",
    dbCredentials: {
        url: process.env.POSTGRESS_URL!, // Note: connectionString is used instead of url
    },
} satisfies Config;