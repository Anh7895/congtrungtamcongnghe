import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { db} from '../../firebase-config';
import { doc, getDoc } from 'firebase/firestore';
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw"; 
function TaiLieuDetail() {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const fetchItem = async () => {
      const docRef = doc(db, "tailieu", id);
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
    
    <div style={{ margin: "0 auto", maxWidth: "1500px", padding: "0 20px 100px " }}> 
          <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
            {item.markdown}
          </ReactMarkdown>
        </div>
  );
}

export default TaiLieuDetail;

