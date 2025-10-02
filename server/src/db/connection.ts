import { drizzle } from "drizzle-orm/node-postgres";
import pg from "pg";
const { Pool } = pg;

import * as schema from "./schema";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

type Db = typeof db;
export type Tx = Parameters<Parameters<Db['transaction']>[0]>[0];
export const db = drizzle(pool, { schema: { ...schema } });