/* eslint-disable @next/next/no-img-element */
import axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import BlankDataJS from "../../../components/BlankDataJS";
import CardItemMyBlogJS from "../../../components/CardItemMyBlogJS";
import LayoutDashMainJS from "../../../components/LayoutDashMainJS";

const MyBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!session) {
      return router.push("/");
    }
    const getBlogs = async () => {
      try {
        const res = await axios.get("/api/blog");
        setBlogs(res.data);
      } catch (err) {
        console.log(err.message);
      }
    };

    getBlogs();
  }, [session]);

  return (
    <LayoutDashMainJS title="My Blogs" defaultSelect="3">
      <div className="my-blog">
        {/* Card item */}
        {blogs.length > 0 ? (
          blogs.map(blog => <CardItemMyBlogJS key={blog._id} blog={blog} />)
        ) : (
          <BlankDataJS />
        )}
      </div>
    </LayoutDashMainJS>
  );
};

export default MyBlogs;
