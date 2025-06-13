import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { db} from '../../../firebase-config';
import { doc, getDoc } from 'firebase/firestore';
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw"; 
import { FaHome } from "react-icons/fa";
function TinTucDetail() {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const fetchItem = async () => {
      const docRef = doc(db, "posts", id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setItem(docSnap.data());
      } else {
        console.log("No such document!");
      }
    };
    fetchItem();
  }, [id]);

  if (!item) {
    return <div>Loading...</div>;
  }

  return (
    
     <div style={{ margin: "0 auto", maxWidth: "1500px", padding: "0 150px 100px 150px" }}>
    <div style={{ display: "flex" }}>
      <div style={{ flex: 3, paddingRight: "20px" }}>
        {/* TIN TỨC HEADER */}
        <div className="TinTuc flex items-center gap-2 ml-0 mt-3 md:mt-5">
  <div className="rounded-full bg-gradient-to-tr from-blue-500 to-white p-2">
    <FaHome className="text-white text-xl" />
  </div>
  <span className="text-base font-bold text-gray-800">TIN TỨC</span>
</div>

        {/* NỘI DUNG MARKDOWN */}
        <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
          {item.markdown}
        </ReactMarkdown>
<div className='font-bold mt-10 text-right'>Thanh Hà</div>
      </div>

      {/* PHẦN TRỐNG 1/4 */}
      <div style={{ flex: 1 }} />
    </div>
  </div>
  );
}

export default TinTucDetail;

