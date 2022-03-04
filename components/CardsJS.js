import { Col, Row } from "antd";
import React from "react";
import CardItemJS from "./CardItemJS";

const CardsJS = ({ blogs, searchValue }) => {
  return (
    <div>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} style={{ marginTop: 32 }}>
        {searchValue === ""
          ? blogs.map(blog => (
              <Col
                key={blog._id}
                xs={12}
                sm={8}
                md={8}
                lg={6}
                xl={6}
                style={{ marginTop: 16 }}
              >
                <CardItemJS blog={blog} />
              </Col>
            ))
          : blogs
              .filter(blog =>
                blog.title.toLowerCase().includes(searchValue.toLowerCase())
              )
              .map(blog => (
                <Col
                  key={blog._id}
                  xs={12}
                  sm={8}
                  md={8}
                  lg={6}
                  xl={6}
                  style={{ marginTop: 16 }}
                >
                  <CardItemJS blog={blog} />
                </Col>
              ))}
      </Row>
    </div>
  );
};

export default CardsJS;
