import Image from "next/image";
import React from "react";
import LayoutJS from "../../components/LayoutJS";
import { Typography } from "antd";

const { Title, Text } = Typography;

const BlogDetail = ({ blog }) => {
  return (
    <LayoutJS title="Blog Detail">
      <div className="blog-detail">
        {/* Image */}
        {/* <img src="/img/coding-1.jpg" alt="image" width={40} height={42} /> */}

        <div className="img-container">
          <Image
            src="/img/coding-1.jpg"
            alt="Thumbnail"
            width={640}
            height={426}
            layout="responsive"
            className="img"
          />
        </div>

        {/* Title */}
        <Title className="title">{blog.title}</Title>

        {/* Author */}
        <Text>
          Author: <strong>Not Yet</strong>
        </Text>
        <br />
        <Text italic type="secondary">
          Created: {blog.createdAt}
        </Text>
        <br />

        {/* Text */}
        <div className="text">
          <Text>{blog.text}</Text>
        </div>
      </div>
    </LayoutJS>
  );
};

export default BlogDetail;

export async function getServerSideProps(context) {
  const id = context.params.id;
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/blogs`);
  const blogs = await res.json();
  const blog = blogs.find(blog => blog._id === id);

  return {
    props: { blog }, // will be passed to the page component as props
  };
}
