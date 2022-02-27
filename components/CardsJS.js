import { Card, Col, Row } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import CardItemJS from "./CardItemJS";

const CardsJS = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const getBlogs = async () => {
      try {
        const res = await axios.get("/api/blogs");
        setBlogs(res.data);
        console.log(res.data);
      } catch (err) {
        console.log(err.message);
      }
    };

    getBlogs();
  }, []);

  return (
    <div>
      <Row gutter={16} style={{ marginTop: 20 }}>
        {blogs.map(blog => (
          <Col key={blog._id} xs={12} sm={8} md={8} lg={6} xl={6}>
            <CardItemJS blog={blog} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default CardsJS;
