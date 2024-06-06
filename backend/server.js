import { app } from "./app.js";
import Razorpay from "razorpay";

const PORT = process.env.PORT || 2010;

export const instance = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

app.listen(PORT, () => {
  console.log("Connect to port", PORT);
});
