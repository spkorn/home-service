import { Router } from "express";
import { pool } from "../utils/db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const authRouter = Router();

authRouter.post("/register", async (req, res) => {
  const user = {
    name: req.body.name,
    phoneNumber: req.body.phoneNumber,
    email: req.body.email,
    password: req.body.password,
    role: req.body.role,
  };

  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);

  await pool.query(
    `insert into users (name, phoneNumber, email, password, role)
  values ($1, $2, $3, $4, $5)`,
    [user.name, user.phoneNumber, user.email, user.password, user.role]
  );

  return res.json({
    message: "Your account has been created succesfully",
  });
});

authRouter.post("/login", async (req, res) => {
  const userEmail = req.body.email;

  const user = await pool.query(`select * from users where email=$1`, [
    userEmail,
  ]);

  if (user.rows.length === 0) {
    return res.status(404).json({
      message: "email not found",
    });
  }

  const isValidPassword = await bcrypt.compare(
    req.body.password,
    user.rows[0].password
  );

  if (!isValidPassword) {
    return res.status(400).json({
      message: "password is invalid",
    });
  }

  const token = jwt.sign(
    {
      user_id: user.rows[0].user_id,
      name: user.rows[0].name,
      email: user.rows[0].email,
      phoneNumber: user.rows[0].phonenumber,
      role: user.rows[0].role,
    },
    process.env.SECRET_KEY,
    {
      expiresIn: "24h",
    }
  );

  return res.json({
    message: "login successfully",
    token,
  });
});

export default authRouter;
