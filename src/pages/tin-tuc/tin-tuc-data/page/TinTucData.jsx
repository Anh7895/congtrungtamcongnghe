import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import tinTucList from "../data/TinTucList";
import SlideBarData from "./SlideBarData";

const POSTS_PER_PAGE = 9;
const MAX_PAGE_BUTTONS = 10;

const TinTucData = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const sortedPosts = [...tinTucList].sort((a, b) => b.stt - a.stt);
    const postsWithDate = sortedPosts.map((item) => ({
      ...item,
      createdAt: new Date(), // Hoặc bạn có thể parse từ date+month nếu cần
    }));
    setPosts(postsWithDate);
  }, []);

  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);
  const startIndex = currentPage * POSTS_PER_PAGE;
  const selectedPosts = posts.slice(startIndex, startIndex + POSTS_PER_PAGE);

  const firstPost = selectedPosts[0];
  const gridPosts = selectedPosts.slice(1, 4);
  const listPosts = selectedPosts.slice(4);

  const formatDate = (date) =>
    date.toLocaleDateString("vi-VN", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });

  const renderPaginationButtons = () => {
    const startPage = Math.max(0, currentPage - Math.floor(MAX_PAGE_BUTTONS / 2));
    const endPage = Math.min(totalPages - 1, startPage + MAX_PAGE_BUTTONS - 1);

    return [...Array(endPage - startPage + 1)].map((_, index) => {
      const pageNumber = startPage + index;
      return (
        <button
          key={pageNumber}
          onClick={() => setCurrentPage(pageNumber)}
          className={`px-3 py-1 mx-1 text-sm rounded-md ${
            pageNumber === currentPage
              ? "bg-indigo-600 text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          {pageNumber + 1}
        </button>
      );
    });
  };

  return (
    <div className="flex max-w-[1300px] mx-auto px-4 pt-10">
      <div className="w-full lg:w-3/4">
        <div className="TinTuc flex items-center gap-2 ml-0 mb-10">
          <div className="rounded-full bg-gradient-to-tr from-blue-500 to-white p-2">
            <FaHome className="text-white text-xl" />
          </div>
          <span className="text-base font-bold text-gray-800">TIN TỨC</span>
        </div>

        {/* Bài viết đầu tiên */}
        {firstPost && (
          <Link to={firstPost.link} key={firstPost.stt}>
            <div className="flex flex-col md:flex-row items-start w-full h-auto overflow-hidden mb-20 cursor-pointer">
              <div className="w-full md:w-1/2 relative" style={{ height: "400px" }}>
                <img
                  src={firstPost.imageUrl}
                  alt={firstPost.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="w-full md:w-1/2 bg-white bg-opacity-60 text-white p-6 flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-2 text-black">{firstPost.title}</h3>
                <p className="text-sm text-gray-600 mb-2">
                  Đăng ngày: {formatDate(firstPost.createdAt)}
                </p>
                <p
                  className="text-base text-black"
                  style={{
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: 4,
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {firstPost.description}
                </p>
              </div>
            </div>
          </Link>
        )}

        {/* Các bài viết tiếp theo */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
          {gridPosts.map((post) => (
            <Link to={post.link} key={post.stt}>
              <div className="bg-white overflow-hidden transition duration-300 cursor-pointer flex flex-col h-full">
                <div className="relative w-full h-48">
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 flex flex-col flex-grow">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {post.title}
                  </h3>
                  <p
                    className="text-sm text-gray-700"
                    style={{
                      display: "-webkit-box",
                      WebkitBoxOrient: "vertical",
                      WebkitLineClamp: 3,
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {post.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* List view */}
        <div className="flex flex-col gap-6 mt-8">
          {listPosts.map((post) => (
            <Link to={post.link} key={post.stt}>
              <div className="flex flex-col md:flex-row items-start bg-white shadow-md rounded-lg overflow-hidden cursor-pointer hover:shadow-lg transition duration-300">
                <div className="w-full md:w-1/3 h-48 relative">
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <div className="w-full md:w-2/3 p-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-500 mb-2">
                    Đăng ngày: {formatDate(post.createdAt)}
                  </p>
                  <p
                    className="text-base text-gray-700"
                    style={{
                      display: "-webkit-box",
                      WebkitBoxOrient: "vertical",
                      WebkitLineClamp: 3,
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {post.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        
      </div>

      {/* Sidebar */}
      <SlideBarData posts={posts} formatDate={formatDate}/>
    </div>
  );
};

export default TinTucData;
