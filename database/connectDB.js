import mongoose from "mongoose";

// Connect to MongoDB using the provided connection URL
const connectDB = async (url) => {
  try {
    // Attempt to establish a connection with MongoDB
    await mongoose.connect(url);
    console.log("Database connected successfully");
  } catch (error) {
    // Log connection error and a message indicating failure
    console.error("Database connection error:", error.message);
    console.log("Connection failed");
  }
};

export { connectDB };
