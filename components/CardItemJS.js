import { Card } from "antd";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import parse from "html-react-parser";

const CardItemJS = ({ blog }) => {
  return (
    <Card
      size="small"
      title={blog.title}
      extra={
        <Link href={`/blog/${blog._id}`}>
          <a>More</a>
        </Link>
      }
      className="card-item"
    >
      <div className="img-container">
        <Image
          src="/img/coding-1.jpg"
          alt="Thumbnail"
          width={640}
          height={426}
          layout="responsive"
        />
      </div>
      {parse(`${blog.text}`)}
    </Card>
  );
};

export default CardItemJS;
