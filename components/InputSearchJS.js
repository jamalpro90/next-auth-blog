// import Search from "antd/lib/transfer/search";
import React from "react";
import { Input, Space } from "antd";
import { AudioOutlined } from "@ant-design/icons";

const { Search } = Input;

const InputSearchJS = ({ setSearchValue }) => {
  // ketika tombol search di klik
  const onSearch = value => {
    console.log(value);
    setSearchValue(value);
  };

  return (
    <form onSubmit={e => e.preventDefault()}>
      <Search
        placeholder="input search text"
        allowClear
        enterButton="Search"
        size="middle"
        onSearch={onSearch}
      />
    </form>
  );
};

export default InputSearchJS;
