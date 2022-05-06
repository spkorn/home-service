import { Router } from "express";
import { pool } from "../utils/db.js";
import { protect } from "../middlewares/protects.js";

const serviceRouter = Router();
//serviceRouter.use(protect);

// API route to service listing page
serviceRouter.get("/", async (req, res) => {
  const results = await pool.query(`select * from service`);
  return res.status(200).json({
    data: results.rows,
  });
});

serviceRouter.delete("/:id", async (req, res) => {
  const serviceId = req.params.id;

  await pool.query(`delete from service where service_id=$1`, [serviceId]);

  return res.json({
    message: `service item ${serviceId} has been deleted.`,
  });
});

export default serviceRouter;
