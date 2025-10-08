import React, { useEffect, useState } from 'react';
import dawnload from "../assets/icon-downloads.png";
import ratinf from "../assets/icon-ratings.png";
import useProducts from '../Hook/Hook';
import scarc from '../assets/scar.png'
import ErrorApp from '../Components/Error/ErrorApp';
import { CircleLoader } from 'react-spinners';
import { Link } from 'react-router';

const Apps = () => {
    const { products } = useProducts();
    const [load, setLoad] = useState(true);
      const [searchLoad, setSearchLoad] = useState(false);

    
    const [search, setSearch] = useState("");
    const term = search.trim().toLowerCase();
    
    const filteredProducts = term 
        ? products.filter(product => 
            product.title.toLowerCase().includes(term) || 
            product.companyName.toLowerCase().includes(term)
          )
        : products;

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoad(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

  useEffect(() => {
    if (term) {
      setSearchLoad(true);
      const timer = setTimeout(() => {
        setSearchLoad(false);
      }, 500); 

      return () => clearTimeout(timer);
    }
  }, [term]); 

 
  if (load) {
    return (
      <div className="min-h-screen bg-[#f5f5f5] flex justify-center items-center">
        <CircleLoader color="#9560ee" size={80} loading={load} />
      </div>
    );
  }
    return (
        <div className="min-h-screen bg-[#f5f5f5] py-8">
            <div className="max-w-11/12 mx-auto px-4">
                <div className="text-center mb-12">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Our All Applications</h1>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Explore All Apps on the Market developed by us. We code for Millions
                    </p>
                </div>

                <div className='flex flex-col sm:flex-row justify-between items-center gap-4 mb-8'>
                    <h1 className='text-xl font-semibold'> ({filteredProducts.length}) Apps Found</h1>

                    <label className="input flex items-center gap-2 w-full sm:w-80">
                        <img src={scarc} alt="search icon" className="w-4 h-4" />
                        <input 
                            value={search}
                            onChange={e => setSearch(e.target.value)} 
                            type="text" 
                            placeholder="Search Apps" 
                            className="grow" 
                        />
                    </label>
                </div>
                {searchLoad ? (
          <div className="min-h-[200px] flex justify-center items-center">
            <CircleLoader color="#9560ee" size={50} loading={searchLoad} />
          </div>
        ) : (

            <div>
                {filteredProducts.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {filteredProducts.map(product => (
                            <Link 
                                key={product.id} 
                                to={`/app/${product.id}`}
                                className="block"
                            >
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
                        ))}
                    </div>
                ) : (
                   <ErrorApp></ErrorApp>
                )}
              </div>
              )}
            </div> 
        </div>
    );
};

export default Apps;