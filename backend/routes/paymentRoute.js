import express from "express";
import { checkOut, paymentVerification } from "../controller/paymentController.js";

const router = express.Router();

router.post("/checkout", checkOut); 
router.post("/paymentverification", paymentVerification); 

export default router;
