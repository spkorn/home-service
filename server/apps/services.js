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

//API route to one service item page
serviceRouter.get("/:id", async (req, res) => {
  const serviceId = req.params.id;

  const result = await pool.query(`select * from service where service_id=$1`, [
    serviceId,
  ]);
  return res.json({
    data: result.rows[0],
  });
});

//API route to create service item page
serviceRouter.post("/", async (req, res) => {
  const newServiceItem = {
    ...req.body,
    created_date: new Date(),
    edited_date: new Date(),
  };

  const result = await pool.query(
    `insert into service (service_name, category, price_range_estimate, service_photo, created_date, edited_date) 
    values ($1, $2, $3, $4, $5, $6)`,
    [
      newServiceItem.service_name,
      newServiceItem.category,
      newServiceItem.price_range_estimate,
      newServiceItem.service_photo,
      newServiceItem.created_date,
      newServiceItem.edited_date,
    ]
  );

  return res.json({
    message: "New service item has been created successfully.",
  });
});

// //API route to update existing service item page
// serviceRouter.put("/:id", async (req, res) => {
//   const existingServiceItem = {
//     ...req.body,
//     edited_date: new Date(),
//   };

//   const serviceId = req.params.id;

//   const result = await pool.query(
//     `update posts set service_name=$1, 
//     category=$2, 
//     price_range_estimate=$3, 
//     service_photo=$4, 
//     created_date=$5, 
//     edited_date=$6 
//     where service_id=$7`,
//     [
//       existingServiceItem.service_name,
//       existingServiceItem.category,
//       existingServiceItem.price_range_estimate,
//       existingServiceItem.service_photo,
//       existingServiceItem.created_date,
//       existingServiceItem.edited_date,
//       serviceId,
//     ]
//   );

//   return res.json({
//     message: `Service item ${serviceId} has been updated.`,
//   });
// });

//API ROUTE to delete exisitng service item
serviceRouter.delete("/:id", async (req, res) => {
  const serviceId = req.params.id;

  await pool.query(`delete from service where service_id=$1`, [serviceId]);

  return res.json({
    message: `service item ${serviceId} has been deleted.`,
  });
});

export default serviceRouter;
