import { channelModel } from "../models/channelModel.js";
const createChannel = async (req, res, next) => {
  try {
    // Extract cart item data from request body
    const channel = req.body;

    // Create and save new cart item in the database
    await channelModel.create(channel);

    // Send success response with status code 201 (Created)
    res.status(201).json({ message: "channel created sucessfully ", channel });
  } catch (error) {
    // Log and handle server error
    console.error("Error in creating channel:", error.message);
    res.status(500).json({ message: "Server Error" });
  }
};

const updateChannel = async (req, res, next) => {
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

export { updateChannel, deleteChannel, createChannel };
