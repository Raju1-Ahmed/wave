import React, { useEffect, useState } from 'react';

const Sportswears = [
"https://i.ibb.co.com/d0yhW7L6/premium-photo-1674128399181-0a091461847b.jpg",
"https://i.ibb.co.com/93gzg3pM/premium-photo-1674170065323-9f207919ea27.jpg",
"https://i.ibb.co.com/hRY1j7xy/premium-photo-1727896370883-4169bfec5199.jpg",
"https://i.ibb.co.com/B2PkDP1P/premium-photo-1727896378334-aa6f11a5da11.jpg",
"https://i.ibb.co.com/tpvcN6Y2/golf-modz-Pd-J4-FI4025-A-unsplash.jpg",
"https://i.ibb.co.com/BbRLntb/leon-elldot-Zc7i-7-Mdn34-unsplash.jpg",
"https://i.ibb.co.com/gG2NcG6/andre-tan-67u-Jo7m-ZPCo-unsplash.jpg",
"https://i.ibb.co.com/ymn83C6X/alex-beholder-J69l0-Z2c-h0-unsplash.jpg",
"https://i.ibb.co.com/NnNtykTZ/armen-aydinyan-xj-HFnpjg0w-unsplash.jpg",
"https://i.ibb.co.com/9H422yF8/karl-joshua-bernal-6-Bpx-Dya-Hdw-A-unsplash.jpg",
"https://i.ibb.co.com/bjYP05QP/joshua-diaz-Spl-IVRhqta8-unsplash.jpg",
];




const Sportswear = () => {
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
      <h2 className="text-3xl font-bold text-center text-blue-900 mb-10">Sports Wear Collection</h2>
      <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
        {Sportswears.map((img, index) => (
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

export default Sportswear;
