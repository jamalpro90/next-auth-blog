import connectDB from "../../../config/connectDB";
import Blogs from "../../../models/blogModel";

connectDB();

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const blogs = await Blogs.find();
      // console.log(blogs);
      res.json(blogs);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
}
