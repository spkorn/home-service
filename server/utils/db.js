import * as pg from "pg";

const { Pool } = pg.default;

const pool = new Pool({
  connectionString: `postgresql://postgres:272647@localhost:5432/homeService`,
});

export { pool };
