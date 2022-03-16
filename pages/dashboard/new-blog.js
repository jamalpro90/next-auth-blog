import React, { useEffect, useState } from "react";
import LayoutDashMainJS from "../../components/LayoutDashMainJS";
import { Form, Input, Button, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import axios from "axios";
import { toast } from "react-toastify";
// import ReactQuill from "react-quill";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

const { TextArea } = Input;

const NewBlog = () => {
  const [title, setTitle] = useState({});
  const [text, setText] = useState("");
  const [form] = Form.useForm();
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!session) {
      return router.push("/");
    }
  }, [session]);

  // ketika file gambar berhasil di upload
  const normFile = e => {
    console.log("Upload event:", e.file.originFileObj);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  // // Ketika data berhasil dikirim
  const onFinish = async values => {
    console.log("Success:", {
      ...values,
      // image: values.image[0].originFileObj || "",
    });

    const res = await axios.post("/api/blog", {
      title: values.title,
      text: values.text,
    });
    toast.success(res.data.message);

    form.resetFields();
  };

  //ketika data gagal dikirim
  const onFinishFailed = errorInfo => {
    console.log("Failed:", errorInfo);
    toast.error("Error see the console");
  };

  const handleText = value => {
    setText({ value });
    console.log(value);
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
            // onChange={e => setTitle(e.target.value)}
          />
        </Form.Item>

        <Form.Item
          label="Text"
          name="text"
          rules={[{ required: true, message: "Text cannot be empty" }]}
        >
          {/* <ReactQuill
            value={text}
            placeholder="Write your blog"
            onChange={handleText}
          /> */}
          <TextArea
            rows={10}
            placeholder="Write your blog"
            value={text}
            // onChange={e => setText(e.target.value)}
          />
        </Form.Item>

        {/* Upload Image */}
        {/* <Form.Item
          name="image"
          label="Upload"
          valuePropName="fileList"
          getValueFromEvent={normFile}
          extra="Add some image"
        >
          <Upload name="image" listType="picture">
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

export default dynamic(() => Promise.resolve(NewBlog), { ssr: false });
