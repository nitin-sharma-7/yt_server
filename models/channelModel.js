import { Schema, model } from "mongoose";

const channelSchema = new Schema({
  userid: {
    type: String,
    unique: true,
  },
  channelName: {
    type: String,
    required: true,
    unique: true,
  },
  handle: {
    type: String,
  },
  description: {
    type: String,
  },
  channelBanner: {
    type: String,
  },
  avatar: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
export const channelModel = model("channel", channelSchema);
