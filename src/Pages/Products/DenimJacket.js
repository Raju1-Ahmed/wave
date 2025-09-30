import React, { useEffect, useState } from 'react';

const DenimJackets = [
"https://i.ibb.co.com/20ZFRtLw/Denim-Jacket-1.jpg",
"https://i.ibb.co.com/DD6NPypr/Denim-Jacket-3.jpg",
"https://i.ibb.co.com/49xGqnx/Denim-Jacket-2.jpg",
"https://i.ibb.co.com/QFBwxfTV/Denim-Jacket-14.jpg",
"https://i.ibb.co.com/qYPPc36t/Denim-Jacket-13.jpg",
"https://i.ibb.co.com/9mHy2RD9/Denim-Jacket-12.jpg",
"https://i.ibb.co.com/rf48W7nv/Denim-Jacket-10.jpg",
"https://i.ibb.co.com/k2KHXZfy/Denim-Jacket-11.jpg",
"https://i.ibb.co.com/7xqPQtsj/Denim-Jacket-9.jpg",
"https://i.ibb.co.com/vxs59ZQw/Denim-Jacket-8.jpg",
"https://i.ibb.co.com/Y7qPJ010/Denim-Jacket-5.jpg",
"https://i.ibb.co.com/14j7JXf/Denim-Jacket-4.jpg",
"https://i.ibb.co.com/9m3dKcDr/Denim-Jacket-6.jpg",
"https://i.ibb.co.com/JX4P20c/Denim-Jacket-7.jpg",
];

const DenimJacket = () => {
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
      <h2 className="text-3xl font-bold text-center text-blue-900 mb-10">Denim Jacket Collection</h2>
      <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
        {DenimJackets.map((img, index) => (
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

export default DenimJacket;
