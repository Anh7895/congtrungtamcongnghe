import { Link } from 'react-router-dom';
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

/**
 * Props:
 * - src: đường dẫn ảnh icon
 * - title: tiêu đề của dịch vụ
 * - description: mô tả dịch vụ
 * - to: đường dẫn tới trang chi tiết
 */
export default function CardDVHome({ src, title, description, to }) {
  return (
<div className="bg-white w-full w-100 md:max-w-300 p-2 rounded shadow flex flex-col">
      <div className="flex items-center space-x-2">
        <div className="w-5 h-5 md:h-10 md:w-10 flex-shrink-0 mr-2 md:mr-10 ml-0.5 md:ml-1">
          <img
            src={src}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
<h2 className="text-xs md:text-2xl font-bold">{title}</h2>
      </div>

<p className="text-xs md:text-lg text-gray-600 text-left mt-2 line-clamp-3 overflow-hidden mb-2 min-h-[4.5rem] md:min-h-[5.5rem]">
  {description}
</p>

<Link
  to={to}
  className="flex items-center justify-start gap-1 text-black text-xs md:text-lg mt-auto transition"
>
  Chi tiết
  <MdKeyboardDoubleArrowRight size={20} />
</Link>
    </div>
  );
}
