/* eslint-disable @next/next/no-img-element */
import { Card } from "antd";
import Link from "next/link";
import React from "react";

const { Meta } = Card;

const CardItemDashJS = ({ title, icon, linkHref }) => {
  return (
    <Link href={linkHref} passHref>
      <Card className="card-item-dash" hoverable cover={icon}>
        <Meta title={title} description="click me" />
      </Card>
    </Link>
  );
};

export default CardItemDashJS;
