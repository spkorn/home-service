import { Router } from "express";
import { pool } from "../utils/db.js";
import bcrypt from "bcrypt";

const authRouter = Router();

authRouter.post("/register", async (req, res) => {
  const user = {
    name: req.body.name,
    phoneNumber: req.body.phoneNumber,
    email: req.body.email,
    password: req.body.password,
  };

  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);

  // console.log(user.password.length);

  await pool.query(
    `insert into users (name, phoneNumber, email, password)
  values ($1, $2, $3, $4)`,
    [user.name, user.phoneNumber, user.email, user.password]
  );

  return res.json({
    message: "Your account has been created succesfully",

    // return res.status(404).json({
    //     message: "failed to create a new user account"
  });
});

export default authRouter;
