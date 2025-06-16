  import { BrowserRouter, Routes, Route } from "react-router-dom";
  import "slick-carousel/slick/slick.css";
  import "slick-carousel/slick/slick-theme.css";
  import ChucNangNhiemVu from "./pages/gioi-thieu/ChucNangNhiemVu";
  import TrangChu from "./pages/trang-chu/TrangChu";
  import DichVu from "./pages/dich-vu/DichVu";
  import CoCauToChuc from "./pages/gioi-thieu/CoCauToChuc";
  import LichSuPhatTrien from "./pages/gioi-thieu/LichSuPhatTrien";
  import LienHe from "./pages/lien-he/LienHe";
  import Navbar from "./components/Navbar";
  import Footer from "./components/Footer";
  import TuVan from "./pages/dich-vu/TuVan";
  import KiemThu from "./pages/dich-vu/KiemThu";
  import HoTro from "./pages/dich-vu/HoTro";
  import XayDung from "./pages/dich-vu/XayDung";
import { FaAngleDoubleUp } from "react-icons/fa";
import { LuPhoneCall } from "react-icons/lu";
import DarkModeToggle from "./components/DarkModeToggle";
import TaiLieu from "./pages/tai-lieu/components/TaiLieu";
import TaiLieuDetail from "./pages/tai-lieu/TaiLieuDetail";
import ScrollToTop from "./pages/banner/ScrollToTop ";
import { BrowserRouter as Router } from "react-router-dom";
import VanBanDetail from "./pages/van-ban/VanBanDetail";
import TinTucDetail from "./pages/tin-tuc/tin-tuc-firebase/TinTucDetail";
import TinTuc from "./pages/tin-tuc/tin-tuc-firebase/TinTuc";
import TinTucData from "./pages/tin-tuc/tin-tuc-data/page/TinTucData";
import TinTucDataDetail from "./pages/tin-tuc/tin-tuc-data/page/TinTucDataDetail";
import Exel from "./pages/exel/Exel";
import TimHieuThem from "./pages/gioi-thieu/TimHieuThem";
import GopExel from "./pages/exel/GopExel";
import Markdown from "./pages/markdown/Markdown";
import ZaloButton from "./components/ZaloButton";

  function App() {
    return (
      <BrowserRouter>
       <ScrollToTop/>
        <div className="bg-white dark:bg-gray-900 text-black dark:text-white min-h-screen transition-colors duration-300">

        <Navbar />
        <div className="pt-10 md:pt-40">
          <Routes>
            <Route path="/" element={<TrangChu />} />
            <Route path="/tin-tuc" element={<TinTuc />} />


            <Route path="/gop" element={<GopExel />} />
            <Route path="/mk" element={<Markdown />} />

            
 <Route path="/gioi-thieu" element={<TimHieuThem />} />
            {/* <Route path="/exel" element={<Exel />} /> */}
            <Route path="/tin-tuc-data" element={<TinTucData />} />
        <Route path="/tin-tuc-data/:link" element={<TinTucDataDetail />} />

            <Route path="/tin-tuc/:id" element={<TinTucDetail />} />
            <Route path="/gioi-thieu/chuc-nang-nhiem-vu" element={<ChucNangNhiemVu />} />
             <Route path="/gioi-thieu/lich-su-phat-trien" element={<LichSuPhatTrien />} />
            <Route path="/dich-vu" element={<DichVu />} />
            <Route path="/dich-vu/tu-van" element={<TuVan />} />
            <Route path="/dich-vu/kiem-thu" element={<KiemThu />} />
            <Route path="/dich-vu/ho-tro" element={<HoTro />} />
            <Route path="/dich-vu/xay-dung" element={<XayDung />} />
            <Route path="/lich-su-phat-trien" element={<LichSuPhatTrien />} />
            <Route path="/gioi-thieu/co-cau-to-chuc" element={<CoCauToChuc />} />
            <Route path="/lien-he" element={<LienHe />} />
            <Route path="/tai-lieu" element={<TaiLieu />} 
            
            />
            <Route path="/van-ban-detail" element={<VanBanDetail />} />
<Route path="/tai-lieu/:id" element={<TaiLieuDetail />} />
          </Routes>
        </div>
        <div className="fixed bottom-64  right-4 ">
           <ZaloButton/>
        </div>
        
        <div className="fixed bottom-48  right-4 ">
           <DarkModeToggle/>
        </div>
        
        
         <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-24 right-4 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg z-50"
          aria-label="Kéo lên đầu trang"
        >
          <FaAngleDoubleUp size={24} />
        </button>


 <button
          onClick={() => window.location.href = "tel: 02462739719"} // thay số điện thoại vào đây
          className="fixed bottom-8 right-4 bg-green-600 hover:bg-green-700 text-white p-3 rounded-full shadow-lg z-50"
          aria-label="Gọi điện thoại"
        >
          <LuPhoneCall size={24} />
        </button>
        <Footer/>
        </div>
      </BrowserRouter>
    );
  }

  export default App;
