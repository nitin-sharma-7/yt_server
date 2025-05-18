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

// get all videos api
router.get("/videos", getVideos);

//get video by its id api
router.get("/video/:id", jwtAtuh, getVideoById);

//post a video only authenticated user
router.post("/video", jwtAtuh, postVideo);

////delete a video only authenticated user
router.delete("/video/delete/:id", jwtAtuh, deleteVideo);

////update a video only authenticated user

router.put("/video/update/:id", jwtAtuh, updateVideo);

export default router;
