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
  return (
    <main className="text-gray-800 bg-white min-h-screen py-12 px-4 md:px-8">
      <h2 className="text-3xl font-bold text-center text-blue-900 mb-10">Kidswear Collection</h2>
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
