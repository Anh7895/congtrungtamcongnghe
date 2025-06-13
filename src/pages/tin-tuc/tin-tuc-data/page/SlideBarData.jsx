// components/Sidebar.jsx
import { Link } from "react-router-dom";

const SlideBarData = ({ posts, formatDate }) => {
  return (
    <div className="hidden lg:block lg:w-1/4 pl-0 ml-0">
      <img
        src="https://media.triumphmotorcycles.co.uk/image/upload/f_auto/q_auto:eco/sitecoremedialibrary/media-library/images/home/hompage%20images/full%20width%20cta/homepage-fwcta-alt-1920x768.jpg"
        alt="Banner"
        className="w-full h-[50px] object-cover rounded-tl-lg rounded-tr-lg"
      />
      <div
        className="border-l pl-0  border-r border-b"
        style={{
          borderLeftWidth: "2px",
          borderRightWidth: "2px",
          borderBottomWidth: "2px",
          borderLeftStyle: "solid",
          borderRightStyle: "solid",
          borderColor: "#3b82f6",
          borderBottomStyle: "solid",
          borderImageSource:
            "repeating-linear-gradient(to bottom, #3b82f6 0, #3b82f6 8px, transparent 8px, transparent 20px)",
          borderImageSlice: 1,
          borderImageRepeat: "round",
        }}
      >
        <div className="flex flex-col gap-4">
          {posts.slice(0, 9).map((post) => (
            <Link to={`/tin-tuc-data/${post.link}`} key={post.stt}>
              <div className="flex items-start gap-3 hover:bg-gray-100 p-2 rounded-lg transition duration-200 cursor-pointer">
                <div className="w-16 h-16 flex-shrink-0 overflow-hidden rounded-md">
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="text-sm font-semibold text-gray-800 line-clamp-2">
                    {post.title}
                  </h4>
                  <p className="text-xs text-gray-500">
                    {formatDate(post.createdAt)}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SlideBarData;
