import React, { useEffect, useState } from 'react';

const CasualShirts = [
"https://i.ibb.co.com/0jSHmCJM/Shirt-1.jpg",
"https://i.ibb.co.com/JMGNt2P/Shirt-12.jpg",
"https://i.ibb.co.com/chX0rFQw/Shirt-11.jpg",
"https://i.ibb.co.com/0jHCDckv/Shirt-10.jpg",
"https://i.ibb.co.com/gZhtT521/Shirt-9.jpg",
"https://i.ibb.co.com/DDMZ2ZzH/Shirt-8.jpg",
"https://i.ibb.co.com/CpXDPcfp/Shirt-7.jpg",
"https://i.ibb.co.com/TMsdhk2W/Shirt-6.jpg",
"https://i.ibb.co.com/fdFdCP3F/Shirt-5.jpg",
"https://i.ibb.co.com/kp21Jfp/Shirt-2.jpg",
"https://i.ibb.co.com/wNfCHgBH/Shirt-3.jpg",
"https://i.ibb.co.com/p6Q1qF3b/Shirt-4.jpg",
];
const CasualShirt = () => {
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
      <h2 className="text-3xl font-bold text-center text-blue-900 mb-10">Casual Shirt Collection</h2>
      <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
        {CasualShirts.map((img, index) => (
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

export default CasualShirt;
