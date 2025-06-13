import { FaCoffee } from 'react-icons/fa';
import { IoDocumentTextOutline } from "react-icons/io5";

/**
 * @param {boolean} checked - true để hiển thị icon FaCoffee bên phải
 * @param {string} content - nội dung hiển thị ở cột 2
 */
export default function CardHomeTaiLieu({ checked = false, content = 'Nội dung mặc định' }) {
  return (
<div className="w-full max-w-96 h-32 flex border border-gray-300 rounded-2xl p-2 shadow-[0_8px_30px_rgba(0,0,0,0.6)]">
      {/* Cột 1 */}
      <div className="w-12 relative">
        <IoDocumentTextOutline 
          className="absolute top-2 left-0 w-10 h-10 text-blue-600" 
          aria-label="icon 1"
        />
      </div>

      {/* Cột 2 */}
      <div className="w-2/3 relative ">
        <div className="absolute top-10 left-0 right-0">
          <p className="text-sm text-gray-700">{content}</p>
        </div>
      </div>

      {/* Cột 3 */}
      <div className="flex-1 relative w-64 h-96  ">
        {checked && (
        <img
  src="\icon\icon-new.png"
  alt="Decor"
  className="max-w-full max-h-full object-contain"
/>
        )}
      </div>
    </div>
  );
}
