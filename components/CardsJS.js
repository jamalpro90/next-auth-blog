import { Card, Col, Row } from "antd";
import React from "react";
import CardItemJS from "./CardItemJS";

const CardsJS = () => {
  return (
    <div>
      <Row gutter={16} style={{ marginTop: 20 }}>
        <Col xs={12} sm={8} md={8} lg={6} xl={6}>
          <CardItemJS />
        </Col>
        <Col xs={12} sm={8} md={8} lg={6} xl={6}>
          <CardItemJS />
        </Col>
        <Col xs={12} sm={8} md={8} lg={6} xl={6}>
          <CardItemJS />
        </Col>
      </Row>
    </div>
  );
};

export default CardsJS;
