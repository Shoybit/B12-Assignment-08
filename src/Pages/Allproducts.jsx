import React from 'react';
import { Link } from 'react-router';
import dawnload from "../assets/icon-downloads.png"; 
import ratinf from "../assets/icon-ratings.png"; 

const Allproducts = ({ product }) => {
    return (
        <Link to={`/app/${product.id}`} className="block">
            <div className="flex flex-col justify-start gap-4 w-full h-[350px] p-4 bg-white rounded-[8px] border border-gray-200 hover:scale-105 transform transition-all duration-300 hover:shadow-lg cursor-pointer">
                <div className="w-full h-[200px] bg-gray-100 rounded-[4px] overflow-hidden flex items-center justify-center">
                    <img 
                        className="w-full h-full object-cover" 
                        src={product.image} 
                        alt={product.title} 
                    />
                </div>

                <h1 className="text-xl font-bold text-gray-800 line-clamp-1">{product.title}</h1>
                <p className="text-sm text-gray-600 -mt-2">{product.companyName}</p>

                <div className="flex items-center justify-between mt-auto">
                    <div className="flex w-fit h-[40px] rounded-2xl bg-[#f1f5e8] justify-center items-center px-3">
                        <p className="text-[16px] font-bold flex items-center gap-2 text-[#1d7655]">
                            <img
                                className="w-[20px] h-[20px]"
                                src={dawnload}
                                alt="download icon"
                            />
                            {product.downloads}
                        </p>
                    </div>

                    <div className="flex w-fit h-[40px] rounded-2xl bg-[#fff0e1] justify-center items-center px-3">
                        <p className="text-[16px] font-bold flex items-center gap-2 text-[#ff8c00]">
                            <img className="w-[20px] h-[20px]" src={ratinf} alt="rating icon" />
                            {product.ratingAvg}
                        </p>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Allproducts;