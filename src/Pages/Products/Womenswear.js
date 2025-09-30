import React, { useEffect, useState } from 'react';

const Womenswears = [
"https://i.ibb.co.com/gM1cN6t0/Women-Swear-1.jpg",
"https://i.ibb.co.com/8gX96wLx/Women-Swear-2.jpg",
"https://i.ibb.co.com/B2JfscNg/Women-Swear-3.jpg",
"https://i.ibb.co.com/R4pnns8m/Women-Swear-4.jpg",
"https://i.ibb.co.com/S29m15x/Women-Swear-5.jpg",
"https://i.ibb.co.com/Fkkd8GS5/Women-Swear-6.jpg",
"https://i.ibb.co.com/N4Lnc0c/Women-Swear-7.jpg",
"https://i.ibb.co.com/Q3dMvD1M/Women-Swear-8.jpg",
"https://i.ibb.co.com/Z63qVZdD/Women-Swear-9.jpg",
"https://i.ibb.co.com/9mqm3q10/Women-Swear-10.jpg",
"https://i.ibb.co.com/bjjrydYG/Women-Swear-11.jpg",
"https://i.ibb.co.com/WWZnHPZ7/Women-Swear-12.jpg",
"https://i.ibb.co.com/DHtmDT9B/Women-Swear-13.jpg",
];

{/* <a href="https://ibb.co.com/N6hG57W0"><img src="https://i.ibb.co.com/gM1cN6t0/Women-Swear-1.jpg" alt="Women-Swear-1" border="0"></a>
<a href="https://ibb.co.com/WvsfgX4z"><img src="https://i.ibb.co.com/8gX96wLx/Women-Swear-2.jpg" alt="Women-Swear-2" border="0"></a>
<a href="https://ibb.co.com/r2hQyFsZ"><img src="https://i.ibb.co.com/B2JfscNg/Women-Swear-3.jpg" alt="Women-Swear-3" border="0"></a>
<a href="https://ibb.co.com/Z16ssF9P"><img src="https://i.ibb.co.com/R4pnns8m/Women-Swear-4.jpg" alt="Women-Swear-4" border="0"></a>
<a href="https://ibb.co.com/2wfMLW6"><img src="https://i.ibb.co.com/S29m15x/Women-Swear-5.jpg" alt="Women-Swear-5" border="0"></a>
<a href="https://ibb.co.com/j99j37cy"><img src="https://i.ibb.co.com/Fkkd8GS5/Women-Swear-6.jpg" alt="Women-Swear-6" border="0"></a>
<a href="https://ibb.co.com/rWZfDBD"><img src="https://i.ibb.co.com/N4Lnc0c/Women-Swear-7.jpg" alt="Women-Swear-7" border="0"></a>
<a href="https://imgbb.com/"><img src="https://i.ibb.co.com/Q3dMvD1M/Women-Swear-8.jpg" alt="Women-Swear-8" border="0"></a>
<a href="https://ibb.co.com/DDN0tq42"><img src="https://i.ibb.co.com/Z63qVZdD/Women-Swear-9.jpg" alt="Women-Swear-9" border="0"></a>
<a href="https://ibb.co.com/FkBkqBy1"><img src="https://i.ibb.co.com/9mqm3q10/Women-Swear-10.jpg" alt="Women-Swear-10" border="0"></a>
<a href="https://imgbb.com/"><img src="https://i.ibb.co.com/bjjrydYG/Women-Swear-11.jpg" alt="Women-Swear-11" border="0"></a>
<a href="https://ibb.co.com/zhpsm7pC"><img src="https://i.ibb.co.com/WWZnHPZ7/Women-Swear-12.jpg" alt="Women-Swear-12" border="0"></a>
<a href="https://ibb.co.com/ycXKn76z"><img src="https://i.ibb.co.com/DHtmDT9B/Women-Swear-13.jpg" alt="Women-Swear-13" border="0"></a> */}
const Womenswear = () => {
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
      <h2 className="text-3xl font-bold text-center text-blue-900 mb-10">Womens Wear Collection</h2>
      <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
        {Womenswears.map((img, index) => (
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

export default Womenswear;
