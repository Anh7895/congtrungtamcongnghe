import GridCard from "./components/GridCard";

export default function TaiLieuHome() {
  return (
    <div className="flex justify-start gap-0 ml-96">
      {/* ảnh sát lề trái */}
      <div className="">
 <img
        src="images\home\background-tai-lieu-home.png"
       
        alt="Mô tả ảnh"
        className=" h-[350px] object-contain"
      />
      </div>
     

      <div className="ml-10 justify-center mt-10">
        <GridCard />
      </div>
    </div>
  );
}


