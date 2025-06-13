import CardDVHome from "./component/CardDVHome";
import ListCardDVHome from "./component/ListCardDVHome";

export default function DichVuHome() {
  return (
    <div className="relative w-full">
      {/* Ảnh nền */}
<img
  src="/images/home/background-dich-vu.png"
  alt="Dịch Vụ"
  className="w-full h-auto max-h-[500px]" // chiều cao tự động theo ảnh, tối đa 500px
/>

      {/* Ảnh góc phải trên cùng */}
      <img
        src="\gif\gif-robot.gif" // <-- thay bằng đường dẫn ảnh của m
        alt="Decor"
        className="absolute top-0 right-0 w-20 h-20 md:w-64 md:h-40 rotate-0"
        style={{ transform: 'scaleX(-1)' }}
      />

      {/* Tiêu đề */}
      <h1 className="absolute top-0 md:top-10  left-1/2 transform -translate-x-1/2 text-white text-xl md:text-4xl font-extrabold  font-openSansCondensed p-4 z-10">
        DỊCH VỤ
      </h1>

      {/* Danh sách Card */}
      <div className="absolute inset-0 flex justify-center items-center z-20 top-5 md:top-10">
        <ListCardDVHome />
      </div>
    </div>
  );
}
