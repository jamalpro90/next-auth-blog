import { Card } from "antd";
import React from "react";

const CardItemJS = () => {
  return (
    <Card
      size="small"
      title="Small size card"
      extra={<a href="#">More</a>}
      className="card-item"
    >
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </Card>
  );
};

export default CardItemJS;
