export default function NavPage({ title, homeText, homeHref, currentPageText, menuHref, menuText }) {
  return (
    <div
      className="bg-[#1a0f3d] w-full text-white"
      style={{ backgroundImage: "url('/pattern.svg')", backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl font-bold mb-4 mt-10">{title}</h1>
        <p className="text-lg mb-5">
          <a href={homeHref} className="text-gray-300 hover:text-white">
            {homeText}
          </a>
          {menuText && (
            <>
              <span className="mx-2">»</span>
              <a href={menuHref} className="text-gray-300 hover:text-white">
                {menuText}
              </a>
            </>
          )}
          <span className="mx-2 text-gray-300">»</span>
          <span className="mx-2 text-gray-300">{currentPageText}</span>
        </p>
      </div>
    </div>
  );
}
