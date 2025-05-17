import { Schema, model } from "mongoose";

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3,
    maxlength: 30,
  },
  password: {
    type: String,
    required: true,
    minlength: 4,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    match: [/.+\@.+\..+/, "Please enter a valid email address"],
  },
  avatar: {
    type: String,
    default: "https://cdn-icons-png.flaticon.com/128/9512/9512683.png",
  },
  // Add a reference to channels created by this user
  channel: {
    type: Schema.Types.ObjectId,
    ref: "channel",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const userModel = model("user", userSchema);
