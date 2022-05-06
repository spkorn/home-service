import * as pg from "pg";
import dotenv from "dotenv";

const { Pool } = pg.default;
dotenv.config();

const pool = new Pool({
  connectionString: `postgresql://postgres:${process.env.POSTGRESQL_PASSWORD}@localhost:5432/homeService`,
});

export { pool };
