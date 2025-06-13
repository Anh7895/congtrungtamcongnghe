import React, { useState } from "react";
import * as XLSX from "xlsx";

function Exel() {
  const [cellRef, setCellRef] = useState("B2");
  const [results, setResults] = useState([]);

  const handleUpload = (e) => {
    const files = e.target.files;
    const tempResults = [];

    Array.from(files).forEach((file) => {
      const reader = new FileReader();
      reader.onload = (evt) => {
        const wb = XLSX.read(evt.target.result, { type: "binary" });
        const sheet = wb.Sheets[wb.SheetNames[0]];
        const cell = sheet[cellRef];
        const value = cell ? parseFloat(cell.v) : 0;

        tempResults.push({ file: file.name, value });

        if (tempResults.length === files.length) {
          setResults(tempResults);
        }
      };
      reader.readAsBinaryString(file);
    });
  };

  const total = results.reduce((acc, cur) => acc + (cur.value || 0), 0);

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">📦 Tổng ô Excel trong nhiều file</h1>

      <input
        type="file"
        accept=".xlsx"
        multiple
        onChange={handleUpload}
        className="mb-4"
      />

      <input
        type="text"
        value={cellRef}
        onChange={(e) => setCellRef(e.target.value.toUpperCase())}
        className="border p-2 mb-4 w-full"
        placeholder="Nhập ô cần tính (VD: B2)"
      />

      <ul className="mb-4 bg-gray-100 p-4 rounded">
        {results.map((r) => (
          <li key={r.file}>
            📄 <strong>{r.file}</strong>: {r.value}
          </li>
        ))}
      </ul>

      <div className="text-lg font-bold">
        Tổng: <span className="text-blue-600">{total}</span>
      </div>
    </div>
  );
}

export default Exel;
