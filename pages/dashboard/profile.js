import { UserOutlined } from "@ant-design/icons";
import React, { useRef } from "react";
import LayoutDashMainJS from "../../components/LayoutDashMainJS";
import { Form, Input, Button, Select, Col, Row, DatePicker } from "antd";
import { useSession } from "next-auth/react";

const { Option } = Select;
const { TextArea } = Input;

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const Dashboard = () => {
  const { data: session } = useSession();
  const formRef = useRef(null);

  // Ketika data berhasil dikirim
  const onFinish = values => {
    console.log("Success:", values);
  };

  // ketika data gagal dikirim
  const onFinishFailed = errorInfo => {
    console.log("Failed:", errorInfo);
  };

  // fungsi pilih gender
  const onGenderChange = value => {
    switch (value) {
      case "male":
        formRef.current.setFieldsValue({
          note: "Hi, man!",
        });
        return;

      case "female":
        formRef.current.setFieldsValue({
          note: "Hi, lady!",
        });
        return;

      case "other":
        formRef.current.setFieldsValue({
          note: "Hi there!",
        });
    }
  };

  // ketika tekan tombol reset
  const onReset = () => {
    formRef.current.resetFields();
  };

  if (!session) return null;

  return (
    <LayoutDashMainJS title="Profile" defaultSelect="4">
      <div className="profile">
        <Form
          {...layout}
          ref={formRef}
          name="newBlog"
          // labelCol={{ span: 8 }}
          wrapperCol={{ span: 8 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          {/* Icon */}
          <Row justify="center">
            <Col>
              <UserOutlined className="icon" />
            </Col>
          </Row>

          {/* Username */}
          <Form.Item label="Username" name="username">
            <Input defaultValue={session.user.name} />
          </Form.Item>

          {/* Address */}
          <Form.Item label="Address" name="address">
            <Input placeholder="Jl. Soekarno Hatta No. 70, Kota Malang" />
          </Form.Item>

          {/* Phone number */}
          <Form.Item label="Phone Number" name="phone-number">
            <Input placeholder="+62123456789" />
          </Form.Item>

          {/* Pilih gender */}
          <Form.Item name="gender" label="Gender">
            <Select
              placeholder="Select a option and change input text above"
              onChange={onGenderChange}
              allowClear
            >
              <Option value="male">male</Option>
              <Option value="female">female</Option>
              <Option value="other">other</Option>
            </Select>
          </Form.Item>

          {/* Other Gender */}
          <Form.Item
            noStyle
            shouldUpdate={(prevValues, currentValues) =>
              prevValues.gender !== currentValues.gender
            }
          >
            {({ getFieldValue }) =>
              getFieldValue("gender") === "other" ? (
                <Form.Item name="customizeGender" label="Customize Gender">
                  <Input />
                </Form.Item>
              ) : null
            }
          </Form.Item>

          {/* Tanggal lahir */}
          <Form.Item label="Date of birth">
            <DatePicker />
          </Form.Item>

          {/* About */}
          <Form.Item label="About" name="about">
            <TextArea rows={5} placeholder="Telling about youself" />
          </Form.Item>

          <Row justify="center">
            {/* Save */}
            <Col>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Save
                </Button>
              </Form.Item>
            </Col>
            {/* Reset */}
            <Col offset={1}>
              <Form.Item>
                <Button htmlType="button" onClick={onReset}>
                  Reset
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </div>
    </LayoutDashMainJS>
  );
};

export default Dashboard;
