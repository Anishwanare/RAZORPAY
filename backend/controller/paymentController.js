import { instance } from "../server.js";
import crypto from "crypto";

export const checkOut = async (req, res, next) => {
  const { amount } = req.body;
  if (!amount) {
    return res.status(400).json({
      status: false,
      message: "Amount is required",
    });
  }

  const amountInPaise = amount * 100;

  const options = {
    amount: amountInPaise, // amount in the smallest currency unit
    currency: "INR",
    receipt: "order_rcptid_11",
  };
  const order = await instance.orders.create(options);

  console.log(order);
  res.status(200).json({
    status: true,
    order,
  });
};

export const paymentVerification = async (req, res, next) => {
  console.log(req.body);

  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
    req.body;

  const body = razorpay_order_id + "|" + razorpay_payment_id;

  const expectedSignature = crypto
    .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
    .update(body.toString())
    .digest("hex");

  const isAuthenticate = expectedSignature === razorpay_signature;

  if (isAuthenticate) {
    // Save payment information to the database here (if needed)

    // Redirect to payment success page
    return res.redirect(
      `http://localhost:5173/paymentsuccess?reference=${razorpay_payment_id}`
    );
  } else {
    return res.status(400).json({
      status: false,
      message: "Payment Failed",
    });
  }
};
