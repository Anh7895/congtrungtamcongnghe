export default function BannerHome() {
  const imageList = [
    "/images/home/home-chu-ky-so.png",
    "/images/home/home-ho-tro-tong-dai.png",
    "/images/home/home-hoi-nghi.png",
        "/images/home/home-dao-tao.png",
            "/images/home/home-bao-tri.png",

  ];

  return (
    <div className="flex flex-col gap-6">
      {imageList.map((src, index) => (
        <div key={index} className="w-full aspect-[16/5]">
          <img
            src={src}
            alt={`Ảnh ${index + 1}`}
            className="w-full h-full object-cover object-center "
          />
        </div>
      ))}
    </div>
  );
}
