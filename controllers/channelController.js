import { channelModel } from "../models/channelModel.js";
import { userModel } from "../models/userModel.js";

const getChannel = async (req, res) => {
  try {
    const id = req.params.id;
    const channel = await channelModel.findById(id).populate("videos");

    res.status(200).json(channel);
  } catch (error) {
    console.error("Error in finding channel:", error.message);
    res.status(500).json({ message: "Server Error" });
  }
};

const createChannel = async (req, res) => {
  try {
    // Extract channel data from request body
    const channel = req.body;
    // Create and save new channel in the database
    const newChannel = await channelModel.create(channel);
    console.log("New channel created:", newChannel);

    const user = await userModel.findById(channel.owner);
    user.channel = newChannel._id;
    await user.save();

    // Send success response with status code 201 (Created)
    res.status(201).json({ channelState: true, newChannel });
  } catch (error) {
    // Log and handle server error
    console.error("Error in creating channel:", error.message);
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

const updateChannel = async (req, res) => {
  try {
    // Get product ID from request parameters

    // Find and update the cart item by productId
    const Channel = await channelModel.updateOne({}, req.body);
  } catch (error) {
    console.error("Error updating channel:", error.message);
    res.status(500).json({ message: "Server Error" });
  }
};
const deleteChannel = async (req, res) => {
  try {
    // Get product ID from request parameters

    // Delete the cart item by productId
    const deletedItem = await channelModel.deleteOne(req.body);

    // Send success response with delete result
    res.status(200).json({ message: "deleted sucessfully", deletedItem });
  } catch (error) {
    // Log and handle server error
    console.error("Error deleting channel:", error.message);
    res.status(500).json({ message: "Server Error" });
  }
};

const subscribeToChannel = async (req, res) => {
  try {
    const { userId, channelId } = req.body;

    // Validate input
    if (!channelId || !userId) {
      return res.status(400).json({
        message: "Channel ID and User ID are required",
      });
    }

    // Check if the channel exists
    const channel = await channelModel.findById(channelId);
    if (!channel) {
      return res.status(404).json({
        message: "Channel not found",
      });
    }

    // Check if the user exists
    const user = await userModel.findById(userId);
    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    // Check if user is already subscribed
    const isAlreadySubscribed = channel.subscribers.some(
      (subscriber) => subscriber.toString() === userId
    );

    if (isAlreadySubscribed) {
      return res.status(400).json({
        message: "User is already subscribed to this channel",
      });
    }

    // Add user to subscribers
    channel.subscribers.push(userId);

    // Save the updated channel
    const updatedChannel = await channel.save();

    res.status(200).json({
      message: "Successfully subscribed to channel",
      channel: updatedChannel,
    });
  } catch (error) {
    console.error("Subscribe to channel error:", error);
    res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};

// Optional: Unsubscribe controller
const unsubscribeFromChannel = async (req, res) => {
  try {
    const { userId, channelId } = req.body;

    // Validate input
    if (!channelId || !userId) {
      return res.status(400).json({
        message: "Channel ID and User ID are required",
      });
    }

    // Check if the channel exists
    const channel = await channelModel.findById(channelId);
    if (!channel) {
      return res.status(404).json({
        message: "Channel not found",
      });
    }

    // Remove user from subscribers
    channel.subscribers = channel.subscribers.filter(
      (subscriber) => subscriber.toString() !== userId
    );

    // Save the updated channel
    const updatedChannel = await channel.save();

    res.status(200).json({
      message: "Successfully unsubscribed from channel",
      channel: updatedChannel,
    });
  } catch (error) {
    console.error("Unsubscribe from channel error:", error);
    res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};
export {
  updateChannel,
  deleteChannel,
  createChannel,
  getChannel,
  subscribeToChannel,
  unsubscribeFromChannel,
};
