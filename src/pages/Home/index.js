import React from "react";
import { Navbar } from "../../components";
// parts
import Header from "./Header";
import Product from "./Product";
import Carts from "./Carts";
// import { useSelector } from "react-redux";

const Home = () => {
  return (
    <div className="flex flex-row min-h-screen bg-slate-100">
      <Navbar />
      <div className="w-full flex lg:flex-row flex-col">
        <div className="w-full pt-12 px-5 container mx-auto">
          <Header />
          {/* product items */}
          <Product />
        </div>
        <div className="bg-gray-50 w-full lg:w-1/2 pt-12 px-12">
          <div className="font-bold text-3xl text-gray-700 mb-5">
            Order List
          </div>
          <Carts />
        </div>
      </div>
    </div>
  );
};

export default Home;
