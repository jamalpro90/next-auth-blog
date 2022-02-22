import React from "react";
import { Card, Tooltip } from "antd";
import { DeleteFilled, EditFilled, FileOutlined } from "@ant-design/icons";

// file css ada di styles/pages/myblog.scss
const CardItemMyBlogJS = ({ title, text, imgUrl }) => {
  return (
    <Card className="card" type="inner" title={title} extra={<IconGroup />}>
      {text}
    </Card>
  );
};

const IconGroup = () => {
  return (
    <div className="icon-group">
      <a href="#">
        <Tooltip placement="topLeft" title="Open File" arrowPointAtCenter>
          <FileOutlined className="icon open" />
        </Tooltip>
      </a>
      <a href="#">
        <Tooltip placement="topLeft" title="Edit File" arrowPointAtCenter>
          <EditFilled className="icon edit" />
        </Tooltip>
      </a>
      <a href="#">
        <Tooltip placement="topLeft" title="Delete File" arrowPointAtCenter>
          <DeleteFilled className="icon delete" />
        </Tooltip>
      </a>
    </div>
  );
};

export default CardItemMyBlogJS;
