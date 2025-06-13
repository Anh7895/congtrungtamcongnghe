import { useEffect, useState } from "react";
import { db, collection, getDocs } from "../../../firebase-config";
import { Link } from "react-router-dom";
import { query, orderBy } from "firebase/firestore";
import CardHuongDanHome from "../../huong-dan/CardHuongDanHome";
const POSTS_PER_PAGE = 9;
const MAX_PAGE_BUTTONS = 10;

export default function TaiLieu() {
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

  const formatDate = (date) =>
    date.toLocaleDateString("vi-VN", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
const items = [
    {
      title: "V-Office",
      description: "Hệ thống Quản lý Văn bản điều hành",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32" className="w-8 h-8 text-blue-500 inline-block mr-2 align-middle"><rect x="5" y="5" width="22" height="22" rx="3" stroke="currentColor" strokeWidth="2"/><path stroke="currentColor" strokeWidth="2" d="M8 11h16M8 15h8"/></svg>
      ),
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?fit=crop&w=400&q=80"
    },
    {
      title: "Email",
      description: "Hệ thống thư điện tử công vụ",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32" className="w-8 h-8 text-blue-500 inline-block mr-2 align-middle"><rect x="5" y="7" width="22" height="18" rx="3" stroke="currentColor" strokeWidth="2"/><path stroke="currentColor" strokeWidth="2" d="M7 9l9 8 9-8"/></svg>
      ),
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?fit=crop&w=400&q=80"
    },
    {
      title: "Phần mềm Hộ tịch",
      description: "Hệ thống thông tin đăng ký và quản lý hộ tịch",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32" className="w-8 h-8 text-blue-500 inline-block mr-2 align-middle"><path stroke="currentColor" strokeWidth="2" d="M5 17l11-8 11 8v9a2 2 0 01-2 2H7a2 2 0 01-2-2v-9z"/><path stroke="currentColor" strokeWidth="2" d="M13 28V18h6v10"/></svg>
      ),
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?fit=crop&w=400&q=80"
    },
    
  ];
 return (
  <div className="max-w-full pt-20">
    <div className="flex">
      {/* Nội dung chiếm 3/4 */}
      <div className="w-3/4 pr-4 pl-64">
        <h2 className="text-2xl font-bold mb-4 text-left text-red-600">
          TÀI LIỆU ĐÀO TẠO
        </h2>

        {/* Bài viết đầu tiên */}
        {firstPost && (
          <Link to={`/tai-lieu/${firstPost.id}`} key={firstPost.id} className="group">
            <div className="flex flex-col md:flex-row items-start w-full h-auto overflow-hidden mb-20 cursor-pointer ">
              <div className="w-full md:w-3/5 relative" style={{ height: "400px" }}>
                <img
                  src={firstPost.imageUrl}
                  alt={firstPost.content}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="w-full md:w-2/5    bg-white bg-opacity-60 text-white p-6 flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-2 text-red-600 group-hover:text-sky-600 transition-colors duration-300">
                  {firstPost.content}
                </h3>
                <p className="text-sm text-gray-600 mb-2">
                  Đăng ngày: {formatDate(firstPost.createdAt)}
                </p>
               <p
  className="text-base text-black overflow-y-auto "
  style={{
    maxHeight: "10rem", // giới hạn chiều cao để thanh cuộn hiển thị nếu nội dung dài
    paddingRight: "0.1rem", // tạo khoảng cách để không bị che bởi thanh cuộn
    
  }}
>
  {firstPost.title}
</p>
              </div>
            </div>
          </Link>
        )}

        {/* Các bài viết còn lại */}
{/* Các bài viết còn lại */}
<div className="flex flex-col gap-4 mt-8">
  {otherPosts.map((post) => (
    <Link to={`/tai-lieu/${post.id}`} key={post.id} className="group">
      <div className="bg-white overflow-hidden transition duration-300 cursor-pointer flex flex-row h-auto shadow-md rounded-lg">
        {/* Ảnh bên trái */}
        <div className="w-1/3 relative h-48">
          <img
            src={post.imageUrl}
            alt={post.title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        {/* Nội dung bên phải */}
        <div className="w-2/3 p-4 flex flex-col justify-center">
          <h3 className="text-lg font-semibold text-gray-900 group-hover:text-sky-600 transition-colors duration-300 mb-2">
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

      </div>

      {/* Phần trắng 1/4 bên phải */}
      <div className="w-1/4 space-y-12">
      {items.map((item, index) => (
        <CardHuongDanHome
          key={index} // hoặc dùng id nếu có
          icon={item.icon}
          title={item.title}
          description={item.description}
          image={item.image}
        />
      ))}
      </div>
    </div>
  </div>
);

};


