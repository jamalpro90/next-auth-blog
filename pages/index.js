import axios from "axios";
import { useEffect, useState } from "react";
import CardsJS from "../components/CardsJS";
import InputSearchJS from "../components/InputSearchJS";
import LayoutJS from "../components/LayoutJS";

export default function Home() {
  const [blogs, setBlogs] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    const getBlogs = async () => {
      try {
        const res = await axios.get("/api/blogs");
        setBlogs(res.data);
        // console.log(res.data);
      } catch (err) {
        console.log(err.message);
      }
    };

    getBlogs();
  }, []);

  return (
    <LayoutJS>
      <InputSearchJS setSearchValue={setSearchValue} />
      <CardsJS blogs={blogs} searchValue={searchValue} />
    </LayoutJS>
  );
}
