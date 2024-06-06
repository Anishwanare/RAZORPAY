import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import paymentRouter from "./routes/paymentRoute.js";

dotenv.config({ path: "./config/config.env" });
export const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use("/api", paymentRouter);
app.get("/api/getkey", (req, res) => {
  res.status(200).json({
    key: process.env.RAZORPAY_KEY_ID,
  });
});
