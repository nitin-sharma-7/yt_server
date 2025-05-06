import { Router } from "express";
import {
  deleteVideo,
  getVideos,
  postVideo,
  updateVideo,
} from "../controllers/videoController.js";

const router = Router();

router.get("/videos", getVideos);
router.post("/videos", postVideo);
router.delete("/videos", deleteVideo);
router.put("/videos", updateVideo);

export default router;
