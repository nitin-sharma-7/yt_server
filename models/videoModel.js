import { Schema, model } from "mongoose";
// Define Comment Schema with user avatar and user name
// const CommentSchema = new Schema({
//   id: String,
//   text: String,
//   likeCount: Number,
//   publishedAt: Date,
//   // Original author fields
//   authorDisplayName: String,
//   authorProfileImageUrl: String,
//   // New user fields
//   userName: String,
//   userAvatar: String,
// });

// Define YouTube Video Schema
const videoSchema = new Schema({
  id: String,
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
