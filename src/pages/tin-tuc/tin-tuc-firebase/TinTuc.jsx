import { useEffect, useState } from "react";
import { db, collection, getDocs } from "../../../firebase-config";
import { Link } from "react-router-dom";
import { query, orderBy } from "firebase/firestore";

const POSTS_PER_PAGE = 9;
const MAX_PAGE_BUTTONS = 10;
import { FaHome } from "react-icons/fa";

const TinTuc = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const q = query(collection(db, "tailieu"), orderBy("stt", "desc")); // Sắp xếp giảm dần theo 'stt'
        const querySnapshot = await getDocs(q);
        const postData = querySnapshot.docs.map((doc) => {
          const docData = doc.data();
          return {
            id: doc.id,
            ...docData,
            createdAt: docData.createdAt?.toDate?.() || new Date(),
          };
        });
        setPosts(postData);
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu:", error);
      }
    };
  
    fetchData();
  }, []);
  
  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);
  const startIndex = currentPage * POSTS_PER_PAGE;
  const selectedPosts = posts.slice(startIndex, startIndex + POSTS_PER_PAGE);

  const firstPost = selectedPosts[0];
  const otherPosts = selectedPosts.slice(1);
  const gridPosts = selectedPosts.slice(1, 4); // 3 item tiếp theo
const listPosts = selectedPosts.slice(4); // còn lại
  const renderPaginationButtons = () => {
    const startPage = Math.max(
      0,
      currentPage - Math.floor(MAX_PAGE_BUTTONS / 2)
    );
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

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "posts")); // hoặc tên collection bạn có
      const postData = querySnapshot.docs.map((doc) => {
        const docData = doc.data();
        return {
          id: doc.id,
          ...docData,
          createdAt: docData.createdAt?.toDate?.() || new Date(),
        };
      });
      setPosts(postData);
    };
  
    fetchData();
  }, []);
  const formatDate = (date) =>
    date.toLocaleDateString("vi-VN", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  return (
    <div className="flex max-w-[1300px] mx-auto px-4 pt-10">
  {/* Nội dung chiếm 3/4 */}
  <div className="w-full lg:w-3/4">
<div className="TinTuc flex items-center gap-2 ml-0 mb-10">
  <div className="rounded-full bg-gradient-to-tr from-blue-500 to-white p-2">
    <FaHome className="text-white text-xl" />
  </div>
  <span className="text-base font-bold text-gray-800">TIN TỨC</span>
</div>
    {/* Bài viết đầu tiên */}
    {firstPost && (
      <Link to={`/tin-tuc/${firstPost.id}`} key={firstPost.id}>
        <div className="flex flex-col md:flex-row items-start w-full h-auto overflow-hidden mb-20 cursor-pointer">
          <div className="w-full md:w-1/2 relative" style={{ height: "400px" }}>
            <img
              src={firstPost.imageUrl}
              alt={firstPost.content}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div className="w-full md:w-1/2 bg-white bg-opacity-60 text-white p-6 flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-2 text-black">{firstPost.content}</h3>
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
              {firstPost.title}
            </p>  
          </div>
        </div>
      </Link>
    )}

    {/* Các bài viết còn lại */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-6">
  {gridPosts.map((post) => (
    <Link to={`/tin-tuc/${post.id}`} key={post.id}>
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
            {post.content}
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
            {post.title}
          </p>
        </div>
      </div>
    </Link>
  ))}
</div>

{/* Các bài viết sau cùng: mỗi item 1 hàng - CUSTOM */}
<div className="flex flex-col gap-6 mt-8">
  {listPosts.map((post) => (
    <Link to={`/tin-tuc/${post.id}`} key={post.id}>
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
            {post.content}
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
            {post.title}
          </p>
        </div>
      </div>
    </Link>
  ))}
</div>

   
  </div>

  {/* Phần trắng chiếm 1/4 */}
  {/* Sidebar 1/4 bên phải */}
<div className="hidden lg:block lg:w-1/4 pl-4 ml-5 " >
<img 
    src="https://media.triumphmotorcycles.co.uk/image/upload/f_auto/q_auto:eco/sitecoremedialibrary/media-library/images/home/hompage%20images/full%20width%20cta/homepage-fwcta-alt-1920x768.jpg" 
    alt="Banner" 
    className="w-full h-[50px] object-cover  rounded-tl-lg rounded-tr-lg"
  />
  <div
    className="border-l pl-4 border-r border-b "
    style={{
    borderLeftWidth: '2px',
    borderRightWidth: '2px',
    borderBottomWidth: '2px',
    borderLeftStyle: 'solid',
    borderRightStyle: 'solid',
    borderColor: '#3b82f6',
        borderBottomStyle: 'solid',

    borderImageSource: 'repeating-linear-gradient(to bottom, #3b82f6 0, #3b82f6 8px, transparent 8px, transparent 20px)',
    borderImageSlice: 1,
    borderImageRepeat: 'round',
  }}
  >
    <div className="flex flex-col gap-4">
      {posts.slice(0, 9).map((post) => (
        <Link to={`/tin-tuc/${post.id}`} key={post.id}>
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
                {post.content}
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


</div>

  );
};

export default TinTuc;


// import { FaHome } from "react-icons/fa";

// export default function TinTuc() {
//   return (
//     <div className="TinTuc flex items-center gap-2 mx-5 sm:mx-10 md:mx-20 lg:mx-40 xl:mx-50 2xl:mx-70 mt-3 md:mt-5">
//       <div className="rounded-full bg-gradient-to-tr from-blue-500 to-white p-2">
//         <FaHome className="text-white text-xl" />
//       </div>
//       <span className="text-base font-bold text-gray-800">TIN TỨC</span>
//     </div>
//   );
// }
