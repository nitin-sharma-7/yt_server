import { Router } from "express";
import { userValidate } from "../middlewares/userMiddlewares/userValidate.js";
import { getUser, registerUser } from "../controllers/userController.js";
import { userVerify } from "../middlewares/userMiddlewares/userVerify.js";

const router = Router();

router.post("/signup", userValidate, registerUser);

router.post("/signin", userVerify);
router.get("/user/:id", getUser);

export default router;
