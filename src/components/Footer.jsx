import React from 'react';
import { FaFacebook, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-6">
  <div className="w-full pl-6 pr-48">
    {/* Dòng tiêu đề và icon */}
    <div className="flex items-center justify-between">
      <h3 className="text-2xl font-semibold">TRANG THÔNG TIN CÔNG NGHỆ & DỊCH VỤ SỐ TƯ PHÁP</h3>
      <div className="flex items-center space-x-4">
        <a
          href="https://www.facebook.com/your-page"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-blue-300"
        >
          <FaFacebook size={24} />
        </a>
        <a
          href="mailto:your-email@example.com"
          className="text-white hover:text-blue-300"
        >
          <FaEnvelope size={24} />
        </a>
        <a
          href="https://zalo.me/your-zalo"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-blue-300"
        >
          <img src={"/images/home/home-trung-tam.png"} alt="Zalo" className="w-6 h-6" />
        </a>
      </div>
    </div>
  </div>

  {/* Divider căn lề trái cùng tiêu đề */}
  <div className="mt-4 h-[3px] bg-blue-500 w-[calc(100%-3rem)] ml-6 rounded" />

  {/* Các thông tin bên dưới */}
  {/* Các thông tin bên dưới */}
<div className="w-full pl-6 pr-20 mt-4">
  <div className="flex justify-between items-start">
    {/* Khối thông tin bên trái */}
    <div className="space-y-2">
      <p>Chịu trách nhiệm chính: Ông Nguyễn Đức Dũng, Giám đốc Trung tâm</p>
      <p>Đơn vị quản lý: Trung tâm Công nghệ & Dịch vụ số Tư pháp, Cục Công nghệ thông tin</p>
      <p>Địa chỉ: 58-60 Trần Phú, Ba Đình, Hà Nội; </p>
      <p>Điện thoại: 02462739719 </p>
      <p>Email: ttcnvdvstp@moj.gov.vn</p>
    </div>

    {/* Ô input bên phải */}
    <div>
  <select
    className="px-3 py-2 rounded border border-gray-300 text-black bg-white"
    defaultValue=""
  >
    <option value="" disabled>Chọn liên kết website</option>
    <option value="https://google.com">Google</option>
    <option value="https://facebook.com">Facebook</option>
    <option value="https://zalo.me">Zalo</option>
    <option value="https://your-website.com">Website của bạn</option>
  </select>

  <img
    src="https://static.mediacdn.vn/MIC/images/dcn.jpg"
    alt="Mô tả ảnh"
    className="mt-2 w-170 h-70 object-contain"
  />
</div>

  </div>
</div>

</footer>



  );
};

export default Footer;
