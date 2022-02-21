import { useState } from "react";
import { Layout, Menu, Breadcrumb, Typography } from "antd";
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import CardsJS from "../components/CardsJS";
import { signIn, signOut, useSession } from "next-auth/react";

const { Title } = Typography;
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

export default function Home() {
  const [collapsed, setCollapsed] = useState(false);
  const { data: session } = useSession();

  const onCollapse = collapsed => {
    // this.setState({ collapsed });
    setCollapsed(collapsed);
  };

  console.log(session);

  if (!session) {
    return (
      <div>
        <Title>Ayo masuk dulu</Title>
        <button onClick={() => signIn()}>Sign In</button>
      </div>
    );
  }

  return (
    <div>
      <Title>Hallo, {session.user.email}</Title>
      <button onClick={() => signOut()}>Sing Out</button>
    </div>
  );
}

{
  /* <Layout style={{ minHeight: "100vh" }}>
  <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
    <div className="logo" />
    <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
      <Menu.Item key="1" icon={<PieChartOutlined />}>
        Option 1
      </Menu.Item>
      <Menu.Item key="2" icon={<DesktopOutlined />}>
        Option 2
      </Menu.Item>
      <SubMenu key="sub1" icon={<UserOutlined />} title="User">
        <Menu.Item key="3">Tom</Menu.Item>
        <Menu.Item key="4">Bill</Menu.Item>
        <Menu.Item key="5">Alex</Menu.Item>
      </SubMenu>
      <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
        <Menu.Item key="6">Team 1</Menu.Item>
        <Menu.Item key="8">Team 2</Menu.Item>
      </SubMenu>
      <Menu.Item key="9" icon={<FileOutlined />}>
        Files
      </Menu.Item>
    </Menu>
  </Sider>
  <Layout className="site-layout">
    <Header className="site-layout-background" style={{ padding: 0 }} />

    Content
    <Content style={{ margin: "0 16px" }}>
      <Breadcrumb style={{ margin: "16px 0" }}>
        <Breadcrumb.Item>User</Breadcrumb.Item>
        <Breadcrumb.Item>Bill</Breadcrumb.Item>
      </Breadcrumb>
      <CardsJS />
    </Content>

    <Footer style={{ textAlign: "center" }}>
      Ant Design ©2018 Created by Ant UED
    </Footer>
  </Layout>
</Layout>; */
}
