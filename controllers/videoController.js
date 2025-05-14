import { videoModel } from "../models/videoModel.js";

const getVideos = async (req, res, next) => {
  try {
    const videos = await videoModel
      .find()
      .populate({ path: "comments", populate: { path: "owner" } })
      .populate("snippet.channelId")
      .populate("statistics.likeCount");
    res.status(200).json(videos);
  } catch (error) {
    next(error);
  }
};

const postVideo = async (req, res) => {
  try {
    let { title, description, maxres, tags, duration, videoLink } =
      req.body.formattedVideo;
    let { channelId, channelTitle } = req.body;
    const video = {
      snippet: {
        channelId,
        title,
        description,
        thumbnails: {
          default: {
            url: maxres,
          },
          maxres: {
            url: maxres,
          },
        },
        channelTitle,
        tags,
      },
      contentDetails: {
        duration,
      },
      videoLink,
    };
    const newVideo = await videoModel.create(video);
    res.status(200).json(newVideo);
  } catch (error) {
    res.status(500).json(error.message);
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
