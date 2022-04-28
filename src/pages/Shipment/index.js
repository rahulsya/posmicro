import React from "react";
import { Navbar, Header, CartItem } from "../../components";
import Address from "./Address";
import Courier from "./Courier";
import SummaryCart from "./SummaryCart";
import { useSelector } from "react-redux";

function Shipment() {
  const carts = useSelector((state) => state.cart);

  return (
    <div className="flex flex-row min-h-screen bg-slate-100">
      <Navbar />
      <div className="w-full container mx-auto pt-12 px-3 lg:px-16">
        <Header title="Shipment"></Header>
        <div className="flex flex-col lg:flex-row">
          <div className="w-full flex-col bg-white shadow-lg py-4 px-4 mt-5 rounded-lg">
            <Address />
            <Courier />
            {/* products */}
            <div className="text-lg pt-4 font-semibold">Products list</div>
            <hr className="mb-4" />
            <div className="h-[32rem] overflow-y-auto">
              {carts.map((cart) => {
                return <CartItem isShowAction={true} item={cart} />;
              })}
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex-col lg:mx-3">
            <SummaryCart data={{ carts }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shipment;
