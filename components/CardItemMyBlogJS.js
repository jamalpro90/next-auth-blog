import React, { useReducer } from "react";
import { Card, Tooltip } from "antd";
import {
  DeleteFilled,
  DownloadOutlined,
  EditFilled,
  FileOutlined,
} from "@ant-design/icons";
import { toast } from "react-toastify";
import axios from "axios";
import { useSession } from "next-auth/react";
import IconGroupJS from "./IconGroupJS";

// file css ada di styles/pages/myblog.scss
const CardItemMyBlogJS = ({ blog }) => {
  return (
    <Card
      className="card"
      type="inner"
      title={blog.title}
      extra={<IconGroupJS blog={blog} />}
    >
      {blog.text}
    </Card>
  );
};

export default CardItemMyBlogJS;
