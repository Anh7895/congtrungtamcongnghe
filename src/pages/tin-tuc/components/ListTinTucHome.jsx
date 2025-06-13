  import tinTucList from "../tin-tuc-data/data/TinTucList";
  import CardTinTucHome from "./CardTinTucHome";

 export default function ListTinTucHome() {
  // Lấy 3 tin có stt lớn nhất
  const top3TinTuc = [...tinTucList]
    .sort((a, b) => Number(b.stt) - Number(a.stt)) // Sắp xếp giảm dần theo stt
    .slice(0, 3); // Lấy 3 phần tử đầu tiên

  return (
    <div className="flex flex-wrap justify-center gap-6">
      {top3TinTuc.map((tinTuc, index) => (
        <div
          key={index}
          className="w-full sm:w-1/2 lg:w-1/3 max-w-[400px]"
        >
          <CardTinTucHome {...tinTuc} />
        </div>
      ))}
    </div>
  );
}