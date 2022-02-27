import React, { useRef, useState } from "react";
import LayoutDashMainJS from "../../components/LayoutDashMainJS";
import { Form, Input, Button, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import axios from "axios";
import { toast } from "react-toastify";

const { TextArea } = Input;

const NewBlog = () => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [form] = Form.useForm();

  // ketika file gambar berhasil di upload
  const normFile = e => {
    console.log("Upload event:", e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  // // Ketika data berhasil dikirim
  const onFinish = async values => {
    console.log("Success:", values);

    const res = await axios.post("/api/blog", {
      title,
      text,
    });
    toast.success(res.data.message);
    // console.log("Data : ", res);

    form.resetFields();
  };

  //ketika data gagal dikirim
  const onFinishFailed = errorInfo => {
    console.log("Failed:", errorInfo);
    toast.error("Error see the console");
  };

  const handleSubmit = async () => {
    // console.log(title);
    // console.log(text);
    toast.success("hello guys");

    // try {
    //   const res = await axios.post("/api/blog", { title, text });
    //   toast.success(res.data.message);
    //   setTitle("");
    //   setText("");
    // } catch (err) {
    //   // toast.error(err.response.data.message)
    //   console.log(err);
    // }
    // form.resetFields();
  };

  return (
    <LayoutDashMainJS title="Add New Blog" defaultSelect="2">
      <Form
        form={form}
        name="newBlog"
        // labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="on"
      >
        <Form.Item
          label="Title"
          name="title"
          rules={[{ required: true, message: "Title cannot be empty" }]}
        >
          <Input
            placeholder="Add a title"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
        </Form.Item>

        <Form.Item
          label="Text"
          name="text"
          rules={[{ required: true, message: "Text cannot be empty" }]}
        >
          <TextArea
            rows={10}
            placeholder="Write your blog"
            value={text}
            onChange={e => setText(e.target.value)}
          />
        </Form.Item>

        {/* Upload */}
        {/* <Form.Item
          name="upload"
          label="Upload"
          valuePropName="fileList"
          getValueFromEvent={normFile}
          extra="Add image"
        >
          <Upload name="logo" action="/upload.do" listType="picture">
            <Button icon={<UploadOutlined />}>Click to upload</Button>
          </Upload>
        </Form.Item> */}

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
