/* eslint-disable @next/next/no-img-element */
import {
  Button,
  Col,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Row,
  Select,
} from "antd";
import axios from "axios";
import { getSession, useSession } from "next-auth/react";
import React, { useRef } from "react";
import { toast } from "react-toastify";
import LayoutDashMainJS from "../../components/LayoutDashMainJS";

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

const Profile = ({ profile }) => {
  const { data: session } = useSession();
  const formRef = useRef(null);

  // Ketika data berhasil dikirim
  const onFinish = async values => {
    console.log("Success:", values);

    if (confirm("Are you sure")) {
      try {
        const res = await axios.put("/api/profile", { values });
        toast.success(res.data.message);
      } catch (err) {
        console.log(err.message);
        // toast.error(res.data.message);
      }
    }
  };

  // ketika data gagal dikirim
  const onFinishFailed = errorInfo => {
    console.log("Failed:", errorInfo);
  };

  // ketika tekan tombol reset
  const onReset = () => {
    formRef.current.resetFields();
  };

  if (!session) return null;

  return (
    <LayoutDashMainJS title="Profile" defaultSelect="4">
      {/* <button onClick={handleTest}>TEST</button> */}
      <div className="profile">
        <Form
          {...layout}
          ref={formRef}
          name="newBlog"
          // labelCol={{ span: 8 }}
          wrapperCol={{ span: 8 }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          initialValues={{
            name: profile.name,
            age: profile.age,
            address: profile.address,
            "phone-number": profile["phone-number"],
            gender: profile.gender,
            // date: profile.date,
            about: profile.about,
          }}
        >
          {/* Icon */}
          <Row justify="center">
            <Col>
              {/* <UserOutlined className="icon" /> */}
              <img src={session.user.image} alt="user image" className="icon" />
            </Col>
          </Row>

          {/* Name */}
          <Form.Item label="Name" name="name">
            <Input
              placeholder={session.user.name}
              // value={name}
              // onChange={e => setName(e.target.value)}
            />
          </Form.Item>

          {/* Age */}
          <Form.Item
            name="age"
            label="Age"
            rules={[{ type: "number", min: 0, max: 99 }]}
          >
            <InputNumber placeholder="20" />
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
          <Form.Item label="Date of birth" name="date">
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

export default Profile;

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  const id = session.userId;

  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/profile`);
  const profiles = await res.json();
  const profile = profiles.find(pro => pro.asu === id);
  // console.log(session);

  return {
    props: { profile: profile || {} }, // will be passed to the page component as props
  };
}
