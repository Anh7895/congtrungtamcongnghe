import React from "react";
import { ImArrowDown } from "react-icons/im";
import NavPage from "../../components/NavPage";
const OrgChartNode = ({ title, className = '' }) => (
  <div className={`
    bg-white
    border border-gray-400
    p-4
    rounded-md
    shadow-sm
    flex items-center justify-center
    text-center
    font-semibold
    ${className}
  `}>
    {title}
  </div>
);

function CoCauToChuc() {
   const leadership = [
    {
      title: "Giám đốc",
      name: "Nguyễn Đức Dũng",
      phone: "024.6273.9719",
      email: "dungnd@moj.gov.vn",
    },
    {
      title: "Phó Giám đốc",
      name: "Hà Văn Đoàn",
      phone: "024.6273.9719",
      email: "doanhv@moj.gov.vn",
    },
  ];

  const professionalSections = [
    {
      title: "Tổ Hành chính - Tổng hợp",
      contactPerson: "Đ/c Trần Thị Kim Anh",
      phone: "024.6273.9719",
      email: "anhttk@moj.gov.vn",
    },
    {
      title: "Tổ Dịch vụ số Tư pháp",
      contactPerson: "Đ/c Lưu Tuấn Kiệt",
      phone: "024.6273.9719",
      email: "kietlt@moj.gov.vn",
    },
    {
      title: "Tổ Hỗ trợ kỹ thuật",
      contactPerson: "Đ/c Lê Hoàng Sơn",
      phone: "024.6273.9719",
      email: "lehoangson@moj.gov.vn",
    },
  ];
  return (
    <div className="min-h-screen bg-white  flex flex-col items-center">
    <NavPage
        title="CƠ CẤU TỔ CHỨC"
        homeText="Trang chủ"
        homeHref="/"
        currentPageText="Cơ cấu tổ chức"
      />

      <h1 className="text-2xl font-bold mb-8 mt-10">CƠ CẤU TỔ CHỨC</h1>

      {/* Giám Đốc */}
      <OrgChartNode title="GIÁM ĐỐC" />

      {/* Arrow from Giám Đốc to Phó Giám Đốc */}
      <div className="my-2 text-gray-600">
        <ImArrowDown size={40} />
      </div>

      {/* Phó Giám Đốc */}
      <OrgChartNode title="PHÓ GIÁM ĐỐC" />

      {/* Dotted line and arrows from Phó Giám Đốc to departments */}
      <div className="relative w-full max-w-2xl flex justify-center mt-6">
        {/* Dotted horizontal line */}
        <div className="absolute top-1/5 w-2/3 border-t-2 border-dashed border-gray-400 z-0"></div>
        {/* Arrows pointing down from dotted line */}
        <div className="absolute top-0 left-1/4 transform -translate-x-16 translate-y-2 text-gray-600">
          <ImArrowDown size={40} />
        </div>
        <div className="absolute top-0 right-1/4 transform translate-x-16 translate-y-2 text-gray-600">
          <ImArrowDown size={40} />
        </div>
        <div className="absolute top-0 transform translate-y-2 text-gray-600">
          <ImArrowDown size={40} />
        </div>

        {/* Department Nodes */}
        <div className="flex justify-around w-full z-10 pt-14">
          <OrgChartNode title="Tổ Hành chính - Tổng hợp" className="w-1/4 mx-2" />
          <OrgChartNode title="Tổ Dịch vụ số Tư pháp" className="w-1/4 mx-2" />
          <OrgChartNode title="Tổ Hỗ trợ kỹ thuật" className="w-1/4 mx-2" />
        </div>
      </div>

<div className="p-8 font-sans bg-gray-50 min-h-screen flex items-center justify-center">
      <div className="w-full max-w-2xl bg-white ">
        {/* I. Ban lãnh đạo */}
        <h2 className="text-xl font-bold mb-4 text-black">I. Ban lãnh đạo:</h2>
        {leadership.map((person, index) => (
          <div key={index} className="mb-4 pl-4">
            <p className="font-semibold">
              {index + 1}. {person.title}: {person.name}
            </p>
            <p className="text-gray-700">Điện thoại: {person.phone}</p>
            <p className="text-gray-700">Email: <a href={`mailto:${person.email}`} className="text-blue-600 hover:underline">{person.email}</a></p>
          </div>
        ))}

        {/* II. Các tổ/bộ phận chuyên môn */}
        <h2 className="text-xl font-bold mt-6 mb-4 text-black ">II. Các tổ/bộ phận chuyên môn:</h2>
        {professionalSections.map((section, index) => (
          <div key={index} className="mb-4 pl-4">
            <p className="font-semibold">
              {index + 1}. {section.title}:
            </p>
            <p className="text-gray-700">Đầu mối liên hệ: {section.contactPerson}</p>
            <p className="text-gray-700">Điện thoại: {section.phone}</p>
            <p className="text-gray-700">Email: <a href={`mailto:${section.email}`} className="text-blue-600 hover:underline">{section.email}</a></p>
          </div>
        ))}
      </div>
    </div>
      
    </div>
  );
}

export default CoCauToChuc;
