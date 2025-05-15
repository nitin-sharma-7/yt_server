import { Schema, model } from "mongoose";
const commentSchema = Schema({
  comment: { type: String },
  owner: { type: Schema.Types.ObjectId, ref: "user", unique: true },
  likes: [{ type: Schema.Types.ObjectId, ref: "user", unique: true }],
  createdAt: { type: Date, default: Date.now },
});

export const commentModel = model("comment", commentSchema);
