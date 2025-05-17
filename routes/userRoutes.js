import { Router } from "express";
import {
  userSignInValidate,
  userValidate,
} from "../middlewares/userMiddlewares/userValidate.js";
import { getUser, registerUser } from "../controllers/userController.js";
import { userVerify } from "../middlewares/userMiddlewares/userVerify.js";

const router = Router();

router.post("/signup", userValidate, registerUser);

router.post("/signin", userSignInValidate, userVerify);
router.get("/user/:id", getUser);

export default router;
