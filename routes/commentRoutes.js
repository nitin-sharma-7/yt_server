import { Router } from "express";
import { jwtAtuh } from "../jwt/userJWT.js";
import { postComment, deleteComment } from "../controllers/commentControler.js";

const router = Router();

router.post("/comment/create", jwtAtuh, postComment);
router.delete("/comment/delete", jwtAtuh, deleteComment);

export default router;
