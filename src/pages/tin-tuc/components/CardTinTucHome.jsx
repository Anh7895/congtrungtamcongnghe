import React from 'react';

export default function CardTinTucHome({ imageUrl, date, month, title, description, link }) {
  return (
    <div className="bg-white rounded-md shadow-md overflow-hidden w-96 flex flex-col">
      <div className="relative">
        <img src={imageUrl} alt={title} className="w-96 h-48 object-cover" />
        <div
          className="absolute right-2 bg-red-500 text-white rounded-md p-2 text-center"
          style={{ top: 150 }}
        >
          <div className="text-xl font-bold">{date}</div>
          <div className="text-sm">{month}</div>
        </div>
      </div>

      <div className="p-4 flex flex-col flex-1">
        <h3 className="text-xl font-semibold text-gray-800 mb-2 line-clamp-2">{title}</h3>

        {/* Description với chiều cao cố định tương đương 5 dòng */}
        <p
          className="text-lg text-gray-600 mb-3 line-clamp-5"
          style={{ minHeight: '6.25rem' }} // khoảng 1.25rem * 5 dòng
        >
          {description}
        </p>

        {/* Spacer đẩy "Xem thêm" xuống dưới cùng nếu cần */}
        <div className="mt-auto">
          <a
  href={`/tin-tuc-data/${link}`}
            className="text-blue-600 hover:text-blue-800  font-medium"
          >
            Chi tiết <span className="text-black ml-2 text-2xl">&raquo;</span>

          </a>
        </div>
      </div>
    </div>
  );
}
