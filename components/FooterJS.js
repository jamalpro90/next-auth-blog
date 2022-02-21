import { HeartFilled } from "@ant-design/icons";
import React from "react";
import { Typography } from "antd";

const { Title, Text } = Typography;

const FooterJS = () => {
  return (
    <footer>
      <Text className="text">
        Make With <HeartFilled className="heart-icon" /> By, Jamal
      </Text>
    </footer>
  );
};

export default FooterJS;
