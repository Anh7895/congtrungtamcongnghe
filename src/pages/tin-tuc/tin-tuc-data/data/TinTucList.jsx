import { CongPhapLuatQuocGia } from "./markdown-page/CongPhapLuatQuocGia";
import { markdownFPT } from "./markdown-page/markdownFPT";
import { NhungDauAnHanhTrinhChuyenDoiSo } from "./markdown-page/NhungDauAnHanhTrinhChuyenDoiSo";

const tinTucList = [
 
  {
    imageUrl: 'https://data-dx.moj.gov.vn/Image?path=thunga/2025/6/4//026-toan-canh20250603001125%20(1).png&w=1200&mode=none',
    date: '04',
    month: 'Th6',
    title: 'Tập đoàn FPT quyết tâm đồng hành cùng Bộ Tư pháp trong triển khai các nhiệm vụ chuyển đổi số',
    description: 'Đây là cam kết của Chủ tịch Tập đoàn FPT Trương Gia Bình tại buổi làm việc giữa Bộ Tư pháp và Tập đoàn FPT ngày 02/6/2025 nhằm tiếp tục triển khai các giải pháp để cụ thể hóa các nhiệm vụ được giao tại Nghị quyết số 57-NQ/TW ngày 22/12/2024 của Bộ Chính trị về đột phá phát triển khoa học, công nghệ, đổi mới sáng tạo và chuyển đổi số quốc gia (Nghị quyết số 57-NQ/TW). Đồng chí Nguyễn Hải Ninh, Bí thư Đảng ủy, Bộ trưởng Bộ Tư pháp, Trưởng Ban Chỉ đạo của Bộ Tư pháp về phát triển khoa học, công nghệ, đổi mới sáng tạo, chuyển đổi số và Đề án 06 chủ trì buổi làm việc.',
    // link: '/tin-tuc/fpt-dong-hanh-trien-khai-cac-nhiem-vu-cds',
        link: 'fpt-dong-hanh-trien-khai-cac-nhiem-vu-cds',
    stt:'3',
    markdown: markdownFPT,
    tacgia:"Thu Hà "
  },
  {
    imageUrl: 'https://data-dx.moj.gov.vn/Image?path=thunga/2025/5/31//310525%20cong%20pl7.jpg&w=1200&mode=none',
    date: '31',
    month: 'Th5',
    title: 'Thủ tướng Phạm Minh Chính khai trương Cổng Pháp luật quốc gia',
    description: 'Sáng 31/5, Thủ tướng Phạm Minh Chính đã dự Lễ khai trương Cổng Pháp luật quốc gia tại địa chỉ phapluat.gov.vn. Đây sẽ là một trong những bước khởi đầu cho một thời kỳ mới của công cuộc xây dựng và thi hành pháp luật với tư duy mới cùng sự gắn bó, đồng hành của người dân, doanh nghiệp.',
    // link: '/tin-tuc/thu-tuong-pham-minh-chinh-khai-truong-cong-phap-luat-quoc-gia',
        link: 'thu-tuong-pham-minh-chinh-khai-truong-cong-phap-luat-quoc-gia',

    stt:'2',
        markdown: CongPhapLuatQuocGia,
        tacgia:"Phương Mai"
  },
   {
    imageUrl: 'https://cdn.nhandan.vn/images/92ead5b74e5da387e062cd350a9d869f9a8d35d9eda35ae215dd78e37aad2d5a70d01c51bbc24512db57d4251b66ea0c10ca6386f8d3032731c06bee208e48c3e94793eed85355c4fce7fc59106ff882916c59155e9d2a01be61f6ea02b8af51/nham-ngoc-hien-thu-nga-7082-7789-2710-9817.jpg',
    date: '30',
    month: 'Th5',
    title: 'Những dấu ấn trên hành trình chuyển đổi số',
    description: 'Thời gian qua, Bộ, ngành Tư pháp luôn chú trọng, chủ động ứng dụng công nghệ số vào trong công tác chuyên môn để nâng cao hiệu quả hoạt động. Những nỗ lực bền bỉ ấy đang được đền đáp bằng chính sự hài lòng của người dân, doanh nghiệp trong quá trình thực hiện các thủ tục hành chính-tư pháp.',
    // link: '/tin-tuc/nhung-dau-an-tren-hanh-trinh-chuyen-doi-so',
        link: 'nhung-dau-an-tren-hanh-trinh-chuyen-doi-so',

    stt:'1',
        markdown: NhungDauAnHanhTrinhChuyenDoiSo,
        tacgia:"THU HẰNG - HƯƠNG NGUYÊN (Theo Báo Nhân dân Điện tử)"
  },
];

export default tinTucList;
