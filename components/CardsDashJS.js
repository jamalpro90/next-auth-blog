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
    <Row className="cards-dash">
      <Col xs={24} sm={12} md={8} xl={6}>
        <CardItemDashJS
          title="Create a new blog"
          icon={<PlusOutlined className="card-icon red" />}
        />
      </Col>
      <Col xs={24} sm={12} md={8} xl={6}>
        <CardItemDashJS
          title="All My Blog"
          icon={<BookOutlined className="card-icon green" />}
        />
      </Col>
      <Col xs={24} sm={12} md={8} xl={6}>
        <CardItemDashJS
          title="Download Blog"
          icon={<DownloadOutlined className="card-icon blue" />}
        />
      </Col>
      <Col xs={24} sm={12} md={8} xl={6}>
        <CardItemDashJS
          title="My Profile"
          icon={<UserOutlined className="card-icon purple" />}
        />
      </Col>
    </Row>
  );
};

export default CardsDashJS;
