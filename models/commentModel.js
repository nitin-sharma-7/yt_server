import { Schema, model } from "mongoose";
const commentSchema = Schema({
  comment: { type: String },
  owner: { type: Schema.Types.ObjectId, ref: "user" },
  likes: [{ type: Schema.Types.ObjectId, ref: "user" }],
  createdAt: { type: Date, default: Date.now },
});

export const commentModel = model("comment", commentSchema);
