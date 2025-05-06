import { videoModel } from "../models/videoModel.js";

const getVideos = async (req, res, next) => {
  try {
    const videos = await videoModel.find();
    res.status(200).json(videos);
  } catch (error) {
    next(error);
  }
};

const postVideo = async (req, res, next) => {
  try {
    const video = req.body;
    await videoModel.create(video);
    res.status(200).json(video);
  } catch (error) {
    next(error);
  }
};

const deleteVideo = async (req, res, next) => {
  try {
    const video = req.body;
    await videoModel.deleteOne(video);
    res.status(200).json(video);
  } catch (error) {
    next(error);
  }
};
const updateVideo = async (req, res, next) => {
  try {
    const video = req.body;
    await videoModel.updateOne(video);
    res.status(200).json(video);
  } catch (error) {
    next(error);
  }
};
export { getVideos, postVideo, deleteVideo, updateVideo };
