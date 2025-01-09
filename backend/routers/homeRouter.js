import { Router } from "express"
import { verifyToken } from "../middlewares/authMiddleware.js"
import { getHome, newPostController, uploadPostController } from "../controllers/homeConroller.js"

const router = Router();

router.get("/", verifyToken, getHome);
router.post("/newPost", verifyToken, newPostController);
router.put("/uploadPost/:postId", verifyToken, uploadPostController)
export default router;
