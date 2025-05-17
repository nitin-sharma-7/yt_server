import { Schema, model } from "mongoose";

const videoSchema = new Schema({
  snippet: {
    publishedAt: Date,
    channelId: { type: Schema.Types.ObjectId, ref: "channel" },
    title: String,
    description: String,
    thumbnails: {
      default: {
        url: String,
      },
      maxres: {
        url: String,
      },
    },
    channelTitle: String,
    tags: [String],
  },
  contentDetails: {
    duration: String,
  },
  statistics: {
    viewCount: String,
    likeCount: [{ type: Schema.Types.ObjectId, ref: "user" }],
    favoriteCount: String,
    commentCount: String,
  },
  videoLink: String,
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: "comment",
    },
  ],
  publishedAt: { type: Date, default: Date.now },
});

// Create model
export const videoModel = model("video", videoSchema);
