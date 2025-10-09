import React, { useState, useEffect } from "react";
import playstore from "../assets/gogleplay.png";
import applestore from "../assets/appleplay.png";
import hero from '../assets/hero.png'
import { Link } from "react-router";
import Allproducts from "./Allproducts";
import useProducts from "../Hook/Hook";
import { CircleLoader } from "react-spinners";
import Loader from "../Components/Loader";

const Home = () => {
    const { products } = useProducts();
    const [load, setLoad] = useState(true);
    
    const productsSlice = products.slice(0, 8);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoad(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

        if (load) {
        return <Loader></Loader>
    }
    

    return (
        <div className="min-h-screen bg-[#f5f5f5]">
            <div className="max-w-11/12 mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-10 lg:pt-15">
                <div className="text-center">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[62px] font-bold p-4 mt-8 sm:mt-10 lg:mt-15 leading-tight text-center">
                        <span className="block">We Build</span>
                        <span className="block mt-2 sm:mt-3">
                            <span className="text-[#9560ee]">Productive</span> Apps
                        </span>
                    </h1>

                    <p className="mx-auto text-base sm:text-lg md:text-xl lg:text-2xl max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-[1150px] mt-4 sm:mt-6 px-2 sm:px-4 leading-relaxed text-[#627382]">
                        At HERO.IO, we craft innovative apps designed to make everyday life
                        simpler, smarter, and more exciting. Our goal is to turn your ideas
                        into digital experiences that truly make an impact.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mt-6 sm:mt-8 lg:mt-10">
                    <a
                        href="https://play.google.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-row justify-center items-center gap-3 bg-gray-100 text-black border border-[#d2d2d2] rounded-[14px] transition-all duration-300 transform hover:scale-105 w-[200px] h-[56px] px-6 py-3 hover:bg-white box-border"
                    >
                        <img src={playstore} alt="Google Play" className="w-6 h-6" />
                        <div className="font-bold text-sm">Google Play</div>
                    </a>

                    <a
                        href="https://apps.apple.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-row justify-center items-center gap-3 bg-gray-100 text-black border border-[#d2d2d2] rounded-[14px] transition-all duration-300 transform hover:scale-105 w-[200px] h-[56px] px-6 py-3 hover:bg-white box-border"
                    >
                        <img src={applestore} alt="App Store" className="w-6 h-6" />
                        <div className="font-bold text-sm">App Store</div>
                    </a>
                </div>

                <div className="flex justify-center items-center mt-8 sm:mt-12 lg:mt-16">
                    <img 
                        src={hero} 
                        alt="Hero App" 
                        className="max-w-full h-auto mx-auto"
                    />
                </div>
            </div>

            <div 
                className="h-[380px] sm:h-[370px] lg:h-[410px] w-full flex flex-col justify-center items-center text-white sm:py-12 lg:py-16 "
                style={{
                    background: 'linear-gradient(125.07deg, rgba(99, 46, 227, 1), rgba(159, 98, 242, 1) 100%)'
                }}
            >
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mt-5 mb-6 sm:mb-8 lg:mb-10 xl:mb-14 text-center px-4">
                    Trusted by Millions, Built for You
                </h1>
                
                <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-8 lg:gap-12 xl:gap-16 px-4">
                    <div className="text-center">
                        <p className="text-xs sm:text-sm md:text-base opacity-90 mb-1 sm:mb-2 text-[#e6dafb]">Total Downloads</p>
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-1 sm:mb-2">29.6M</h1>
                        <p className="text-xs opacity-80 text-[#e6dafb]">21% more than last month</p>
                    </div>

                    <div className="text-center">
                        <p className="text-xs sm:text-sm md:text-base opacity-90 mb-1 sm:mb-2 text-[#e6dafb]">Total Reviews</p>
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-1 sm:mb-2">906K</h1>
                        <p className="text-xs opacity-80 text-[#e6dafb]">46% more than last month</p>
                    </div>

                    <div className="text-center">
                        <p className="text-xs sm:text-sm md:text-base opacity-90 mb-1 sm:mb-2 text-[#e6dafb]">Active Apps</p>
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-1 sm:mb-2">132+</h1>
                        <p className="text-xs opacity-80 text-[#e6dafb]">31 more will Launch</p>
                    </div>
                </div>
            </div>

            <div className="text-center py-8 sm:py-12 lg:py-16">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
                    Trending Apps
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-[#627382] max-w-md sm:max-w-lg md:max-w-xl mx-auto px-4">
                    Explore All Trending Apps on the Market developed by us
                </p>
            </div>

            <div className="max-w-11/12 mx-auto p-5">
                {productsSlice.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
                        {productsSlice.map(product => (
                            <Allproducts key={product.id} product={product}></Allproducts>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-12">
                        <p className="text-gray-500 text-lg">No products found</p>
                    </div>
                )}
            </div>

            <div className="flex justify-center mt-8 pb-5">
                <Link to="/apps">
                    <button className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] hover:from-[#5729CC] hover:to-[#8D55DD] text-white border-none hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-xl px-8 py-3 min-w-[140px]">
                        Show all
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Home;