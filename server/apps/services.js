import { Router } from "express";
import { pool } from "../utils/db.js"
import { protect } from "../middlewares/protects.js";

const serviceRouter = Router();
serviceRouter.use(protect);

