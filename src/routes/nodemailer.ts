import { Router } from "express";
import { nodemailerControlllers } from "../controllers/nodemailer";

const router = Router();

router.put("/sendEmail", nodemailerControlllers.sendEmail);

export default router;
