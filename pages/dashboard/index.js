import React, { useState } from "react";
import LayoutJS from "../../components/LayoutJS";
import { Layout, Menu, Breadcrumb, Typography } from "antd";
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
  ProfileFilled,
  VideoCameraOutlined,
  UploadOutlined,
  PlusOutlined,
  BookOutlined,
  DownloadOutlined,
} from "@ant-design/icons";
import LayoutDashJS from "../../components/LayoutDashJS";
import CardItemDashJS from "../../components/CardItemDashJS";
import CardsDashJS from "../../components/CardsDashJS";

const { Title } = Typography;
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const Dashboard = () => {
  return (
    <LayoutDashJS>
      <Layout className="dashboard">
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={broken => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["4"]}>
            <Menu.Item key="1" icon={<ProfileFilled />}>
              Dashboard
            </Menu.Item>
            <Menu.Item key="2" icon={<PlusOutlined />}>
              Add New Blog
            </Menu.Item>
            <Menu.Item key="3" icon={<BookOutlined />}>
              My Blogs
            </Menu.Item>
            <Menu.Item key="4" icon={<DownloadOutlined />}>
              Download
            </Menu.Item>
            <Menu.Item key="5" icon={<UserOutlined />}>
              Profile
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          {/* Header */}
          <Header
            className="site-layout-background header"
            style={{ padding: 0 }}
          >
            <Title className="title">Dashboard</Title>
          </Header>

          {/* Slash url */}
          <Content style={{ margin: "0 16px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Jamal Pro</Breadcrumb.Item>
            </Breadcrumb>
            {/* Content */}
            <div className="site-layout-background content-container">
              <h2>Hello, Jamal Pro</h2>
              <CardsDashJS />
            </div>
          </Content>
        </Layout>
      </Layout>
    </LayoutDashJS>
  );
};

export default Dashboard;
