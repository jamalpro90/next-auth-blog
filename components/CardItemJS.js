import { Card } from "antd";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const CardItemJS = ({ imgUrl }) => {
  return (
    <Card
      size="small"
      title="Learn Typescript"
      extra={
        <Link href="/blog/id">
          <a>More</a>
        </Link>
      }
      className="card-item"
    >
      <div className="img-container">
        <Image
          src={imgUrl}
          alt="Thumbnail"
          width={640}
          height={426}
          layout="responsive"
        />
      </div>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores, nam?
      </p>
    </Card>
  );
};

export default CardItemJS;
