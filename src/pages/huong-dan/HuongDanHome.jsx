import React from "react";
import ListCardHuongDanHome from "./ListCardHuongDanHome";

export default function HuongDanHome() {
  return (
    <div className="relative w-full">
      {/* Ảnh nền */}
      <img
        src="/images/home/background-huongdan.png"
        alt="Hướng Dẫn"
        className="w-full h-auto max-h-[500px]"
      />

      {/* Tiêu đề */}
      <div className="absolute top-0 md:top-10 left-1/2 transform -translate-x-1/2 text-center z-10">
        <h1 className="text-white text-xl md:text-4xl font-extrabold font-openSansCondensed uppercase tracking-wider mb-1" style={{ letterSpacing: 2 }}>
          HƯỚNG DẪN SỬ DỤNG
        </h1>
        <h2 className="text-orange-400 text-lg md:text-3xl font-extrabold font-openSansCondensed uppercase tracking-wider" style={{ letterSpacing: 2 }}>
          CÁC PHẦN MỀM ỨNG DỤNG
        </h2>
      </div>

      {/* Danh sách Card */}
      <div className="absolute inset-0 flex justify-center items-center z-20 top-10 md:top-28">
        <ListCardHuongDanHome />
      </div>
    </div>
  );
}
