import {
  DeleteFilled,
  DownloadOutlined,
  EditFilled,
  FileOutlined,
} from "@ant-design/icons";
import { Tooltip } from "antd";
import axios from "axios";
import { useSession } from "next-auth/react";
import { toast } from "react-toastify";

const IconGroupJS = ({ blog }) => {
  // const { data: session } = useSession();
  // console.log(session);

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
        }, 2000);
      } catch (err) {
        console.log(err.message);
        toast.error(err.message);
      }
    }
  };

  return (
    <div className="icon-group">
      <Tooltip placement="topLeft" title="Download File" arrowPointAtCenter>
        <DownloadOutlined className="icon download" />
      </Tooltip>
      <Tooltip placement="topLeft" title="Open File" arrowPointAtCenter>
        <FileOutlined className="icon open" />
      </Tooltip>
      <Tooltip placement="topLeft" title="Edit File" arrowPointAtCenter>
        <EditFilled className="icon edit" />
      </Tooltip>
      <Tooltip placement="topLeft" title="Delete File" arrowPointAtCenter>
        <DeleteFilled className="icon delete" onClick={handleDelete} />
      </Tooltip>
    </div>
  );
};

export default IconGroupJS;
