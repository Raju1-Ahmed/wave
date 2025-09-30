import React, { useEffect, useState } from 'react';

const Nightwears = [
"https://i.ibb.co.com/LXJ2GGQv/Night-Wear-1.jpg",
"https://i.ibb.co.com/bgnJWdHk/Night-Wear-2.jpg",
"https://i.ibb.co.com/8gG4DT6m/Night-Wear-3.jpg",
"https://i.ibb.co.com/mPcvt7t/Night-Wear-1.jpg",
"https://i.ibb.co.com/N6PCQYR3/Night-Wear-2.jpg",
"https://i.ibb.co.com/RpvJrhDm/Night-Wear-3.jpg",
"https://i.ibb.co.com/hJc26SDM/Night-Wear-4.jpg",
"https://i.ibb.co.com/4gSjYFH3/Night-Wear-4.jpg",
"https://i.ibb.co.com/Q7h04xxb/Night-Wear-5.jpg",
"https://i.ibb.co.com/q2FTf31/Night-Wear-6.jpg",
"https://i.ibb.co.com/MDMSy0FS/Night-Wear-7.jpg",
];


const Nightwear = () => {
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
      <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
        {Nightwears.map((img, index) => (
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

export default Nightwear;
