import React from "react";

const Cards = ({ item }) => {
  return (
    <div className="max-w-sm mx-auto my-6 bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl hover:scale-[1.02] cursor-pointer group">
      
      {/* Image Container */}
      <figure className="relative overflow-hidden h-64 bg-gray-100">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </figure>

      {/* Content Area */}
      <div className="p-5 bg-white text-gray-800">
        <div className="flex justify-between items-start mb-2">
          <h2 className="text-xl font-bold truncate pr-2">
            {item.name}
          </h2>
          <span className="bg-pink-500 text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider">
            NEW
          </span>
        </div>

        <p className="text-gray-500 text-sm mb-4 line-clamp-2">
          {item.title}
        </p>

        {/* Action Row */}
        <div className="flex justify-between items-center mt-auto">
          <div className="font-semibold text-lg text-green-600">
            {item.price === 0 ? "Free" : `₹${item.price}`}
          </div>

          <button className="px-4 py-1.5 border border-black rounded-full text-sm font-medium transition-colors duration-300 hover:bg-pink-500 hover:border-pink-500 hover:text-white">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;


