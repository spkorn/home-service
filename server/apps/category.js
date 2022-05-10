import { Router } from "express";
import { pool } from "../utils/db.js";
import { protect } from "../middlewares/protects.js";

const categoryRouter = Router();
//categoryRouter.use(protect);

categoryRouter.post("/", async (req, res) => {
  const newCategory = {
    ...req.body,
    category_created_date: new Date(),
    category_edited_date: new Date(),
  };

  await pool.query(
    `insert into category (category_name, category_created_date, category_edited_date) 
    values ($1, $2, $3)`,
    [
      newCategory.category_name,
      newCategory.category_created_date,
      newCategory.category_edited_date,
    ]
  );

  return res.json({
    message: "New category has been created successfully.",
  });
});

export default categoryRouter;
