import { Router } from "express";
import { jwtAtuh } from "../jwt/userJWT.js";
import { postComment } from "../controllers/commentControler.js";

const router = Router();

router.post("/comment/create", jwtAtuh, postComment);

export default router;
