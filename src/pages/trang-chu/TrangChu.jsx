import { Link } from 'react-router-dom';
import CardTinTucHome from '../tin-tuc/components/CardTinTucHome';
import ListTinTucHome from '../tin-tuc/components/ListTinTucHome';
import DichVuHome from '../dich-vu/DichVuHome';
import VanBanHome from '../van-ban/VanBanHome';
import HuongDanHome from '../huong-dan/HuongDanHome';
import CardHomeTaiLieu from '../tai-lieu/components/CardHomeTaiLieu';
import ThuVienSoHome from '../thu-vien-so/ThuVienSoHome';
import BannerHome from '../banner/BannerHome';
import TaiLieu from '../tai-lieu/TaiLieuHome';
import BannerHomeNew from '../banner/BannerHomeNew';
import TaiLieuHome from '../tai-lieu/TaiLieuHome';
import TinTucData from '../tin-tuc/tin-tuc-data/page/TinTucData';

export default function TrangChu() {
   
  return (
    <div className="relative">
      <BannerHomeNew/>

      {/* Text phía dưới ảnh */}
      
       <div className="text-xl mt-5 md:mt-20 md:text-4xl  mb-5 md:mb-15 text-center text-blue-900 font-extrabold  font-openSansCondensed mt-5 md:mt-15   dark:text-white">
        TIN HOẠT ĐỘNG
      </div>
       
     
      <ListTinTucHome/>
      <div className="flex justify-center">
  <Link to="/tin-tuc-data">
    <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mt-10 mb-10">
      Xem thêm
    </button>
  </Link>
</div>
  <DichVuHome/>

<div className=" text-blue-900 py-4 text-center text-xl md:text-4xl font-extrabold  font-openSansCondensed text-xl md:text-4xl mb-5 md:mb-10 mt-5 md:mt-20 ">
          VĂN BẢN CÔNG NGHỆ THÔNG TIN
        </div>
<VanBanHome/>
<HuongDanHome/>
<div className=" text-blue-900 py-4 text-center font-extrabold  font-openSansCondensed text-xl md:text-4xl mb-5 md:mb-10 mt-5 md:mt-20">
TÀI LIỆU ĐÀO TẠO        </div>
<div className='pb-24'> 
  
<TaiLieuHome/>
</div>

  <ThuVienSoHome/>
<div className='pb-20 bg-white'></div>
    </div>
  );
}
