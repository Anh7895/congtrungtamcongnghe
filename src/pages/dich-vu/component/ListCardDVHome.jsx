import { FaCaretLeft, FaCaretRight } from "react-icons/fa";
import React, { useState, useEffect } from "react";
import CardDVHome from "./CardDVHome"; 

const ListCardDVHome = () => {
  const items = [
    {
      src: "/icon/icon-tu-van.png",
      title: "TƯ VẤN",
      description: "Tư vấn dự án công nghệ thông tin",
      to: "/dich-vu/tu-van",
    },
    {
      src: "/icon/icon-kiem-thu.png",
      title: "KIỂM THỬ",
      description: "Kiểm thử, giám sát an toàn an ninh thông tin",
      to: "/dich-vu/kiem-thu",
    },
    {
      src: "/icon/icon-ho-tro.png",
      title: "HỖ TRỢ",
      description: "Hỗ trợ quản trị, vận hành, sử dụng hệ thống thông tin",
      to: "/dich-vu/ho-tro",
    },
    {
      src: "/icon/icon-xay-dung.png",
      title: "XÂY DỰNG",
      description: "Xây dựng, nâng cấp, phát triển cổng/trang thông tin điện tử",
      to: "/dich-vu/xay-dung",
    },
    {
      src: "/icon/icon-tu-van.png",
      title: "XÂY DỰNG 2",
      description: "Nội dung khác...",
      to: "/dich-vu/xay-dung-2",
    },
    {
      src: "/icon/icon-tu-van.png",
      title: "XÂY DỰNG 3",
      description: "Nội dung khác nữa...",
      to: "/dich-vu/xay-dung-3",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(4);

  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(4);
      }
      setCurrentIndex(0); // reset khi resize
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
    <div className="">
      <div className="container mx-auto text-center">
        

        <div className="relative flex items-center justify-center">
      <button
        onClick={handlePrev}
        // disabled={startIndex === 0}
        className="ml-2 text-blue-600 disabled:text-gray-400"
        aria-label="Previous"
      >
        <FaCaretLeft size={100} />
      </button>

          {/* <div className="overflow-hidden" style={{ width: `${422 * itemsPerView}px` }}> */}
                      <div className="overflow-hidden w-2/5 md:w-4/5" >

            <div
  className="flex transition-transform duration-500 ease-in-out"
  style={{ transform: `translateX(-${(100 / itemsPerView) * currentIndex}%)` }}
>
  {items.map((item, index) => (
    <div
      key={index}
      className="flex-shrink-0 px-2"
      style={{ width: `${100 / itemsPerView}%` }}
    >
      <CardDVHome
        src={item.src}
        title={item.title}
        description={item.description}
        to={item.to}
      />
    </div>
  ))}
</div>

          </div>

              <button
        onClick={handleNext}
        // disabled={startIndex >= items.length - itemsToShow}
        className="mr-2 text-blue-600 disabled:text-gray-400"
        aria-label="Next"
      >
        <FaCaretRight size={100} />
      </button>
        </div>
      </div>
    </div>
  );
};

export default ListCardDVHome;

