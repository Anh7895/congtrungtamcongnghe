import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const banners = [
  {
    image: "/images/home/home-trung-tam.png",
    link: "/gioi-thieu",
    text: "Tìm hiểu thêm"
  },
  { image: "/images/home/home-chu-ky-so.png" },
  { image: "/images/home/home-ho-tro-tong-dai.png" },
  { image: "/images/home/home-hoi-nghi.png" },
  { image: "/images/home/home-dao-tao.png" },
  { image: "/images/home/home-bao-tri.png" },
];

export default function BannerHomeNew() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % banners.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const current = banners[index];

  return (
    <div className="w-full aspect-[16/5] relative overflow-hidden select-none">
      <img
        key={index}
        src={current.image}
        alt={`Banner ${index}`}
        className="w-full h-full object-cover transition-all duration-700"
      />

      {/* Nút link nếu có */}
      {current.link && current.text && (
        <div className="absolute left-20 bottom-10 md:left-32 md:bottom-16 lg:left-60 lg:bottom-40">
          <Link
            to={current.link}
            className="
              bg-blue-500 bg-opacity-80 text-black dark:bg-black dark:text-white
              text-sm md:text-base lg:text-lg
              px-4 py-1.5 md:px-6 md:py-2 
              rounded-full shadow-md 
              hover:bg-opacity-100 transition
              inline-block text-center
            "
          >
            {current.text}
          </Link>
        </div>
      )}

      {/* Dots chuyển ảnh */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {banners.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`
              w-3 h-3 rounded-full transition
              ${i === index ? "bg-blue-600 dark:bg-blue-400" : "bg-gray-300 dark:bg-gray-600"}
              hover:bg-blue-500
            `}
            aria-label={`Chuyển đến banner ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
