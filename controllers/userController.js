import { userModel } from "../models/userModel.js";

const registerUser = async (req, res) => {
  try {
    // Extract user data from request body
    const user = req.body;

    // Create new user document in the database
    const newUser = await userModel.create(user);

    // Send success response with created user data
    res
      .status(201)
      .json({ state: true, message: "User successfully added", newUser });
  } catch (error) {
    // Log the error and return server error response
    console.error("Error registering user:", error.message);
    res.status(500).json({ message: "Server Error" });
  }
};

export { registerUser };
