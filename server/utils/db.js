import * as pg from "pg";

const { Pool } = pg.default;

const pool = new Pool({
  connectionString: "postgresql://postgres:PaulRen1993@localhost:5432/homeService",
});

export { pool };
