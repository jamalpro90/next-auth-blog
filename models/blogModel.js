import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    text: { type: String, required: true },
    user: { type: mongoose.Types.ObjectId, ref: "/users" },
  },
  { timestamps: true }
);

let Blogs = mongoose.models.blog || mongoose.model("blog", blogSchema);

export default Blogs;
