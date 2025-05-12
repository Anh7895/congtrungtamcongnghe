import DropdownMenu from './DropdownMenu';

function Navbar() {
  const gioiThieuItems = [
    { label: 'CHỨC NĂNG NHIỆM VỤ', href: '#' },
    { label: 'CƠ CẤU TỔ CHỨC', href: '#' },
    { label: 'LỊCH SỬ PHÁT TRIỂN', href: '#' },
  ];

  return (
    <div className="bg-white shadow-md">
      <div className="px-[100px] py-2">
        <div className="text-xl font-semibold text-blue-500">
          CỤC CÔNG NGHỆ THÔNG TIN
          <div className="text-sm text-purple-600">
            TRUNG TÂM CÔNG NGHỆ VÀ DỊCH VỤ SỐ TƯ PHÁP
          </div>
        </div>
      </div>

      <div className="flex space-x-6 px-[100px] h-16 items-center">
        <DropdownMenu title="GIỚI THIỆU" items={gioiThieuItems} />
        {['TIN TỨC', 'DỊCH VỤ', 'TÀI LIỆU', 'LIÊN HỆ'].map((item, idx) => (
          <div key={idx} className="group relative">
            <a
              href="#"
              className="text-gray-700 group-hover:text-blue-500 pb-1 flex items-center"
            >
              {item}
              
            </a>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full origin-left"></span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Navbar;



// import React, { useState } from 'react';

// function Navbar() {
//   const [isGioiThieuOpen, setIsGioiThieuOpen] = useState(false);
//   const [isHovered, setIsHovered] = useState(false); // Trạng thái hover

//   const toggleGioiThieu = () => {
//     setIsGioiThieuOpen(!isGioiThieuOpen);
//   };

//   return (
//     <div className="bg-white shadow-md">
//       <div className="px-[100px]">
//         {/* Logo */}
//         <div className="py-2">
//           <div className="text-xl font-semibold text-blue-500">
//             CỤC CÔNG NGHỆ THÔNG TIN
//             <div className="text-sm text-purple-600">
//               TRUNG TÂM CÔNG NGHỆ VÀ DỊCH VỤ SỐ TƯ PHÁP
//             </div>
//           </div>
//         </div>

//         {/* Navbar */}
//         <div className="flex items-center justify-between h-16">
//           <div className="hidden md:flex items-center space-x-6">
//             {/* GIỚI THIỆU */}
//             <div 
//               className="group relative"
//               onMouseEnter={() => setIsHovered(true)} // Khi hover vào
//               onMouseLeave={() => setIsHovered(false)} // Khi bỏ hover
//             >
//               <button
//   onClick={toggleGioiThieu}
//   className={`pb-1 flex items-center ${
//     isGioiThieuOpen ? 'text-blue-500' : 'text-gray-700 group-hover:text-blue-500'
//   }`}
// >
//   GIỚI THIỆU
//   <img
//     src={isHovered 
//       ? '/icon/next-top.svg'
//       : isGioiThieuOpen 
//         ? '/icon/next-top.svg'
//         : '/icon/next-drop.svg'
//     }
//     alt="Toggle Icon"
//     className="w-4 h-4 ml-1 transition-transform"
//   />
// </button>

//               <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full origin-left"></span>

//               {isGioiThieuOpen && (
//                 <div className="absolute left-0 mt-2 w-56 h-30 bg-white shadow-md z-10 overflow-hidden">
//                   {/* Các mục trong menu */}
//                   <a href="#" className="relative group/item flex items-center h-10 pl-3 mb-0.5 py-2 text-sm font-medium border-l-[3px] border-blue-500 overflow-hidden">
//                     <span className="pointer-events-none absolute left-[-100%] top-0 h-10 w-full flex items-center pl-3 text-sm font-medium text-white bg-blue-500 transition-all duration-1000 group-hover/item:left-0"></span>
//                     <span className="relative text-black group-hover/item:text-white">
//                       CHỨC NĂNG NHIỆM VỤ
//                     </span>
//                   </a>
//                   <a href="#" className="relative group/item flex items-center h-10 pl-3 mb-0.5 py-2 text-sm font-medium border-l-[3px] border-blue-500 overflow-hidden">
//                     <span className="pointer-events-none absolute left-[-100%] top-0 h-10 w-full flex items-center pl-3 text-sm font-medium text-white bg-blue-500 transition-all duration-1000 group-hover/item:left-0"></span>
//                     <span className="relative text-black group-hover/item:text-white">
//                       CƠ CẤU TỔ CHỨC
//                     </span>
//                   </a>
//                   <a href="#" className="relative group/item flex items-center h-10 pl-3  py-2 text-sm font-medium border-l-[3px] border-blue-500 overflow-hidden">
//                     <span className="pointer-events-none absolute left-[-100%] top-0 h-10 w-full flex items-center pl-3 text-sm font-medium text-white bg-blue-500 transition-all duration-1000 group-hover/item:left-0"></span>
//                     <span className="relative text-black group-hover/item:text-white">
//                       LỊCH SỬ PHÁT TRIỂN
//                     </span>
//                   </a>
//                 </div>
//               )}
//             </div>

//             {/* Các mục khác */}
//             {["TIN TỨC", "DỊCH VỤ", "TÀI LIỆU", "LIÊN HỆ"].map((item, idx) => (
//               <div key={idx} className="group relative">
//                 <a href="#" className="text-gray-700 group-hover:text-blue-500 pb-1 flex items-center">
//                   {item}
//                   <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
//                   </svg>
//                 </a>
//                 <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full origin-left"></span>
//               </div>
//             ))}
//           </div>

//           {/* Mobile Menu Button */}
//           <div className="md:hidden">
//             <button className="text-gray-700 hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500">
//               <svg
//                 className="h-6 w-6"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               >
//                 <path d="M4 6h16M4 12h16M4 18h16" />
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Navbar;
