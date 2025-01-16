import { Router } from "express";
import { signupValidators,signup, login } from "../controllers/authController.js";

const router = Router();

router.post("/signup", signupValidators, signup);
router.post("/login", login);

export default router;