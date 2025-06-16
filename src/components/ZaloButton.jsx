import zaloIcon from "/icon/icon_zalo.svg";
export default function ZaloButton() {
  const zaloPhone = "0987580094";

  const handleClick = () => {
    // Dùng duy nhất link zalo.me để tự xử lý mở app/web
    window.open(`https://zalo.me/${zaloPhone}`, "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={handleClick}
        className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-full shadow-md transition hover:bg-blue-600"
      >
        <img src={zaloIcon} alt="Zalo" className="w-6 h-6" />
        Chat Zalo
      </button>
    </div>
  );
}
