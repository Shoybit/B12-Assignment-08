import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useProducts from '../Hook/Hook';
import CircleLoader from 'react-spinners/CircleLoader';
import dawnload from '../assets/icon-downloads.png'
import reting from '../assets/icon-ratings.png'
import review from '../assets/icon-review.png'
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid, ResponsiveContainer } from 'recharts';

const AppsDetails = () => {
    const { id } = useParams();
    const { products } = useProducts();
    const [load, setLoad] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoad(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    if (load) {
        return (
            <div className="min-h-screen bg-[#f5f5f5] flex justify-center items-center">
                <CircleLoader 
                    color="#9560ee" 
                    size={80} 
                    loading={load} 
                />
            </div>
        );
    }

    const product = products.find(p => p.id === parseInt(id));
    console.log('Found product:', product);

    if (!product) {
        return (
            <div className='max-w-11/12 mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-10 lg:pt-15'>
                <div className="text-center">
                    <p>ID: {id}</p>
                    <p>{products.map(p => p.id).join(', ')}</p>
                </div>
            </div>
        );
    }

    const { image, title, mb, companyName, description, ratingAvg, reviews, downloads, ratings } = product;

    const chartData = ratings.slice().reverse().map((rating) => ({
        name: rating.name,
        count: rating.count
    }));

    return (
        <div className='bg-[#f5f5f5]'>
            <div className='max-w-11/12 mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-10 lg:pt-15 min-h-screen'>
                <div className="rounded-lg overflow-hidden">
                    
                    <div className="flex flex-col md:flex-row p-6 border-b border-gray-300">
                        <div className="md:w-1/3 flex justify-center md:justify-start mb-6 md:mb-0 pb-6 md:pb-0 md:pr-6">
                            <img 
                                src={image} 
                                alt={title}
                                className="w-64 h-64 object-cover rounded-lg"
                            />
                        </div>

                        <div className="md:w-2/3 md:pl-8">
                            <h1 className="text-3xl font-bold text-gray-800  pb-2">{title}</h1>
                           
                            <p className="text-lg text-[#6e38e6] mb-5 mt-1"><span className='text-[#696b6c]'>Developed by</span> {companyName}</p>
                            
                            <p className='border-b border-gray-300  mb-2'></p>

                            <div className="flex items-center gap-15 mb-6 mt-5">
                                <div className="flex flex-col  gap-1">
                                    <img className='w-8' src={dawnload} alt="" />
                                    <span className="text-sm text-gray-600">Downloads</span>
                                    <span className="font-bold text-2xl">{downloads}</span>
                                </div>

                                <div className="flex flex-col  gap-1">
                                     <img className='w-8' src={reting} alt="" />
                                    <span className="text-sm text-gray-600">Average Ratings</span>
                                    <span className="font-bold text-2xl">{ratingAvg} </span>
                                </div>

                                <div className="flex flex-col  gap-1">
                                    <img className='w-8' src={review} alt="" />
                                    <span className="text-sm text-gray-600">Total Reviews:</span>
                                    <span className="font-bold">{reviews}</span>
                                </div>
                            </div>

                            <button className="bg-[#00d390] hover:bg-[#22a57c] text-white  py-3 px-6 rounded-lg mb-6 transition ">
                                Install Now ({mb})
                            </button>
                        </div>
                    </div>
                    
                    <div className="p-6 border-b border-gray-300">
                        <h3 className="text-xl font-bold mb-3 text-gray-800">Rating</h3>
                        
                        <ResponsiveContainer width="100%" height={300}>
                            <BarChart
                                data={chartData}
                                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                            >
                                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                                <XAxis 
                                    dataKey="name" 
                                    stroke="#666" 
                                />
                                <YAxis />
                                <Tooltip 
                                    wrapperStyle={{ 
                                        width: 100, 
                                        backgroundColor: '#f5f5f5',
                                        border: '1px solid #d5d5d5',
                                        borderRadius: 3
                                    }} 
                                />
                                <Legend 
                                    width={100} 
                                    wrapperStyle={{ 
                                        top: 40, 
                                        right: 20, 
                                        backgroundColor: '#f5f5f5', 
                                        border: '1px solid #d5d5d5', 
                                        borderRadius: 3, 
                                        lineHeight: '40px' 
                                    }} 
                                />
                                <Bar 
                                    dataKey="count" 
                                    fill="#ff8811" 
                                    barSize={30}
                                />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>

                    <div className="p-6">
                        <h3 className="text-xl font-bold mb-3 text-gray-800">Description</h3>
                        <p className="text-gray-700 text-lg leading-relaxed">{description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppsDetails;