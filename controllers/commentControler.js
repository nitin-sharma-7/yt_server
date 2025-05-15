import { videoModel } from "../models/videoModel.js";
import { commentModel } from "../models/commentModel.js";
const postComment = async (req, res) => {
  try {
    // i need owner,text from ff and videoid
    const { comment, owner, videoId } = req.body;

    const newComment = await commentModel.create({ comment, owner });
    const [video] = await videoModel.find({ _id: videoId });
    video.comments.push(newComment);
    await video.save();
    res.status(201).json({ message: "comment added ", newComment });
  } catch (error) {
    console.error("Error in posting comment:", error.message);
    res.status(500).json({ message: "Server Error" });
  }
};
const deleteComment = async (req, res) => {
  try {
    const { commentId, videoId } = req.body;
    const delComment = await commentModel.findByIdAndDelete(commentId);
    const video = await videoModel.findById(videoId);
    const newcomments = video.comments.filter(
      (val) => val._id.toString() !== commentId
    );
    video.comments = newcomments;
    await video.save();
    res.json(delComment);
  } catch (error) {
    console.error("Error in deleting comment:", error.message);
    res.status(500).json({ message: "Server Error" });
  }
};

export { postComment, deleteComment };
