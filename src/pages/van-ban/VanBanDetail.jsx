import React from 'react';
import { FaRegFileAlt } from 'react-icons/fa';

function VanBanDetail() {
 const tableData = [
  {
    soKyHieu: '665/QĐ-BTP',
    ngayBanHanh: '26/02/2025',
    trichYeu:
      'Quy định chức năng, nhiệm vụ, quyền hạn và cơ cấu tổ chức của Cục Công nghệ thông tin',
    href: '/vanban/Quy định chức năng, nhiệm vụ, quyền hạn và cơ cấu tổ chức của Cục Công nghệ thông tin.pdf',
  },
  
  {
    soKyHieu: '2595/QĐ-BTP',
    ngayBanHanh: '31/12/2024',
    trichYeu: 'Ứng dụng công nghệ thông tin, chuyển đổi số, bảo đảm an toàn thông tin, an ninh mạng của Bộ, Ngành Tư pháp năm 2025  ',
    href: '/vanban/ungdungcntt.pdf',
  },
  {
    soKyHieu: '05/KH-CNTT',
    ngayBanHanh: '06/05/2024',
    trichYeu: 'Tổ chức triển khai diễn tập thực chiến bảo đảm an toàn thông tin mạng tại Bộ Tư pháp năm 2024',
    href: '/vanban/tochuctrienkhai.pdf',
  },
  {
    soKyHieu: '877/QĐ-BTP',
    ngayBanHanh: '30/03/2025',
    trichYeu: 'Về việc ban hành kế hoạch thực hiện Nghị quyết số 03/NQ-CP ngày 09/01/2025 của Chính phủ ban hành Chương trình hành động thực hiện Nghị quyết số 57-NQ/TW ngày 22/12/2024 của Bộ Chính trị về đột phá phát triển khoa học, công nghệ, đổi mới sáng tạo và chuyển đổi số quốc gia',
    href: '/vanban/kehoachnghiquyet03.rar',
  },
  {
    soKyHieu: '1283/QĐ-BTP',
    ngayBanHanh: '17/04/2025',
    trichYeu: 'Về việc thành lập Ban Chỉ đạo của Bộ Tư pháp về phát triển khoa học, công nghệ, đổi mới sáng tạo, chuyển đổi số và Đề án 06',
    href: '/vanban/thanhlapbanchidao06.pdf',
  },
  {
    soKyHieu: '29/CĐ-TTg',
    ngayBanHanh: '03/04/2025',
    trichYeu: 'Trích yếu: Công điện của Thủ tướng Chính phủ về đẩy mạnh công tác phòng ngừa, xử lý hoạt động sử dụng công nghệ cao trên không gian mạng để lừa đảo chiếm đoạt tài sản',
    href: '/vanban/29_CD-TTg_03042025-signed.pdf',
  },
];


  return (
    <div className="flex flex-col items-center justify-center mt-10 bg-white mb-5 md:mb-20 ml-10 mr-10">
<div className="self-start mb-10 font-bold text-xl ml-2">TẤT CẢ TÀI LIỆU</div>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-300">
          <thead className="bg-gray-50">
            <tr>
              <th
  scope="col"
  className="px-3 py-2 whitespace-nowrap font-normal text-black-500 uppercase tracking-wider border-r border-gray-300 text-left text-xl"
>
  Số ký hiệu
</th>
<th
  scope="col"
  className="px-3 py-2 whitespace-nowrap font-normal text-black-500 uppercase tracking-wider border-r border-gray-300 text-left text-xl"
>
  Ngày ban hành
</th>
<th
  scope="col"
  className="px-3 py-2 whitespace-nowrap font-normal text-black-500 uppercase tracking-wider border-gray-300 text-center text-xl"
>
  Trích yếu
</th>

            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-300">
            {tableData.map((item, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap text-lg text-gray-900 border-r border-gray-300 border-b">
                  {item.soKyHieu}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-lg text-gray-900 border-r border-gray-300 border-b">
                  {item.ngayBanHanh}
                </td>
              <td className="px-6 py-4 text-lg text-gray-900 border-b border-gray-300">
  <div>{item.trichYeu}</div>
  <a
    href={item.href}
    target="_blank"
    download
    rel="noopener noreferrer"
    className="flex items-center gap-2 text-red-600 mt-2 cursor-pointer hover:underline"
  >
    <FaRegFileAlt className="text-xl" />
    <span>Tài liệu đính kèm</span>
  </a>
</td>


              </tr>
            ))}
          </tbody>
        </table>
        
      </div>
    </div>
  );
}

export default VanBanDetail;
