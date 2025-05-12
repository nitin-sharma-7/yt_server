import { Schema, model } from "mongoose";

const videoSchema = new Schema({
  snippet: {
    publishedAt: Date,
    channelId: String,
    title: String,
    description: String,
    thumbnails: {
      default: {
        url: String,
        width: Number,
        height: Number,
      },
      maxres: {
        url: String,
        width: Number,
        height: Number,
      },
    },
    channelTitle: String,
    tags: [String],
    defaultAudioLanguage: String,
  },
  contentDetails: {
    duration: String,
  },
  statistics: {
    viewCount: String,
    likeCount: String,
    favoriteCount: String,
    commentCount: String,
    subscribers: String,
  },
  videoLink: String,
  comments: [
    {
      id: String,
      text: String,
      likeCount: Number,
      publishedAt: Date,
      userName: String,
      userAvatar: String,
    },
  ],
});

// Create model
export const videoModel = model("video", videoSchema);
