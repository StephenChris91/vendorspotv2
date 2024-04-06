import React, { useState } from "react";
import dynamic from "next/dynamic";
// import "react-quill/dist/quill.snow.css"; // Import Quill styles

import ReactQuill from "react-quill";

const modules = {
  toolbar: [
    [{ header: [1, 2, 3, false] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [{ list: "ordered" }, { list: "bullet" }],
    ["link", "image"],
    [{ align: [] }],
    [{ color: [] }],
    ["code-block"],
    ["clean"],
  ],
};

const formats = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "link",
  "image",
  "align",
  "color",
  "code-block",
];

export default function Editor() {
  const [content, setContent] = useState("");

  const handleEditorChange = (newContent: React.SetStateAction<string>) => {
    setContent(newContent);
  };

  return (
    <div className="h-full w-[90vw]">
      <ReactQuill
        theme="snow"
        value={content}
        onChange={(newContent) => setContent(newContent)}
        modules={modules}
        formats={formats}
      />
    </div>
  );
}
