import connectDB from "../../../config/connectDB";
import Blogs from "../../../models/blogModel";
import { getSession } from "next-auth/react";

connectDB();

export default async function handler(req, res) {
  switch (req.method) {
    case "POST":
      await createBlog(req, res);
      break;
    case "GET":
      await getBlogs(req, res);
      break;
    case "DELETE":
      await deleteBlog(req, res);
      break;
    case "PUT":
      await updateBlog(req, res);
      break;
  }
}

const createBlog = async (req, res) => {
  try {
    const session = await getSession({ req });

    if (!session) {
      res.status(400).json({ message: "Invalid Authetication" });
    }

    const { userId } = session;
    const { title, text, image } = req.body;
    // console.log(title, text);

    if (!title || !text) {
      return res.status(400).json({ message: "Please check again" });
    }

    // console.log(text.value);
    const newBlog = new Blogs({
      title: title,
      text: text.value,
      user: userId,
    });

    await newBlog.save();
    res.json({ message: "Success create new blog" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getBlogs = async (req, res) => {
  try {
    const session = await getSession({ req });

    if (!session) {
      return res.status(400).json({ message: "Invalid Authentication" });
    }

    const { userId } = session;
    console.log(userId);

    const blogs = await Blogs.find({ user: userId });
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const deleteBlog = async (req, res) => {
  try {
    const session = await getSession({ req });

    const { userId } = session;
    const { id } = req.body;

    // const deleteOne = await Blogs.findById({ user: userId });
    // console.log("blog :", id);

    await Blogs.findOneAndRemove({ _id: id });
    res.json({ message: "Success delete blog" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const updateBlog = async (req, res) => {
  try {
    const { id, title, text } = req.body;

    if (!title || !text) {
      return res.status(400).json({ message: "Please check again" });
    }

    const filter = { _id: id };
    const update = { title, text: text.value };

    await Blogs.findOneAndUpdate(filter, update);
    res.json({ message: "Success update blog" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
