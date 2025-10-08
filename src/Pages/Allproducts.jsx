import React from "react";
import dawnload from "../assets/icon-downloads.png";
import ratinf from "../assets/icon-ratings.png";

const Allproducts = ({ product }) => {
  const { ratingAvg, image, title, downloads } = product;
  return (
    <div>
      <div
        key={product.id}
        className="flex flex-col justify-start gap-4 w-full h-[350px] p-4 bg-white rounded-[8px] border border-gray-200 hover:scale-105 transform transition-all"
      >
        <div className="w-full h-[200px] bg-gray-100 rounded-[4px] overflow-hidden flex items-center justify-center">
          <img className="w-full h-full object-cover" src={image} alt={title} />
        </div>

        <h1 className="text-xl font-bold text-gray-800">{title}</h1>

        <div className="flex items-center justify-between">
          <div className="flex w-[100px] h-[40px] rounded-2xl bg-[#f1f5e8] justify-center items-center">
            <p className="text-[16px] font-bold flex items-center gap-2 text-[#1d7655]">
              <img
                className="w-[20px] h-[20px]"
                src={dawnload}
                alt="download icon"
              />
              {downloads}
            </p>
          </div>

          <div className="flex w-[70px] h-[40px] rounded-2xl bg-[#fff0e1] justify-center items-center">
            <p className="text-[16px] font-bold flex items-center gap-2 text-[#1d7655]">
              <img className="w-[20px] h-[20px]" src={ratinf} alt="" />
              {ratingAvg}{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Allproducts;
