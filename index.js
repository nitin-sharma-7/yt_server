import express from "express";
import userRouter from "./routes/userRoutes.js";
import channelRouter from "./routes/channelRoutes.js";
import { connectDB } from "./database/connectDB.js";
import "dotenv/config";
import { statusLogger } from "./middlewares/statusLogger.js";
import { errorHandler } from "./middlewares/errorHandler.js";
import cors from "cors";

//
const app = express();

connectDB(process.env.MONGO_URL || "mongodb://localhost:27017");
//
app.use(cors());
app.use(express.json());
app.use(statusLogger);

//

app.use(userRouter);
app.use(channelRouter);

//
app.use(errorHandler);
const port = process.env.PORT || 2000;
app.listen(port, () => {
  console.log(`server is runnign at port ${port}`);
});
