import express from "express";
import userRouter from "./routes/userRoutes.js";
import channelRouter from "./routes/channelRoutes.js";
import videoRouter from "./routes/videoRoutes.js";
import { connectDB } from "./database/connectDB.js";
import "dotenv/config";
import { statusLogger } from "./middlewares/statusLogger.js";
import { errorHandler } from "./middlewares/errorHandler.js";
import cors from "cors";
import commentRouter from "./routes/commentRoutes.js";
// import { send } from "./database/sendvideo.js";  // Commented out database video sender

// Initialize Express application
const app = express();

// Connect to MongoDB database using the URL from environment variables or fallback to localhost
connectDB(process.env.MONGO_URL || "mongodb://localhost:27017");

// Middleware setup
app.use(cors()); // Enable Cross-Origin Resource Sharing
app.use(express.json()); // Parse JSON request bodies
app.use(statusLogger); // Log HTTP request status

// Route setup
// send();  // Commented out video sender function
app.use(userRouter); // Mount user-related routes
app.use(channelRouter); // Mount channel-related routes
app.use(videoRouter); // Mount video-related routes
app.use(commentRouter); // Mount comment-related routes

// Error handling middleware (should be last in middleware chain)
app.use(errorHandler);

// Server configuration and startup
const port = process.env.PORT || 2000; // Use port from environment variables or default to 2000
app.listen(port, () => {
  console.log(`server is runnign at port ${port}`);
});
