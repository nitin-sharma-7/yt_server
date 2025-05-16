import { channelModel } from "../models/channelModel.js";
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
const getVideoById = async (req, res) => {
  try {
    const { id } = req.params;
    const video = await videoModel.findById(id);

    res.status(200).json(video);
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
    const channel = await channelModel.findById(channelId);
    channel.videos.push(newVideo._id);
    await channel.save();
    res.status(200).json(newVideo);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const deleteVideo = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedVideo = await videoModel.findByIdAndDelete(id);

    if (!deletedVideo) {
      return res.status(404).json({ message: "Video not found" });
    }

    return res.status(200).json({
      message: "Video deleted successfully",
      video: deletedVideo,
    });
  } catch (error) {
    console.error("Error deleting video:", error.message);
    return res.status(500).json({ message: "Server error" });
  }
};
const updateVideo = async (req, res) => {
  const { id } = req.params;
  const { title, description, maxres, tags, duration } = req.body;

  try {
    const video = await videoModel.findById(id);

    if (!video) {
      return res.status(404).json({ message: "Video not found" });
    }

    // Update fields
    video.snippet.title = title || video.snippet.title;
    video.snippet.description = description || video.snippet.description;
    video.snippet.thumbnails.maxres.url =
      maxres || video.snippet.thumbnails.maxres.url;
    video.snippet.tags = Array.isArray(tags)
      ? tags
      : typeof tags === "string"
      ? tags.split(",").map((tag) => tag.trim())
      : video.snippet.tags;
    video.contentDetails.duration = duration || video.contentDetails.duration;

    await video.save();

    res.status(200).json({ message: "Video updated successfully", video });
  } catch (error) {
    console.error("Error updating video:", error);
    res.status(500).json({ message: "Server error", error });
  }
};
export { getVideos, postVideo, deleteVideo, updateVideo, getVideoById };
