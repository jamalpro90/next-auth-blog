import React from "react";
import { Row, Col } from "antd";
import CardItemDashJS from "./CardItemDashJS";
import {
  BookOutlined,
  DownloadOutlined,
  PlusOutlined,
  UserOutlined,
} from "@ant-design/icons";

const CardsDashJS = () => {
  return (
    <Row gutter={{ xs: 12 }} className="cards-dash">
      <Col xs={12} sm={12} md={8} xl={6}>
        <CardItemDashJS
          title="Create a new blog"
          icon={<PlusOutlined className="card-icon red" />}
          linkHref="/dashboard/new-blog"
        />
      </Col>
      <Col xs={12} sm={12} md={8} xl={6}>
        <CardItemDashJS
          title="All My Blog"
          icon={<BookOutlined className="card-icon green" />}
          linkHref="/dashboard/my-blogs"
        />
      </Col>
      <Col xs={12} sm={12} md={8} xl={6}>
        <CardItemDashJS
          title="My Profile"
          icon={<UserOutlined className="card-icon purple" />}
          linkHref="/dashboard/profile"
        />
      </Col>
    </Row>
  );
};

export default CardsDashJS;
