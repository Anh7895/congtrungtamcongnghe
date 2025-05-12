import { BrowserRouter, Routes, Route } from "react-router-dom";
import ChucNangNhiemVu from "./pages/gioi-thieu/ChucNangNhiemVu";
import TrangChu from "./pages/trang-chu/TrangChu";
import TinTuc from "./pages/tin-tuc/TinTuc";
import DichVu from "./pages/dich-vu/DichVu";
import CoCauToChuc from "./pages/gioi-thieu/CoCauToChuc";
import LichSuPhatTrien from "./pages/gioi-thieu/LichSuPhatTrien";
import LienHe from "./pages/lien-he/LienHe";
import TaiLieu from "./pages/tai-lieu/TaiLieu";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="p-4">
        <Routes>
          <Route path="/" element={<TrangChu />} />
          <Route path="/tin-tuc" element={<TinTuc />} />
          <Route path="/chuc-nang-nhiem-vu" element={<ChucNangNhiemVu />} />
          <Route path="/dich-vu" element={<DichVu />} />
          <Route path="/lich-su-phat-trien" element={<LichSuPhatTrien />} />
          <Route path="/co-cau-to-chuc" element={<CoCauToChuc />} />
          <Route path="/lien-he" element={<LienHe />} />
          <Route path="/tai-lieu" element={<TaiLieu />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
