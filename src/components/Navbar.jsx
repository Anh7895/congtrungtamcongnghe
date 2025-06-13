import DropdownMenu from './DropdownMenu';
import { GoHome } from "react-icons/go";
import { Link } from 'react-router-dom';
import React, { useState, useRef, useEffect } from 'react';
import DarkModeToggle from './DarkModeToggle';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdAdd , IoMdRemove} from "react-icons/io";

function Navbar() {
  
  const gioiThieuItems = [
    { label: 'CHỨC NĂNG NHIỆM VỤ', href: '/gioi-thieu/chuc-nang-nhiem-vu' },
    { label: 'CƠ CẤU TỔ CHỨC', href: '/gioi-thieu/co-cau-to-chuc' },
    { label: 'LỊCH SỬ PHÁT TRIỂN', href: '/gioi-thieu/lich-su-phat-trien' },
  ];


  const navItems = [
  { label: 'TIN TỨC', href: '/tin-tuc-data' },
  
  { label: 'TÀI LIỆU', href: '/tai-lieu' },
  { label: 'LIÊN HỆ', href: '/lien-he' },
];
const [isHovered, setIsHovered] = useState(false); // Trạng thái hover
  const dropdownRef = useRef(null); // Khai báo ref để kiểm tra click ngoài vùng dropdown
const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(null);

  // Đóng dropdown khi click ra ngoài
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false); // Đóng dropdown khi click ngoài
      }
    };

    // Thêm sự kiện click để kiểm tra ngoài vùng dropdown
    document.addEventListener('mousedown', handleClickOutside);

    // Cleanup sự kiện khi component bị hủy
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);
useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false); // Đóng dropdown khi click ngoài
      }
    };

    // Thêm sự kiện click để kiểm tra ngoài vùng dropdown
    document.addEventListener('mousedown', handleClickOutside);

    // Cleanup sự kiện khi component bị hủy
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);
useEffect(() => {
  const handleResize = () => {
    if (window.innerWidth >= 768) {
      setIsMenuOpen(false);
      setOpenSubMenu(null);
    }
  };

  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, []);
    const menuItems = [
    {
      label: "GIỚI THIỆU",
      children: [
        { label: "CHỨC NĂNG NHIỆM VỤ", href: "/gioi-thieu/chuc-nang-nhiem-vu" },
        { label: "CƠ CẤU TỔ CHỨC", href: "/gioi-thieu/co-cau-to-chuc" },
        { label: "LỊCH SỬ PHÁT TRIỂN", href: "/gioi-thieu/lich-su-phat-trien" },
      ],
    },
   {
      label: "DỊCH VỤ",
      children: [
       { label: 'TƯ VẤN', href: '/dich-vu/tu-van' },
    { label: 'KIỂM THỬ', href: '/dich-vu/kiem-thu' },
    { label: 'XÂY DỰNG', href: '/dich-vu/xay-dung' },
    { label: 'HỖ TRỢ', href: '/dich-vu/ho-tro' },
      ],
    },
    { label: 'TIN TỨC', href: '/tin-tuc-data' },
  { label: 'TÀI LIỆU', href: '/tai-lieu' },
  { label: 'LIÊN HỆ', href: '/lien-he' },
  ];
const dichVuItems = [
    {
      label: "DỊCH VỤ",
      children: [
       { label: 'TƯ VẤN', href: '/dich-vu/tu-van' },
    { label: 'KIỂM THỬ', href: '/dich-vu/kiem-thu' },
    { label: 'XÂY DỰNG', href: '/dich-vu/xay-dung' },
    { label: 'HỖ TRỢ', href: '/dich-vu/ho-tro' },
      ],
    },
   
  ];
  
  const gioiThieuItem = menuItems.find((item) => item.label === "GIỚI THIỆU");
  const dichVuItem = dichVuItems.find((item) => item.label === "DỊCH VỤ");
const [bgPosX, setBgPosX] = React.useState('350px');

React.useEffect(() => {
  const handleResize = () => {
    if (window.innerWidth < 768) {
      setBgPosX('0px');
    } else {
      setBgPosX('350px');
    }
  };

  window.addEventListener('resize', handleResize);
  handleResize(); 

  return () => window.removeEventListener('resize', handleResize);
}, []);
  return (
<div className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-black bg-no-repeat bg-cover bg-center text-black dark:text-white transition-colors duration-300 shadow-md"
 style={{
    backgroundImage: "url('/icon/icon-nav.png')", 
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
     backgroundPositionX: bgPosX,
      backgroundPositionY: 'center',
  }}
>

<div className="bg-blue-500 w-full h-1">

</div>

  <div className=" flex justify-between items-start pl-5 md:pl-[30vw] py-2 pt-5 md:pt-[20px]">
    <div className="text-sm  font-semibold text-red-700 font-openSansCondensed md:text-xl">
      CỤC CÔNG NGHỆ THÔNG TIN
      <div className="text-sm md:text-2xl text-blue-900 font-semibold font-tahoma dark:text-white">
        TRUNG TÂM CÔNG NGHỆ VÀ DỊCH VỤ SỐ TƯ PHÁP
      </div>
    </div>
    <GiHamburgerMenu
  onClick={() => setIsMenuOpen(!isMenuOpen)}
  className="md:hidden text-3xl text-blue-600 dark:text-white mt-2 mr-5 cursor-pointer"
/>

  </div>

{isMenuOpen && (
  <div className="absolute top-16 left-0 w-full bg-white dark:bg-black shadow-md text-sm z-50">
    {menuItems.map((item, idx) => (
      <div key={idx}>
        {item.children ? (
          <>
            <button
              onClick={() =>
                setOpenSubMenu(openSubMenu === idx ? null : idx)
              }
              className="w-full px-4 py-3 flex justify-between items-center text-gray-700 dark:text-white border-b border-gray-200"
            >
              <span>{item.label}</span>
              {openSubMenu === idx ? (
                <IoMdRemove className="text-lg dark:text-white" />
              ) : (
                <IoMdAdd className="text-lg dark:text-white" />
              )}
            </button>

            {openSubMenu === idx && (
              <div className="bg-white dark:bg-black border-t border-gray-200">
                {item.children.map((subItem, subIdx) => (
                  <Link
                    key={subIdx}
                    to={subItem.href}
                    className="block pl-6 pr-4 py-2 text-gray-600 dark:text-white border-b border-gray-100"
                  >
                    {subItem.label}
                  </Link>
                ))}
              </div>
            )}
          </>
        ) : (
          <Link
            to={item.href}
            className="block px-4 py-3 text-gray-700 dark:text-white border-b border-gray-200"
          >
            {item.label}
          </Link>
        )}
      </div>
    ))}
  </div>
)}

  <div className="hidden md:flex space-x-6 pl-10 md:pl-[10vw] h-16 items-center" >
    <Link to="/" className="text-gray-600 hover:text-blue-500 dark:text-white dark:hover:text-blue-500">
      <GoHome className="w-6 h-6 mb-2" />
    </Link>
    
    {/* Tách DropdownMenu ra khỏi group relative */}
    <div className="relative pl-10 md:pl-[10vw]">
  <DropdownMenu title={gioiThieuItem.label} items={gioiThieuItem.children} />
    </div>
<div className="relative pl-10 md:pl-[10vw]">
  <DropdownMenu title={dichVuItem.label} items={dichVuItem.children} />
    </div>
    {navItems.map((item, idx) => (
  <div key={idx} className="group pl-10 md:pl-[10vw]">
    <div className="relative inline-block">
      <a
        href={item.href}
        className="text-gray-700 group-hover:text-blue-500 pb-1 dark:text-white"
      >
        {item.label}
      </a>
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full origin-left"></span>
    </div>
  </div>
))}

   
  </div>
</div>

  );
}

export default Navbar;


