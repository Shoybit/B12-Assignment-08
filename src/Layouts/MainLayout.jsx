import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Header/Navbar';
import Footer from '../Components/Footer/Footer';
import { Outlet } from 'react-router';
import Loader from '../Components/Loader';

const MainLayout = () => {
 const [Loading, setLoading] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);
    if (Loading ) {
        return <Loader />;
    }

    return (
        <div className='flex flex-col h-screen'>
            <Navbar></Navbar>
            <div className='flex-1 '>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;