import NavPage from "../../components/NavPage";
import ButtonDichVu from "./component/ButtonDichVu";

export default function TuVan(){
    return(
        <div>
            <NavPage
                    title="TƯ VẤN"
                    homeText="Trang chủ"
                    homeHref="/"
                    currentPageText="Cơ cấu tổ chức"
                    menuText={"Dịch vụ"}
                    menuHref={"/dich-vu/tu-van"}
                  />
                  <div className="p-6 bg-white  max-w-3xl mx-auto my-8 font-sans">
      <h2 className="text-xl font-bold text-black mb-4">
        Trung tâm Công nghệ và Dịch vụ Số tư pháp cung cấp dịch vụ tư vấn:
      </h2>
      <ul className="list-none space-y-3 text-gray-800">
        <li className="flex items-start">
          <span className="text-black font-bold mr-2">-</span>
          <p>Tư vấn đầu tư dự án, hoạt động ứng dụng công nghệ thông tin, chuyển đổi số;</p>
        </li>
        <li className="flex items-start">
          <span className="text-black font-bold mr-2">-</span>
          <p>Tư vấn quản lý dự án, kế hoạch thuê dịch vụ công nghệ thông tin;</p>
        </li>
        <li className="flex items-start">
          <span className="text-black font-bold mr-2">-</span>
          <p>Tư vấn an toàn thông tin mạng;</p>
        </li>
        <li className="flex items-start">
          <span className="text-black font-bold mr-2">-</span>
          <p>Tư vấn xây dựng chiến lược, kế hoạch, chương trình, đề án ứng dụng công nghệ thông tin, chuyển đổi số trong cơ quan nhà nước</p>
        </li>
        <li className="flex items-start">
          <span className="text-black font-bold mr-2">-</span>
          <p>Dịch vụ tư vấn, đào tạo, tập huấn, bồi dưỡng, hội nghị, hội thảo, tọa đàm về ứng dụng công nghệ thông tin, chuyển đổi số;</p>
        </li>
        <li className="flex items-start">
          <span className="text-black  mr-2">e)</span>
          <p>Thực hiện cung cấp dịch vụ công do cơ quan Nhà nước giao nhiệm vụ, đặt hàng hoặc đấu thầu đối với dịch vụ sự nghiệp công mà Trung tâm đủ năng lực thực hiện;</p>
        </li>
        <li className="flex items-start">
          <span className="text-black  mr-2">g)</span>
          <p>Cung cấp các dịch vụ về ứng dụng công nghệ thông tin, chuyển đổi số và các dịch vụ khác phù hợp với chức năng nhiệm vụ của của Trung tâm theo quy định của pháp luật.</p>
        </li>
      </ul>
    </div>
            <div className="flex justify-center items-center mb-10">
              <ButtonDichVu />
            </div>  
        </div>
    );
}