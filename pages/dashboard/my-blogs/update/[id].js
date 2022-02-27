import React, { useRef, useState } from "react";
import LayoutDashMainJS from "../../../../components/LayoutDashMainJS";
import { Form, Input, Button, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

const { TextArea } = Input;

const UpdateBlog = ({ blog }) => {
  const [title, setTitle] = useState(blog.title);
  const [text, setText] = useState(blog.text);
  const [form] = Form.useForm();
  const router = useRouter();

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
    if (title === "" || text === "") {
      return toast.error("Title or Text cannot be empty");
    }

    if (confirm("Is this correct")) {
      const id = router.query.id;

      const res = await axios.put("/api/blog", {
        title,
        text,
        id,
      });

      toast.success(res.data.message);

      setTimeout(() => {
        router.push("/dashboard/my-blogs");
      }, 1500);
    }
  };

  //ketika data gagal dikirim
  const onFinishFailed = errorInfo => {
    console.log("Failed:", errorInfo);
    toast.error("Error see the console");
  };

  return (
    <LayoutDashMainJS title="Update Blog" defaultSelect="3">
      <Form
        form={form}
        name="newBlog"
        // labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ title: blog.title, text: blog.text }}
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
            // initialValues={blog.title}
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
            Update
          </Button>
        </Form.Item>
      </Form>
    </LayoutDashMainJS>
  );
};

export default UpdateBlog;

export async function getServerSideProps(context) {
  const id = context.params.id;
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/blogs`);
  const blogs = await res.json();
  const blog = blogs.find(blog => blog._id === id);

  return {
    props: { blog }, // will be passed to the page component as props
  };
}
