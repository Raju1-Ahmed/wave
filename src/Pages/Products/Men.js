import React, { useEffect, useState } from 'react';

const Mens = [
"https://i.ibb.co.com/Gv9trqfq/Mens-Wear-7.jpg",
"https://i.ibb.co.com/Fbb1Pxfh/Mens-Wear-6.jpg",
"https://i.ibb.co.com/FLQxm7qM/Mens-Wear-5.jpg",
"https://i.ibb.co.com/gQLV9Zm/Mens-Wear-8.jpg",
"https://i.ibb.co.com/1JMLyQHG/Mens-Wear-9.jpg",
"https://i.ibb.co.com/3ydt9NPd/Mens-Wear-10.jpg",
"https://i.ibb.co.com/m5zq1kdj/Mens-Wear-11.jpg",
"https://i.ibb.co.com/BHQg66HR/Mens-Wear-1.jpg",
"https://i.ibb.co.com/zhjxBsgy/Mens-Wear-2.jpg",
"https://i.ibb.co.com/C3Lhszp1/Mens-Wear-3.jpg",
"https://i.ibb.co.com/ks6Lkz6x/Mens-Wear-4.jpg",
"https://i.ibb.co.com/Pv9JKcdW/t-Shirt-11.jpg",
"https://i.ibb.co.com/WWmjWC23/t-Shirt-10.jpg",
"https://i.ibb.co.com/rK2zNrbs/t-Shirt-9.jpg" ,
"https://i.ibb.co.com/PvxbZb7s/t-Shirt-8.jpg" ,
"https://i.ibb.co.com/sdrBgKZg/t-Shirt-7.jpg" ,
"https://i.ibb.co.com/DDYMgfZk/t-Shirt-6.jpg" ,
"https://i.ibb.co.com/nqGxf3p4/t-Shirt-5.jpg" ,
"https://i.ibb.co.com/wNs2r65x/t-Shirt-4.jpg" ,
"https://i.ibb.co.com/d4fXYNwj/t-Shirt-3.jpg" ,
"https://i.ibb.co.com/TxStnGVj/t-Shirt-2.jpg" ,
"https://i.ibb.co.com/yF9LGVYB/t-Shirt-1.jpg" ,
"https://i.ibb.co.com/bRXJzgn3/t-Shirt-12.jpg",
"https://i.ibb.co.com/qLnmpd7J/T-Shirt-1.jpg",
"https://i.ibb.co.com/HL0GCwpm/T-Shirt-2.jpg",
"https://i.ibb.co.com/qFdQ0rRw/T-Shirt-3.jpg",
"https://i.ibb.co.com/p6sv9mLp/T-Shirt-4.jpg",
"https://i.ibb.co.com/SDFW8Nx6/T-Shirt-5.jpg",
];

const Men = () => {
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
      <h2 className="text-3xl font-bold text-center text-blue-900 mb-10">Mens Wear Collection</h2>
      <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
        {Mens.map((img, index) => (
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

export default Men;
