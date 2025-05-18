import { Router } from "express";
import { jwtAtuh } from "../jwt/userJWT.js";
import { postComment, deleteComment } from "../controllers/commentControler.js";

const router = Router();

//create comment api /route
router.post("/comment/create", jwtAtuh, postComment);
//delete a commetn api or route
router.delete("/comment/delete", jwtAtuh, deleteComment);

export default router;
