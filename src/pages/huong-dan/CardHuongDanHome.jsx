import React from "react";

export default function CardHuongDanHome({ icon, title, description, image }) {
  return (
    <div className="flex flex-col items-center w-80">
      {/* Image box */}
      <div className="bg-white/0 rounded-md shadow-lg overflow-hidden w-80 h-48 mb-0 flex items-center justify-center">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      {/* Info card */}
      <div className="-mt-8 bg-white rounded-md shadow-lg px-4 py-4 w-72 text-center border-t-4 border-blue-50">
        <div className="flex items-center justify-center mb-2">
          {icon}
          <span className="text-xl font-bold ml-2 text-red-500">{title}</span>
        </div>
<div className="text-black font-semibold text-lg leading-snug line-clamp-2 overflow-hidden h-[50px]">
  {description}
</div>
      </div>
    </div>
  );
}
