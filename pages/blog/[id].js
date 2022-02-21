import Image from "next/image";
import React from "react";
import LayoutJS from "../../components/LayoutJS";
import { Typography } from "antd";

const { Title, Text } = Typography;

const BlogDetail = () => {
  return (
    <LayoutJS title="Blog Detail">
      <div className="blog-detail">
        {/* Image */}
        <img src="/img/coding-1.jpg" alt="image" width={40} height={42} />

        {/* <div className="img-container">
          <Image
            src="/img/coding-1.jpg"
            alt="Thumbnail"
            width={640}
            height={426}
            layout="responsive"
            className="img"
          />
        </div> */}

        {/* Title */}
        <Title className="title">Typescript</Title>

        {/* Author */}
        <Text>
          Author: <strong>Jamal Pro</strong>
        </Text>
        <br />
        <Text italic type="secondary">
          Created: 25-12-2020
        </Text>
        <br />

        {/* Text */}
        <div className="text">
          <Text>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore sed
            totam vitae magni ab, optio eligendi ex est, enim cumque cupiditate
            veniam nam quia? Deleniti, voluptate velit exercitationem sapiente,
            perspiciatis quod ratione at dolore omnis recusandae iure rem libero
            laborum perferendis id consequuntur modi aliquam consequatur
            commodi! Quas, cum ratione.
          </Text>
        </div>
      </div>
    </LayoutJS>
  );
};

export default BlogDetail;
