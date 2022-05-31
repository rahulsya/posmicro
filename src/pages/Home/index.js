import React, { useState, useEffect } from "react";
import { Navbar } from "../../components";
// parts
import Header from "./Header";
import Product from "./Product";
import Carts from "./Carts";
import { products } from "../../api/products/product";

const Home = () => {
  const [dataProducts, setDataProducts] = useState([]);
  let [params, setParams] = useState({
    category: "all",
    product_status: "DESC",
    price: "",
    page: 1,
    stock: "",
  });

  const [disableNextBtn, setDisableNextBtn] = useState(false);

  useEffect(() => {
    if (params) {
      getAllProducts();
    }
  }, [params]);

  const getAllProducts = () => {
    products(params)
      .then((response) => {
        if (response.data.length < 1) {
          setDisableNextBtn(true);
          return;
        }
        setDisableNextBtn(false);
        setDataProducts(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="flex flex-row min-h-screen bg-slate-100">
      <Navbar />
      <div className="w-full flex lg:flex-row flex-col">
        <div className="w-full pt-12 px-5 container mx-auto">
          <Header dataState={{ params, setParams }} />
          {/* product items */}
          <Product dataProducts={dataProducts} />
          <div className="flex flex-row justify-end py-4">
            <button
              disabled={params.page === 1 ? true : false}
              onClick={() => {
                setParams((state) => ({ ...state, page: state.page - 1 }));
              }}
              className="font-semibold text-gray-700 hover:shadow border-2 border-green-500 bg-gray-200 mr-2 py-2 px-4 rounded cursor-pointer"
            >
              Pervious
            </button>
            <button
              disabled={disableNextBtn === true ? true : false}
              onClick={() => {
                setParams((state) => ({ ...state, page: state.page + 1 }));
              }}
              className="font-semibold text-gray-700 hover:shadow border-2 border-green-500 bg-gray-200 py-2 px-4 rounded cursor-pointer"
            >
              Next
            </button>
          </div>
        </div>
        <div className="bg-gray-50 w-full mt-12 lg:mt-0 lg:w-1/2 pt-12 px-12">
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
