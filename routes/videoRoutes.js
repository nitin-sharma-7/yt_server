import { Router } from "express";
import {
  deleteVideo,
  getVideos,
  postVideo,
  updateVideo,
} from "../controllers/videoController.js";
import { jwtAtuh } from "../jwt/userJWT.js";

const router = Router();

router.get("/videos", getVideos);
router.post("/video", jwtAtuh, postVideo);
router.delete("/video", jwtAtuh, deleteVideo);
router.put("/video", jwtAtuh, updateVideo);

export default router;
