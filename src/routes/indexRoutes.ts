import { Router } from "express";
import morgan from "morgan";
import UserRoutes from "./userRoutes";
import PostRoutes from "./postRoutes";
import ImgRoutes from "./imgRoutes";
import NodemailerRoutes from "./nodemailer";

const router = Router();

router.use("/user", UserRoutes);
router.use("/post", PostRoutes);
router.use("/img", ImgRoutes);
router.use("/nodemailer", NodemailerRoutes);

export default router;
