import { Router } from "express"
import { verifyToken } from "../middlewares/authMiddleware.js"
import { getHome } from "../controllers/homeConroller.js"

const router = Router();

router.get("/", verifyToken, getHome);

export default router;
