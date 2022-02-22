/* eslint-disable @next/next/no-img-element */
import React from "react";
import CardItemMyBlogJS from "../../components/CardItemMyBlogJS";
import LayoutDashMainJS from "../../components/LayoutDashMainJS";

const MyBlogs = () => {
  return (
    <LayoutDashMainJS title="My Blogs" defaultSelect="3">
      <div className="my-blog">
        {/* Card item */}
        <CardItemMyBlogJS
          title="Typescript"
          text="Typescript is a superset Javascript..."
        />
        <CardItemMyBlogJS
          title="Typescript"
          text="Typescript is a superset Javascript..."
        />
        <CardItemMyBlogJS
          title="Typescript"
          text="Typescript is a superset Javascript..."
        />
        <CardItemMyBlogJS
          title="Typescript"
          text="Typescript is a superset Javascript..."
        />
        <CardItemMyBlogJS
          title="Typescript"
          text="Typescript is a superset Javascript..."
        />
        <CardItemMyBlogJS
          title="Typescript"
          text="Typescript is a superset Javascript..."
        />
      </div>
    </LayoutDashMainJS>
  );
};

export default MyBlogs;
