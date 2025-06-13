// src/components/MarkdownEditor.jsx
import React, { useState } from "react";
import MarkdownIt from "markdown-it";
import MdEditor from "react-markdown-editor-lite";
import "react-markdown-editor-lite/lib/index.css";
import { db } from "../../firebase-config";
import { collection, addDoc, Timestamp } from "firebase/firestore";
const mdParser = new MarkdownIt();

export default function MarkdownEditor() {
  const [content, setContent] = useState("");

  const handleEditorChange = ({ text }) => {
    setContent(text); // Đây là Markdown
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
      <>
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
  <MdEditor
    value={content}
    style={{ height: "500px" }}
    renderHTML={(text) => `<div class="markdown-body">${mdParser.render(text)}</div>`}
    onChange={handleEditorChange}
  />
</>

      <button
        onClick={saveToFirestore}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Lưu vào Firestore
      </button>
    </div>
  );
}
