import React, { useState } from "react";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

export default function GopExel() {
  const [files, setFiles] = useState([]);

  const handleFiles = (e) => {
    setFiles(Array.from(e.target.files));
  };

  const mergeExcels = async () => {
  let mergedData = [];

  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const buffer = await file.arrayBuffer();
    const workbook = XLSX.read(buffer, { type: "array" });

    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];

    // Chuyển sheet thành JSON
    const json = XLSX.utils.sheet_to_json(sheet, { header: 1 });

    if (json.length === 0) continue;

    if (i === 0) {
      // Giữ nguyên cả tiêu đề + dữ liệu của file đầu tiên
      mergedData.push(...json);
    } else {
      // Bỏ dòng đầu tiên (tiêu đề) của các file sau
      mergedData.push(...json.slice(1));
    }
  }

  // Tạo sheet từ mảng 2 chiều
  const newWorkbook = XLSX.utils.book_new();
  const newSheet = XLSX.utils.aoa_to_sheet(mergedData);
  XLSX.utils.book_append_sheet(newWorkbook, newSheet, "Merged");

  const wbout = XLSX.write(newWorkbook, { bookType: "xlsx", type: "array" });
  const blob = new Blob([wbout], { type: "application/octet-stream" });

  saveAs(blob, "merged.xlsx");
};


  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-2">Gộp nhiều file Excel</h2>
      <input type="file" accept=".xlsx" multiple onChange={handleFiles} />
      <button
        onClick={mergeExcels}
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
      >
        Gộp & Tải xuống
      </button>
    </div>
  );
}
