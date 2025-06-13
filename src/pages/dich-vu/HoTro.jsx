import NavPage from "../../components/NavPage";
import ButtonDichVu from "./component/ButtonDichVu";

export default function HoTro(){
    return(
        <div>
            <NavPage
                    title="HỖ TRỢ"
                    homeText="Trang chủ"
                    homeHref="/"
                    currentPageText="Cơ cấu tổ chức"
                    menuText={"Dịch vụ"}
                    menuHref={"/dich-vu/tu-van"}
                  />
                  <div className="p-6 bg-white  max-w-3xl mx-auto my-8 font-sans">
      <h2 className="text-xl font-bold text-black mb-4">
        Trung tâm Công nghệ và Dịch vụ số Tư pháp cung cấp dịch vụ hỗ trợ:
      </h2>
      <ul className="list-none space-y-3 text-gray-800">
        <li className="flex items-start">
          <span className="text-black font-bold mr-2">-</span>
          <p>quản trị, vận hành, hỗ trợ sử dụng hệ thống thông tin, cơ sở dữ liệu, phần mềm ứng dụng, hội nghị truyền hình trực tuyến;
</p>
        </li>
        
      </ul>
    </div>
<div className="flex justify-center items-center mb-10">
  <ButtonDichVu />
</div>        </div>
    );
}