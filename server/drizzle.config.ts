import type { Config } from "drizzle-kit";

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL environment variable is required");
}

const DATABASE_URL = process.env.DATABASE_URL;

export default {
  schema: "./src/db/schema.ts",
  dialect: "postgresql",
  out: "./migrations",
  dbCredentials: {
    url: DATABASE_URL,
    ssl: {
      rejectUnauthorized: false,
    },
  },
  verbose: true,
  strict: true,
} satisfies Config;

