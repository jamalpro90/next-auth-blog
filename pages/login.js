import React from "react";
import { Typography } from "antd";
import LayoutJS from "../components/LayoutJS";
import { GithubOutlined, GoogleOutlined } from "@ant-design/icons";
import { getSession, signIn } from "next-auth/react";

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
          <div className="provider github" onClick={() => signIn("github")}>
            <Text className="text">
              Sign In with Github <GithubOutlined className="provider-icon" />
            </Text>
          </div>
          {/* Provider */}
          <div className="provider google" onClick={() => signIn("google")}>
            <Text className="text">
              Sign In with Google
              <GoogleOutlined className="provider-icon" />
            </Text>
          </div>
        </div>
      </div>
    </LayoutJS>
  );
};

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (session) {
    return {
      redirect: {
        destination: "/dashboard",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}

export default Login;
