import { Router } from "express"
import { verifyToken } from "../middlewares/authMiddleware.js"
import { getHome, newPostController, uploadPostController, postCommentController, getCommentsController, getPostsController } from "../controllers/homeConroller.js"

const router = Router();

router.get("/", getHome);

router.get("/posts", getPostsController);
router.post("/posts", verifyToken, newPostController);
router.put("/posts/:postId", verifyToken, uploadPostController);

router.post("/:postId/comments", verifyToken, postCommentController);
router.get("/:postId/comments", verifyToken, getCommentsController)
export default router;
