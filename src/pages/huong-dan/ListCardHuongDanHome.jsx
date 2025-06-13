import CardHuongDanHome from "./CardHuongDanHome";
import React, { useState, useEffect } from "react";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";

export default function ListCardHuongDanHome() {
  const items = [
    {
      title: "V-Office",
      description: "Hệ thống Quản lý Văn bản điều hành",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32" className="w-8 h-8 text-blue-500 inline-block mr-2 align-middle"><rect x="5" y="5" width="22" height="22" rx="3" stroke="currentColor" strokeWidth="2"/><path stroke="currentColor" strokeWidth="2" d="M8 11h16M8 15h8"/></svg>
      ),
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?fit=crop&w=400&q=80"
    },
    {
      title: "Email",
      description: "Hệ thống thư điện tử công vụ.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32" className="w-8 h-8 text-blue-500 inline-block mr-2 align-middle"><rect x="5" y="7" width="22" height="18" rx="3" stroke="currentColor" strokeWidth="2"/><path stroke="currentColor" strokeWidth="2" d="M7 9l9 8 9-8"/></svg>
      ),
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?fit=crop&w=400&q=80"
    },
    {
      title: "Phần mềm Hộ tịch",
      description: "Hệ thống thông tin đăng ký và quản lý hộ tịch",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32" className="w-8 h-8 text-blue-500 inline-block mr-2 align-middle"><path stroke="currentColor" strokeWidth="2" d="M5 17l11-8 11 8v9a2 2 0 01-2 2H7a2 2 0 01-2-2v-9z"/><path stroke="currentColor" strokeWidth="2" d="M13 28V18h6v10"/></svg>
      ),
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?fit=crop&w=400&q=80"
    },
    // Duplicated items (example)
    {
      title: "V-Office",
      description: "Hệ thống Quản lý Văn bản điều hành",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32" className="w-8 h-8 text-blue-500 inline-block mr-2 align-middle"><rect x="5" y="5" width="22" height="22" rx="3" stroke="currentColor" strokeWidth="2"/><path stroke="currentColor" strokeWidth="2" d="M8 11h16M8 15h8"/></svg>
      ),
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?fit=crop&w=400&q=80"
    },
    {
      title: "Email",
      description: "Hệ thống thư điện tử công vụ.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32" className="w-8 h-8 text-blue-500 inline-block mr-2 align-middle"><rect x="5" y="7" width="22" height="18" rx="3" stroke="currentColor" strokeWidth="2"/><path stroke="currentColor" strokeWidth="2" d="M7 9l9 8 9-8"/></svg>
      ),
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?fit=crop&w=400&q=80"
    },
    {
      title: "Phần mềm Hộ tịch",
      description: "Hệ thống thông tin đăng ký và quản lý hộ tịch",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32" className="w-8 h-8 text-blue-500 inline-block mr-2 align-middle"><path stroke="currentColor" strokeWidth="2" d="M5 17l11-8 11 8v9a2 2 0 01-2 2H7a2 2 0 01-2-2v-9z"/><path stroke="currentColor" strokeWidth="2" d="M13 28V18h6v10"/></svg>
      ),
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?fit=crop&w=400&q=80"
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
      setCurrentIndex(0);
    };

    updateItemsPerView();
    window.addEventListener("resize", updateItemsPerView);
    return () => window.removeEventListener("resize", updateItemsPerView);
  }, []);

  const maxIndex = items.length - itemsPerView;

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto mt-4">
  <div className="relative w-10/12 mx-auto">
    {/* Arrow Left */}
    <button onClick={handlePrev} className="absolute left-[-0rem]  md:left-[-6rem] top-1/2 -translate-y-1/2 z-10 bg-white rounded-full shadow-lg w-10 h-10 flex items-center justify-center hover:bg-blue-100 transition">
      <FaCaretLeft size={28} />
    </button>

    {/* Carousel */}
    <div className="overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out pl-2"
        style={{ transform: `translateX(-${(100 / itemsPerView) * currentIndex}%)` }}
      >
        {items.map((sw, i) => (
          <div key={i} className="flex-shrink-0 px-2 " style={{ width: `${100 / itemsPerView}%` }}>
            <CardHuongDanHome {...sw} />
          </div>
        ))}
      </div>
    </div>

    {/* Arrow Right */}
    <button onClick={handleNext} className="absolute right-[0rem] md:right-[-6rem] top-1/2 -translate-y-1/2 z-10 bg-white rounded-full shadow-lg w-10 h-10 flex items-center justify-center hover:bg-blue-100 transition">
      <FaCaretRight size={28} />
    </button>
  </div>
</div>

  );
}
