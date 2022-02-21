import { Card, Col, Row } from "antd";
import React from "react";

const CardsJS = () => {
  return (
    <div>
      <Row style={{ border: "2px solid black" }}>
        <Col span={6}>
          <Card
            title="Card 1"
            extra={<a href="#">More</a>}
            style={{ width: 300 }}
          >
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
        </Col>

        <Col span={6} offset={11}>
          <Card
            title="Card 2"
            extra={<a href="#">More</a>}
            style={{ width: 300 }}
          >
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default CardsJS;
