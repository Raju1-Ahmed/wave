import React, { useEffect, useState } from 'react';

const Hoddies = [
"https://i.ibb.co.com/Mk4h8zys/Hoddie-1.jpg",
"https://i.ibb.co.com/qFnR1kXt/Hoddie-16.jpg",
"https://i.ibb.co.com/sdj9PrKH/Hoddie-15.jpg",
"https://i.ibb.co.com/7NY78wkn/Hoddie-2.jpg",
"https://i.ibb.co.com/jv2StbW1/Hoddie-3.jpg",
"https://i.ibb.co.com/9HcvqwjL/Hoddie-4.jpg",
"https://i.ibb.co.com/kV4xssqR/Hoddie-5.jpg",
"https://i.ibb.co.com/mrgHh9Cv/Hoddie-6.jpg",
"https://i.ibb.co.com/Txc18FVS/Hoddie-7.jpg",
"https://i.ibb.co.com/TB2dWnZ1/Hoddie-8.jpg",
"https://i.ibb.co.com/SDB3NGQr/Hoddie-9.jpg" ,
"https://i.ibb.co.com/v6wN2pyq/Hoddie-10.jpg",
"https://i.ibb.co.com/1GKTg8bk/Hoddie-11.jpg",
"https://i.ibb.co.com/MxhyfYP5/Hoddie-12.jpg",
"https://i.ibb.co.com/3m4DfJq5/Hoddie-13.jpg",
"https://i.ibb.co.com/B2Rntfbg/Hoddie-14.jpg",
];





const Hoddie = () => {
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
      <h2 className="text-3xl font-bold text-center text-blue-900 mb-10">Hoodies Collection</h2>  
      <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
        {Hoddies.map((img, index) => (
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

export default Hoddie;
