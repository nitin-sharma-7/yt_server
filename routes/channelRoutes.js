import { Router } from "express";
import { channelValidate } from "../middlewares/channelMiddlewares/channelValidate.js";
import { jwtAtuh } from "../jwt/userJWT.js";
import {
  createChannel,
  deleteChannel,
  updateChannel,
  getChannel,
  subscribeToChannel,
} from "../controllers/channelController.js";

// Initialize Express Router
const router = Router();

// Route to get channel details by ID (public route)
router.get("/channel/:id", getChannel);

// Route to create a new channel (requires authentication and validation)
router.post("/channel", jwtAtuh, channelValidate, createChannel);
// Route to subscribe to a channel (requires authentication)
router.post("/channel/subscribe", jwtAtuh, subscribeToChannel);

// Route to update channel details (requires authentication and validation)
router.put("/channel", jwtAtuh, channelValidate, updateChannel);
// Route to delete a channel (requires authentication)
router.delete("/channel", jwtAtuh, deleteChannel);

export default router;
