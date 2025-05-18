import { videoModel } from "../models/videoModel.js";
import { commentModel } from "../models/commentModel.js";

/**
 * @description Creates a new comment and associates it with a video
 * @route POST /api/comments (assumed route)
 * @access Authenticated users only (implied by owner requirement)
 *
 * @param {Object} req - Express request object
 * @param {Object} req.body - Request body containing comment data
 * @param {string} req.body.comment - The comment text
 * @param {string} req.body.owner - The user ID of comment creator
 * @param {string} req.body.videoId - The ID of the video being commented on
 *
 * @param {Object} res - Express response object
 *
 * @returns {Object} JSON response with status and newly created comment
 */
const postComment = async (req, res) => {
  try {
    // Extract comment data from request body
    const { comment, owner, videoId } = req.body;

    // Create new comment in database
    const newComment = await commentModel.create({ comment, owner });

    // Find the video document by ID
    const [video] = await videoModel.find({ _id: videoId });

    // Add the new comment to the video's comments array
    video.comments.push(newComment);

    // Save the updated video document
    await video.save();

    // Send success response with the newly created comment
    res.status(201).json({ message: "comment added ", newComment });
  } catch (error) {
    // Log error for server-side debugging
    console.error("Error in posting comment:", error.message);

    // Send error response to client
    res.status(500).json({ message: "Server Error" });
  }
};

/**
 * @description Deletes a comment and removes its reference from the associated video
 * @route DELETE /api/comments (assumed route)
 * @access Authenticated users only (implied by the operation)
 *
 * @param {Object} req - Express request object
 * @param {Object} req.body - Request body containing deletion data
 * @param {string} req.body.commentId - The ID of the comment to delete
 * @param {string} req.body.videoId - The ID of the video the comment belongs to
 *
 * @param {Object} res - Express response object
 *
 * @returns {Object} JSON response with the deleted comment data
 */
const deleteComment = async (req, res) => {
  try {
    // Extract comment and video IDs from request body
    const { commentId, videoId } = req.body;

    // Delete the comment from the comments collection
    const delComment = await commentModel.findByIdAndDelete(commentId);

    // Find the associated video document
    const video = await videoModel.findById(videoId);

    // Filter out the deleted comment from the video's comments array
    const newcomments = video.comments.filter(
      (val) => val._id.toString() !== commentId
    );

    // Update the video's comments array
    video.comments = newcomments;

    // Save the updated video document
    await video.save();

    // Send response with the deleted comment data
    res.json(delComment);
  } catch (error) {
    // Log error for server-side debugging
    console.error("Error in deleting comment:", error.message);

    // Send error response to client
    res.status(500).json({ message: "Server Error" });
  }
};

export { postComment, deleteComment };
