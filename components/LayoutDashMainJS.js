import {
  BookOutlined,
  DownloadOutlined,
  PlusOutlined,
  ProfileFilled,
  UserOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu, Typography } from "antd";
import Link from "next/link";
import React from "react";
import LayoutDashJS from "./LayoutDashJS";

const { Title } = Typography;
const { Header, Content, Sider } = Layout;
const { SubMenu } = Menu;

// CSS di content container nya punya halaman dashboard/index
const LayoutDashMainJS = ({ title, children, defaultSelect }) => {
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
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={[defaultSelect]}
          >
            <Menu.Item key="1" icon={<ProfileFilled />}>
              <Link href="/dashboard">
                <a>Dashboard</a>
              </Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<PlusOutlined />}>
              <Link href="/dashboard/new-blog">
                <a>Add New Blog</a>
              </Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<BookOutlined />}>
              <Link href="/dashboard/my-blogs">
                <a>My Blogs</a>
              </Link>
            </Menu.Item>
            <Menu.Item key="4" icon={<UserOutlined />}>
              <Link href="/dashboard/profile">
                <a>Profile</a>
              </Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          {/* Header */}
          <Header
            className="site-layout-background header"
            style={{ padding: 0 }}
          >
            <Title className="title">{title}</Title>
          </Header>

          {/* Slash url */}
          <Content style={{ margin: "0 16px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Jamal Pro</Breadcrumb.Item>
            </Breadcrumb>
            {/* Content */}
            <div className="site-layout-background content-container">
              {children}
            </div>
          </Content>
        </Layout>
      </Layout>
    </LayoutDashJS>
  );
};

export default LayoutDashMainJS;
