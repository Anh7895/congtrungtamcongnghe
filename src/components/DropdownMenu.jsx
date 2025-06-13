import React, { useState, useRef, useEffect } from 'react';
import { MdKeyboardDoubleArrowDown, MdKeyboardDoubleArrowUp } from "react-icons/md";

function DropdownMenu({ title, items }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false); // Trạng thái hover
  const dropdownRef = useRef(null); // Khai báo ref để kiểm tra click ngoài vùng dropdown
const closeTimeout = useRef(null);
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

  return (
    <div
      className="relative group   text-black dark:text-white  transition-colors duration-300"
      ref={dropdownRef}
      onMouseEnter={() => {
    clearTimeout(closeTimeout.current);
    setIsHovered(true);
  }}
  onMouseLeave={() => {
    closeTimeout.current = setTimeout(() => {
      setIsHovered(false);
      setIsOpen(false);
    }, 200);
  }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)} // Khi click vào title để toggle menu
        onMouseEnter={() => setIsOpen(true)} // Khi hover vào title để mở menu
        onMouseLeave={() => !isHovered && setIsOpen(false)} // Khi bỏ hover và không còn hover trên title thì đóng menu
        className={`pb-1 flex items-center ${
          isOpen ? 'text-blue-500' : 'text-black group-hover:text-blue-500 dark:text-white'
        } ` }
      >
        {title}

        
       
          {(isHovered || isOpen) ? (
    <MdKeyboardDoubleArrowUp className="w-4 h-6  text-inherit group-hover/button:text-blue-500 transition-colors duration-300" />
  ) : (
    <MdKeyboardDoubleArrowDown className="w-4 h-6  text-inherit group-hover/button:text-blue-500 transition-colors duration-300" />
  )}
        {/* <img
          src={
            isHovered
              ? '/icon/next-top.svg'
              : isOpen
              ? '/icon/next-top.svg'
              : '/icon/next-drop.svg'
          }
          className="w-4 h-4 ml-1 transition-all"
          alt="icon"
          onMouseLeave={() => setIsHovered(false)}
        /> */}
      </button>

      {/* Gạch dưới */}
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full origin-left"></span>

      {/* Dropdown content */}
      {isOpen && (
        <div className="absolute left-0 mt-2 w-56 bg-white shadow-md z-50 overflow-hidden dark:bg-gray-800 "
        onMouseEnter={() => {
    clearTimeout(closeTimeout.current);
    setIsHovered(true);
  }}
  onMouseLeave={() => {
    closeTimeout.current = setTimeout(() => {
      setIsHovered(false);
      setIsOpen(false);
    }, 200);
  }}
        >
          
          {items.map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              className="relative group/item flex items-center h-10 pl-3 mb-0.5 py-2 text-sm font-medium border-l-[3px] border-blue-500 overflow-hidden"
            >
              {/* Hiệu ứng nền trượt */}
              <span className="pointer-events-none absolute left-[-100%] top-0 h-10 w-full flex items-center pl-3 text-sm font-medium text-white bg-blue-500 transition-all duration-500 ease-in-out group-hover/item:left-0"></span>

              {/* Nội dung chữ */}
              <span className="relative text-black group-hover/item:text-white z-10 dark:text-white">
                {item.label}
              </span>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

export default DropdownMenu;
