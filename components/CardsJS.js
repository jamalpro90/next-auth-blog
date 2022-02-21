import { Card, Col, Row } from "antd";
import React from "react";
import CardItemJS from "./CardItemJS";

const CardsJS = () => {
  return (
    <div>
      <Row gutter={16} style={{ marginTop: 20 }}>
        <Col xs={12} sm={8} md={8} lg={6} xl={6}>
          <CardItemJS imgUrl="/img/coding-1.jpg" />
        </Col>
        <Col xs={12} sm={8} md={8} lg={6} xl={6}>
          <CardItemJS imgUrl="/img/coding-2.jpg" />
        </Col>
        <Col xs={12} sm={8} md={8} lg={6} xl={6}>
          <CardItemJS imgUrl="/img/coding-3.jpg" />
        </Col>
      </Row>
    </div>
  );
};

export default CardsJS;
