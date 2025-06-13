// TinTucDataDetail.jsx
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { FaHome } from "react-icons/fa";
import tinTucList from "../data/TinTucList";
import SlideBarData from "./SlideBarData";

function TinTucDataDetail() {
  const { link } = useParams();

  const [item, setItem] = useState(null);

useEffect(() => {
  if (!link) return;

  const foundItem = tinTucList.find(item => item.link === link);
  setItem(foundItem || false); // Không cần gọi setItem 2 lần
}, [link]);

  if (item === null) {
    return <div>Loading...</div>;
  }

  if (!item) {
    return <div>Bài viết không tồn tại!</div>;
  }
const posts = tinTucList;
const formatDate = (dateString) => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(dateString).toLocaleDateString("vi-VN", options);
};
 return (
    <div className="flex max-w-[1300px] mx-auto px-4 pt-10">
    <div className="w-full lg:w-3/4">
      <div style={{ flex: 3, paddingRight: "20px" }}>
        <div className="TinTuc flex items-center gap-2 ml-0 mt-3 md:mt-5">
          <div className="rounded-full bg-gradient-to-tr from-blue-500 to-white p-2">
            <FaHome className="text-white text-xl" />
          </div>
          <span className="text-base font-bold text-gray-800">TIN TỨC</span>
        </div>

        <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
          {item.markdown || item.description || "Nội dung đang cập nhật..."}
        </ReactMarkdown>
        <div className="font-bold mt-10 text-right mb-10">{item.tacgia}</div>
      </div>

     
    </div>
    <SlideBarData posts={posts} formatDate={formatDate}/>
  </div>
);

}

export default TinTucDataDetail;
