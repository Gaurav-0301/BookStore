import React from "react";

const Cards = ({ item }) => {
  return (
    <div className="max-w-sm mx-auto my-6 bg-white border border-gray-100 rounded-2xl shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl group cursor-pointer">
      
      {/* Image Container: Fixed Aspect Ratio (3:4 is standard for books) */}
      <div className="relative aspect-[3/4] w-full overflow-hidden rounded-t-2xl bg-gray-50">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-105"
        />
        {/* Floating Badge */}
        <div className="absolute top-3 right-3 bg-pink-500 text-white text-[10px] font-bold px-2 py-1 rounded-lg shadow-lg">
          NEW
        </div>
      </div>

      <div className="p-5">
        <h2 className="text-lg font-bold text-gray-800 truncate mb-1">
          {item.name}
        </h2>
        
        <p className="text-sm text-gray-500 line-clamp-2 h-10 mb-4 leading-relaxed">
          {item.title}
        </p>

        <div className="flex items-center justify-between border-t border-gray-50 pt-4">
          <span className="text-xl font-extrabold text-gray-900">
            {item.price === 0 ? "Free" : `₹${item.price}`}
          </span>
          
          <button className="px-5 py-2 bg-black text-white text-sm font-semibold rounded-xl transition-all hover:bg-pink-600 active:scale-95">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;

