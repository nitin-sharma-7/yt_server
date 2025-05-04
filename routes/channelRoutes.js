import { Router } from "express";
import { channelValidate } from "../middlewares/channelMiddlewares/channelValidate.js";
import { jwtAtuh } from "../jwt/userJWT.js";
import {
  createChannel,
  deleteChannel,
  updateChannel,
} from "../controllers/channelController.js";

const router = Router();

router.post("/channel", jwtAtuh, channelValidate, createChannel);
router.put("/channel", jwtAtuh, channelValidate, updateChannel);
router.delete("/channel", jwtAtuh, deleteChannel);

export default router;
