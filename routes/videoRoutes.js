import { Router } from "express";
import {
  deleteVideo,
  getVideoById,
  getVideos,
  postVideo,
  updateVideo,
} from "../controllers/videoController.js";
import { jwtAtuh } from "../jwt/userJWT.js";

const router = Router();

router.get("/videos", getVideos);
router.get("/video/:id", jwtAtuh, getVideoById);

router.post("/video", jwtAtuh, postVideo);
router.delete("/video/delete/:id", jwtAtuh, deleteVideo);
router.put("/video/update/:id", jwtAtuh, updateVideo);

export default router;
