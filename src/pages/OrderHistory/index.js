import React from "react";
import { Navbar, Header } from "../../components";
import OrderItem from "./OrderItem";
import FilterOrder from "./FilterOrder";

function OrderHistory() {
  return (
    <>
      <div className="flex flex-row min-h-screen bg-slate-100">
        <Navbar />
        <div className="w-full container mx-auto pt-12 px-3 lg:px-16 mb-4">
          <Header title="Order History"></Header>
          <div className="mt-4 flex flex-col md:flex-row">
            <div className="w-full px-4 py-4 bg-white shadow-lg border rounded-lg">
              <FilterOrder />

              <div className="mt-3">
                {[1, 2, 3, 4].map((item, index) => {
                  return <OrderItem />;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OrderHistory;
