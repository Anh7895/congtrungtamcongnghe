import React, { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const thuvienso = [
  { src: '/thuvienso/tet-2024.jpg', alt: "" },
  { src: '/thuvienso/thuvienso-1.jpg', alt: "" },
  { src: '/thuvienso/thuvienso-2.jpg', alt: "" },
  { src: '/thuvienso/thuvienso-3.jpg', alt: "" },
  { src: '/thuvienso/thuvienso-4.jpg', alt: "" },
  { src: '/thuvienso/thuvienso-5.jpg', alt: "" },
  { src: '/thuvienso/thuvienso-6.jpg', alt: "" },
];

function ThuVienSoHome() {
  const scrollRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const scrollGallery = (direction) => {
    const container = scrollRef.current;
    if (!container) return;
    const scrollAmount = 300;
    container.scrollBy({
      left: direction === 'right' ? scrollAmount : -scrollAmount,
      behavior: 'smooth',
    });
  };

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="w-full py-10" style={{ backgroundColor: '#abdbe3' }}>
      <h2 className="text-center text-blue-900 text-xl md:text-4xl font-extrabold font-openSansCondensed mb-6">
        THƯ VIỆN SỐ
      </h2>

      <div className="flex items-center gap-2 px-24">
        {/* Nút trái */}
        <div
          onClick={() => scrollGallery('left')}
          className="bg-white p-1 rounded-full shadow cursor-pointer hover:scale-110 transition-transform"
        >
          <ChevronLeft className="w-6 h-6 text-gray-600" />
        </div>

        {/* Thư viện ảnh */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto scrollbar-hide space-x-6 px-2 py-4 flex-1"
        >
          {thuvienso.map(({ src, alt }, idx) => (
            <div
              key={idx}
              className="w-60 flex-shrink-0 rounded-lg shadow-lg overflow-hidden cursor-pointer"
              onClick={() => openModal({ src, alt })}
            >
              <img src={src} alt={alt} className="w-full h-48 object-cover" />
            </div>
          ))}
        </div>

        {/* Nút phải */}
        <div
          onClick={() => scrollGallery('right')}
          className="bg-white p-1 rounded-full shadow cursor-pointer hover:scale-110 transition-transform"
        >
          <ChevronRight className="w-6 h-6 text-gray-600" />
        </div>
      </div>

      {/* Modal ảnh lớn */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4">
          <div className="relative bg-white rounded-lg shadow-lg max-w-3xl w-full">
            <button
              onClick={closeModal}
              className="absolute top-2 left-2 bg-gray-200 hover:bg-gray-300 text-black rounded-full p-2 z-10"
            >
              ✕
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full max-h-[80vh] object-contain rounded"
            />
            <p className="text-center py-4 text-gray-700">{selectedImage.alt}</p>
          </div>
        </div>
      )}

      {/* Ẩn scrollbar */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}

export default ThuVienSoHome;
