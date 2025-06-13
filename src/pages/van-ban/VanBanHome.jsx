import React from 'react';

function VanBanHome() {
  const tableData = [
    {
      soKyHieu: '665/QĐ-BTP',
      ngayBanHanh: '26/02/2025',
      trichYeu: 'Quy định chức năng, nhiệm vụ, quyền hạn và cơ cấu tổ chức của Cục Công nghệ thông tin',
    },
    {
      soKyHieu: '2595/QĐ-BTP',
      ngayBanHanh: '31/12/2024',
      trichYeu: 'Ứng dụng công nghệ thông tin, chuyển đổi số, bảo đảm an toàn thông tin, an ninh mạng của Bộ, Ngành Tư pháp năm 2025',
    },
    {
      
      soKyHieu: '05/KH-CNTT',
      ngayBanHanh: '06/05/2024',
      trichYeu: 'Tổ chức triển khai diễn tập thực chiến bảo đảm an toàn thông tin mạng tại Bộ Tư pháp năm 2024',
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center  bg-white mb-5 md:mb-20 ml-10 mr-10">
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        
        <table className="min-w-full divide-y divide-gray-300 ">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xl font-bold text-black-500 uppercase tracking-wider border-r border-gray-300"
              >
                Số ký hiệu
                <br />
                Ngày ban hành
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xl   text-center font-bold text-black-500 uppercase tracking-wider border-r border-gray-300 "
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
                  <br />
                  {item.ngayBanHanh}
                </td>
                <td className="px-6 py-4 text-lg text-gray-900 border-b border-gray-300">{item.trichYeu}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="px-6 py-3 bg-gray-50 text-gray-700 text-lg text-center">
  <a href="/van-ban-detail" className="text-blue-600 hover:underline">
    Xem thêm
  </a>
</div>
      </div>
    </div>
  );
}

export default VanBanHome;