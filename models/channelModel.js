import { Schema, model } from "mongoose";

const channelSchema = new Schema({
  channelName: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  // Reference to the user who owns this channel
  owner: {
    type: Schema.Types.ObjectId,
    ref: "user",
    unique: true,
  },
  avatar: {
    type: String,
    default: "https://cdn-icons-png.flaticon.com/128/2888/2888404.png",
  },
  channelBanner: {
    type: String,
    default: "https://cdn-icons-png.flaticon.com/128/2888/2888404.png",
  },
  subscribers: [
    {
      type: Schema.Types.ObjectId,
      ref: "user",
      unique: true,
    },
  ],

  videos: [
    {
      type: Schema.Types.ObjectId,
      ref: "video",
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const channelModel = model("channel", channelSchema);
