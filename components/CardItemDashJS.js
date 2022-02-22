/* eslint-disable @next/next/no-img-element */
import { Card } from "antd";
import React from "react";

const { Meta } = Card;

const CardItemDashJS = ({ title, icon }) => {
  return (
    <Card className="card-item-dash" hoverable cover={icon}>
      <Meta title={title} description="click me" />
    </Card>
  );
};

export default CardItemDashJS;
