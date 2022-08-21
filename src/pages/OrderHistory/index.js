import React, { useState, useEffect } from "react";
import { Navbar, Header } from "../../components";
import OrderItem from "./OrderItem";
import FilterOrder from "./FilterOrder";
import AlertToast from "../../utils/toast";
// api
import order from "../../api/orders";

function OrderHistory() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    order
      .order({ status: "all" })
      .then((response) => {
        setOrders(response.data);
      })
      .catch((err) => {
        AlertToast("error", err.message);
      });
  }, []);

  return (
    <>
      <div className="flex flex-row min-h-screen bg-slate-100">
        <Navbar />
        <div className="w-full container mx-auto pt-12 px-3 lg:px-16 mb-4">
          <Header title="Order History"></Header>
          <div className="mt-4 flex flex-col md:flex-row">
            <div className="w-full px-4 py-4 bg-white shadow-lg border rounded-lg">
              <FilterOrder dataState={{ setOrders }} />

              <div className="mt-3">
                {orders?.map((item, index) => {
                  return <OrderItem data={item} key={index} />;
                })}
              </div>
              {orders.length === 0 && (
                <div className="capitalize w-full flex justify-center py-3 font-semibold">
                  <div>data order is empty</div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OrderHistory;
