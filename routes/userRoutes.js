import { Router } from "express";
import {
  userSignInValidate,
  userValidate,
} from "../middlewares/userMiddlewares/userValidate.js";
import { getUser, registerUser } from "../controllers/userController.js";
import { userVerify } from "../middlewares/userMiddlewares/userVerify.js";

const router = Router();

//sign up route
router.post("/signup", userValidate, registerUser);
//sign in route
router.post("/signin", userSignInValidate, userVerify);
//get user route/api
router.get("/user/:id", getUser);

export default router;
