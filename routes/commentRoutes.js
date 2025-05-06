import { Router } from "express";
import { jwtAtuh } from "../jwt/userJWT.js";
import { commentValidate } from "../middlewares/comment/commentValidate.js";

const router = Router();

router.post("/comment/create", jwtAtuh, commentValidate);
