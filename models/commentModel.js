import { Schema, model } from "mongoose";
const commentSchema = Schema({
  comment: { type: String },
  owner: { type: Schema.Types.ObjectId, ref: "user" },
  createdAt: { type: Date, default: Date.now },
});

const commentModel = model("comment", commentSchema);
export { commentModel };
