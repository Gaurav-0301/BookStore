import React from "react";

const Cards = ({ item }) => {
  return (
   <div className=" max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden my-4
                transition-all duration-300 ease-in-out
                hover:-translate-y-3 hover:shadow-2xl hover:scale-105 cursor-pointer">
      <figure>
        <img
          src={item.image}
          alt={item.name}
          className="h-[50] "
        />
      </figure>

      <div className="card-body bg-white text-black">
        <h2 className="card-title">
          {item.name}
          <div className="badge badge-secondary">NEW</div>
        </h2>

        <p>{item.title}</p>

        <div className="card-actions justify-between">
          <div className="badge badge-outline">
            {item.price === 0 ? "Free" : `₹${item.price}`}
          </div>

          <div className="badge badge-outline border-black text-black hover:bg-pink-500 hover:text-white px-2 duration-200">
            Buy Now
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;


