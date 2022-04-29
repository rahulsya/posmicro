import React from "react";
import { Navbar, Header } from "../../components";

import { useSelector } from "react-redux";

import { formatNumber } from "../../utils/format-rupiah";
import sumPrice from "../../utils/sum-price";

function DetailOrderHistory() {
  const product = useSelector((state) => state.cart);
  return (
    <>
      <div className="flex flex-row min-h-screen bg-slate-100">
        <Navbar />
        <div className="w-full container mx-auto pt-12 px-3 lg:px-16">
          <Header title="Order #00123890"></Header>
          <div className="mt-4 flex flex-col md:flex-row">
            <div className=" flex flex-col w-full px-4 py-5 rounded-lg shadow-xl bg-white">
              <div className="">
                <div className="text-lg font-semibold">
                  Shipping Information
                </div>
                <hr />
                <div className="pt-3">
                  <div>Order Date : 14 April 2020, 17:02</div>
                  <p className="font-semibold">Rahulsyaban</p>
                  <p>6285718927573</p>
                  <div>
                    Akshya Nagar 1st Block 1st Cross, Rammurthy nagar,
                    Bangalore-560016
                  </div>
                  <div>DKI Jakarta, Jakarta Timur</div>
                  <div className="font-semibold pt-3">Courier</div>
                  <div>JNE express</div>
                  <div>Estimasi 3 - 4 Hari</div>
                </div>
              </div>
              <div className="text-lg font-semibold mt-5">Detail Product</div>
              <hr />
              {product.map((item, index) => {
                return (
                  <div className="flex w-full justify-between flex-row py-3">
                    <div className="flex flex-row">
                      <img
                        src={item.image}
                        alt="dummy product"
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                      <div className="pl-3">
                        <div>{item.name}</div>
                        <div>
                          {item.qty} x {`Rp. ${item.price}`}
                        </div>
                      </div>
                    </div>
                    <div className="justify-self-end">
                      <div>Total Price</div>
                      <div>{`Rp. ${item.qty * item.price}`}</div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="w-full md:w-1/2 lg:mx-3">
              <div className="bg-white shadow-lg px-4 py-4 rounded-lg">
                <div className="text-lg font-semibold">Detail Payment</div>
                <hr />
                <div className="pt-4 text-lg">
                  <div className="flex justify-between">
                    <div className="text-md ">SubTotal</div>
                    <div className="text-sm xl:text-xl font-semibold">
                      {formatNumber(sumPrice(product))}
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <div className="text-md ">Shipping</div>
                    <div className="text-sm xl:text-xl font-semibold">
                      Rp. 0
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <div className="text-md ">Total</div>
                    <div className="text-sm xl:text-xl font-semibold">
                      {formatNumber(sumPrice(product))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DetailOrderHistory;
