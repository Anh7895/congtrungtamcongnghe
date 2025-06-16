import React, { useState, useRef } from "react";
import MarkdownIt from "markdown-it";
import MdEditor from "react-markdown-editor-lite";
import "react-markdown-editor-lite/lib/index.css";
import { db } from "../../firebase-config";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { FaImage } from "react-icons/fa";

const mdParser = new MarkdownIt();

export default function MarkdownEditor() {
  const [content, setContent] = useState("");
  const fileInputRef = useRef(null);

  const handleEditorChange = ({ text }) => {
    setContent(text);
  };

  const handleIconClick = () => {
    fileInputRef.current.click();
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      const base64 = reader.result;
      const markdownImage = `![Ảnh tải lên](${base64})`;
      setContent((prev) => prev + "\n" + markdownImage);
    };
    reader.readAsDataURL(file);
  };

  const saveToFirestore = async () => {
    try {
      console.log("Đang lưu Markdown:", content);
      await addDoc(collection(db, "posts"), {
        content,
        createdAt: Timestamp.now(),
      });
      alert("Lưu thành công!");
      setContent("");
    } catch (err) {
      console.error("Lỗi khi lưu Firestore:", err);
    }
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      {/* Custom CSS cho ảnh */}
      <style>
        {`
          .markdown-body img {
            display: block;
            margin-left: auto;
            margin-right: auto;
            max-width: 70%;
            height: auto;
          }
        `}
      </style>
<h1 className="text-3xl font-bold text-center pt-6">Markdown Editor</h1>
      {/* Markdown Editor */}
      <MdEditor
        value={content}
        style={{ height: "500px" }}
        renderHTML={(text) =>
          `<div class="markdown-body">${mdParser.render(text)}</div>`
        }
        onChange={handleEditorChange}
      />

      {/* Nút chèn ảnh */}
      <div className="flex items-center gap-2 mt-4">
        <button
          onClick={handleIconClick}
          className="text-blue-500 hover:text-blue-700 text-xl"
          title="Chèn ảnh từ máy"
        >
          <FaImage />
        </button>

        {/* Input file ẩn */}
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          onChange={handleImageUpload}
          style={{ display: "none" }}
        />
      </div>

      {/* Nút lưu */}
      <button
        onClick={saveToFirestore}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Lưu vào Firestore
      </button>
    </div>
  );
}
