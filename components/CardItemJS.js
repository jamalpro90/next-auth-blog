import { Card } from "antd";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const CardItemJS = ({ blog }) => {
  return (
    <Card
      size="small"
      title={blog.title}
      extra={
        <Link href="/blog/id">
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
      <p>{blog.text}</p>
    </Card>
  );
};

export default CardItemJS;
