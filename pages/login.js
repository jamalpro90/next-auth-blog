import React from "react";
import { Typography } from "antd";
import LayoutJS from "../components/LayoutJS";
import { GithubOutlined, GoogleOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

const Login = () => {
  return (
    <LayoutJS>
      <div className="login">
        {/* Container */}
        <div className="container">
          {/* Title */}
          <Title level={2}>Login</Title>

          {/* Provider */}
          <div className="provider github">
            <Text className="text">
              Sign In with <GithubOutlined className="provider-icon" />
            </Text>
          </div>
          {/* Provider */}
          <div className="provider google">
            <Text className="text">
              Sign In with <GoogleOutlined className="provider-icon" />
            </Text>
          </div>
        </div>
      </div>
    </LayoutJS>
  );
};

export default Login;
