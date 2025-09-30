<<<<<<< HEAD
import React, { useEffect, useState } from 'react';

const kidsProducts = [
"https://i.ibb.co.com/F4zg1B3t/Kidswear-3.jpg",
"https://i.ibb.co.com/2bjMHBn/Kidswear-2.jpg",
"https://i.ibb.co.com/3YMnKkHX/Kidswear-1.jpg",
"https://i.ibb.co.com/4ZDwG9S5/Kidswear-10.jpg",
"https://i.ibb.co.com/zqgFYrk/Kidswear-9.jpg",
"https://i.ibb.co.com/MygdwDkD/Kidswear-8.jpg",
"https://i.ibb.co.com/sdgSDF3b/Kidswear-7.jpg",
"https://i.ibb.co.com/4ZDwG9S5/Kidswear-10.jpg",
"https://i.ibb.co.com/93gqxcqt/Kidswear-5.jpg",
"https://i.ibb.co.com/Kz0CKnF4/Kidswear-4.jpg",
"https://i.ibb.co.com/ZRyqH0Pw/Kidswear-1.jpg",
=======
import React from 'react';

const kidsProducts = [
"https://i.ibb.co.com/rfkdhc2b/ocean-Kidsimage-2.png",
"https://i.ibb.co.com/pjJH65KC/ocean-Kidsimage-3.png",
"https://i.ibb.co.com/R4gjzs6K/ocean-Kidsimage-4.png",
"https://i.ibb.co.com/HDFmjXyZ/ocean-Kidsimage-5.png",
"https://i.ibb.co.com/LFZn0bb/ocean-Kidsimage-6.png",
"https://i.ibb.co.com/ZptsnqMm/ocean-Kidsimage-7.png",
"https://i.ibb.co.com/KxnG10Jd/ocean-Kidsimage-8.png",
"https://i.ibb.co.com/HfpKP8c2/ocean-Kidsimage-9.png",
"https://i.ibb.co.com/QvNSdKCz/ocean-Kidsimage-10.png",
"https://i.ibb.co.com/FLfpXRbx/ocean-Kidsimage-1.png",
>>>>>>> cc73c8b (first commit)
];
// "https://i.ibb.co.com/rfkdhc2b/ocean-Kidsimage-2.png",
// "https://i.ibb.co.com/pjJH65KC/ocean-Kidsimage-3.png",
// "https://i.ibb.co.com/R4gjzs6K/ocean-Kidsimage-4.png",
// "https://i.ibb.co.com/HDFmjXyZ/ocean-Kidsimage-5.png",
// "https://i.ibb.co.com/LFZn0bb/ocean-Kidsimage-6.png",
// "https://i.ibb.co.com/ZptsnqMm/ocean-Kidsimage-7.png",
// "https://i.ibb.co.com/KxnG10Jd/ocean-Kidsimage-8.png",
// "https://i.ibb.co.com/HfpKP8c2/ocean-Kidsimage-9.png",
// "https://i.ibb.co.com/QvNSdKCz/ocean-Kidsimage-10.png",
// "https://i.ibb.co.com/FLfpXRbx/ocean-Kidsimage-1.png",
const Kids = () => {
<<<<<<< HEAD
  const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const timer = setTimeout(() => setLoading(false), 1500);
      return () => clearTimeout(timer);
    }, []);
  
    if (loading) {
      return (
        <>
          {/* Inline animation style inside JSX */}
          <style>
            {`
              @keyframes zoomInOut {
                0%, 100% {
                  transform: scale(1);
                }
                50% {
                  transform: scale(1.2);
                }
              }
  
              .zoom-animation {
                animation: zoomInOut 2s ease-in-out infinite;
              }
            `}
          </style>
  
          <div className="flex justify-center items-center h-screen bg-white">
            <img
              src="https://i.ibb.co.com/Wpq6QZkN/Ocean-Wave-Logo.png"
              alt="Loading..."
              className=" zoom-animation"
            />
          </div>
        </>
      );
    }
  return (
    <main className="text-gray-800 bg-white min-h-screen py-12 px-4 md:px-8">
      <h2 className="text-3xl font-bold text-center text-blue-900 mb-10">Kids Wear Collection</h2>
=======
  return (
    <main className="text-gray-800 bg-white min-h-screen py-12 px-4 md:px-8">
      <h2 className="text-3xl font-bold text-center text-blue-900 mb-10">Kidswear Collection</h2>
>>>>>>> cc73c8b (first commit)
      <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
        {kidsProducts.map((img, index) => (
          <div key={index} className="break-inside-avoid overflow-hidden rounded-lg shadow-lg group">
            <img
              src={img}
              alt={`Kidswear ${index + 1}`}
              className="w-full h-auto object-cover             
              "
            />
          </div>
        ))}
      </div>
    </main>
  );
};

export default Kids;
