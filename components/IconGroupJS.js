import {
  DeleteFilled,
  DownloadOutlined,
  EditFilled,
  FileOutlined,
} from "@ant-design/icons";
import { Tooltip } from "antd";
import axios from "axios";
import Link from "next/link";
import { toast } from "react-toastify";

const IconGroupJS = ({ blog }) => {
  const handleDelete = async () => {
    if (confirm("Are you sure to delete this blog")) {
      try {
        const res = await axios.delete("/api/blog", {
          headers: {
            Authorization: true,
          },
          data: {
            id: blog._id,
          },
        });
        toast.success(res.data.message);
        setTimeout(() => {
          location.reload();
        }, 1500);
      } catch (err) {
        console.log(err.message);
        toast.error(res.data.message);
      }
    }
  };

  const handleDownload = () => {
    const element = document.createElement("a");
    const file = new Blob([blog.text], {
      type: "text/plain",
    });
    element.href = URL.createObjectURL(file);
    element.download = `${blog.title}.txt`;
    document.body.appendChild(element);
    element.click();
  };

  return (
    <div className="icon-group">
      <Tooltip placement="topLeft" title="Download File" arrowPointAtCenter>
        <DownloadOutlined className="icon download" onClick={handleDownload} />
      </Tooltip>
      <Link href={`/blog/${blog._id}`} passHref>
        <Tooltip placement="topLeft" title="See File" arrowPointAtCenter>
          <FileOutlined className="icon open" />
        </Tooltip>
      </Link>
      <Link href={`/dashboard/my-blogs/update/${blog._id}`} passHref>
        <Tooltip placement="topLeft" title="Edit File" arrowPointAtCenter>
          <EditFilled className="icon edit" />
        </Tooltip>
      </Link>
      <Tooltip placement="topLeft" title="Delete File" arrowPointAtCenter>
        <DeleteFilled className="icon delete" onClick={handleDelete} />
      </Tooltip>
    </div>
  );
};

export default IconGroupJS;
