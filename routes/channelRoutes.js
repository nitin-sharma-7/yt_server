import { Router } from "express";
import { channelValidate } from "../middlewares/channelMiddlewares/channelValidate.js";
import { jwtAtuh } from "../jwt/userJWT.js";
import {
  createChannel,
  deleteChannel,
  updateChannel,
  getChannel,
} from "../controllers/channelController.js";

const router = Router();

router.get("/channel/:id", getChannel);
router.post("/channel", jwtAtuh, channelValidate, createChannel);
router.put("/channel", jwtAtuh, channelValidate, updateChannel);
router.delete("/channel", jwtAtuh, deleteChannel);

export default router;
