import React from "react";
import LayoutDashMainJS from "../../components/LayoutDashMainJS";
import { Form, Input, Button, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";

const { TextArea } = Input;

const NewBlog = () => {
  // ketika file gambar berhasil di upload
  const normFile = e => {
    console.log("Upload event:", e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  // Ketika data berhasil dikirim
  const onFinish = values => {
    console.log("Success:", values);
  };

  // ketika data gagal dikirim
  const onFinishFailed = errorInfo => {
    console.log("Failed:", errorInfo);
  };

  return (
    <LayoutDashMainJS title="Add New Blog" defaultSelect="2">
      <Form
        name="newBlog"
        // labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Title"
          name="title"
          rules={[{ required: true, message: "Title cannot be empty" }]}
        >
          <Input placeholder="Add a title" />
        </Form.Item>

        <Form.Item
          label="Text"
          name="text"
          rules={[{ required: true, message: "Text cannot be empty" }]}
        >
          <TextArea rows={10} placeholder="Write your blog" />
        </Form.Item>

        <Form.Item
          name="upload"
          label="Upload"
          valuePropName="fileList"
          getValueFromEvent={normFile}
          extra="Add image"
        >
          <Upload name="logo" action="/upload.do" listType="picture">
            <Button icon={<UploadOutlined />}>Click to upload</Button>
          </Upload>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 1, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </LayoutDashMainJS>
  );
};

export default NewBlog;
