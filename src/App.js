import './App.css';
import React, { useEffect, useState } from 'react';
import Header from './Common/Head/Header';
import FlashDeal from './Components/FlashDeal/FlashDeal';
import SlideFlash from './Components/FlashDeal/SlideFlash';
import SlideCard from './Components/SlideCard/SlideCard';
import { db } from './Firebase';
import { doc, getDoc } from "firebase/firestore";
import { Routes, Route } from 'react-router-dom';
import UserPage from './Components/Page/UserPage';

function App() {
  const [documentData, setDocumentData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const docRef = doc(db, "Ecommer", "Iphone");

        const docSnap = await getDoc(docRef);
        const data = docSnap.data();
        setDocumentData(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const products = documentData ? Object.values(documentData) : [];

  return (
    <div>
      <Routes>
       
        <Route path="/profile" element={<UserPage/>} />
     
        <Route
          path="/*"
          element={
            <>
             <Header />
              <SlideCard products={products} />
              <SlideFlash products={products} />
              <FlashDeal />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
