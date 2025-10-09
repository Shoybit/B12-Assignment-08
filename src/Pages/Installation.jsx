import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import dawnload from "../assets/icon-downloads.png";
import ratinf from "../assets/icon-ratings.png";
import useProducts from "../Hook/Hook";
import { CircleLoader } from "react-spinners";
import Loader from "../Components/Loader";

const Installation = () => {
  const { products } = useProducts();
  const [installedProducts, setInstalledProducts] = useState([]);
  const [sortOrder, setSortOrder] = useState("");
  const [load, setLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoad(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const apps = JSON.parse(localStorage.getItem("installedApps") || "[]");
    const installed = products.filter((product) => apps.includes(product.id));
    setInstalledProducts(installed);
  }, [products]);

  const handleUninstall = (appId) => {
    const updatedProducts = installedProducts.filter(
      (product) => product.id !== appId
    );
    setInstalledProducts(updatedProducts);
    localStorage.setItem(
      "installedApps",
      JSON.stringify(updatedProducts.map((app) => app.id))
    );
    toast.success("App uninstalled successfully!");
  };

  const sortedProducts = [...installedProducts].sort((a, b) => {
    const getDownloadCount = (downloads) => {
      if (downloads.includes('M')) {
        return parseFloat(downloads);
      } else if (downloads.includes('K')) {
        return parseFloat(downloads);
      } else {
        return parseFloat(downloads);
      }
    };

    const downloadsA = getDownloadCount(a.downloads);
    const downloadsB = getDownloadCount(b.downloads);

    if (sortOrder === "high-to-low") {
      return downloadsB - downloadsA; 
    } else if (sortOrder === "low-to-high") {
      return downloadsA - downloadsB;
    } else {
      return 0;
    }
  });

  if (load) {
    return <Loader></Loader>;
  }

  return (
    <div className="min-h-screen bg-[#f5f5f5] py-8">
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          Your Installed Apps
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Explore All Trending Apps on the Market developed by us 
        </p>
      </div>

      <ToastContainer />
      <div className="max-w-6xl mx-auto px-4">
        <div className="p-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">
              Your Apps ({installedProducts.length})
            </h2>
            <select 
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              className="border border-gray-300 rounded-lg px-4 py-2"
            >
              <option value="" disabled selected>Sort by size</option>
              <option value="high-to-low">Size: High to Low</option>
              <option value="low-to-high">Size: Low to High</option>
            </select>
          </div>

          {installedProducts.length > 0 ? (
            <div className="space-y-6">
              {sortedProducts.map((app) => (
                <div
                  key={app.id}
                  className="flex flex-col md:flex-row items-center gap-6 p-6 border bg-white border-gray-200 rounded-lg"
                >
                  <div>
                    <img
                      src={app.image}
                      alt={app.title}
                      className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-lg"
                    />
                  </div>
                  <div className="flex-1 ml-9">
                    <div className="text-center md:text-left">
                      <h3 className="text-xl font-bold text-gray-800">
                        {app.title}
                      </h3>
                      <p className="text-gray-600 mb-1">{app.companyName}</p>
                      <div className="flex flex-wrap gap-2">
                        <div className="flex">
                          <img className="w-[20px] h-[20px]" src={dawnload} alt="" />
                          <span className="inline-block text-sm px-3 py-1">
                            {app.downloads}
                          </span>
                        </div>
                        <div className="flex items-center">
                          <img className="w-[20px] h-[20px]" src={ratinf} alt="" />
                          <span className="inline-block text-sm px-3">
                            {app.ratingAvg}
                          </span>
                        </div>
                        <span className="inline-block text-[#627382] text-sm py-1">
                          {app.size} MB
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="">
                    <button
                      onClick={() => handleUninstall(app.id)}
                      className="bg-green-400 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 flex items-center gap-2"
                    >
                      Uninstall
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : ( []
          )}
        </div>
      </div>
    </div>
  );
};

export default Installation;