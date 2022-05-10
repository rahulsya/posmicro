import React, { useState } from "react";
import { Navbar, Header, CartItem } from "../../components";
import Address from "./Address";
import Courier from "./Courier";
import SummaryCart from "./SummaryCart";
import { useSelector, useDispatch } from "react-redux";
import { addItem, removeItem } from "../../redux/Cart/action";
// import { toast } from "react-toastify";
import Toast from "../../utils/toast";

function Shipment() {
  const dispatch = useDispatch();
  const carts = useSelector((state) => state.cart);

  const [DataShipment, setDataShipment] = useState({
    courier_service: "",
    total_shipping: 0,
    shipping_estimation: "",
    total_price: 0,
  });

  const onSubmitPayment = () => {
    Toast("success", "🦄 Wow so easy!", {
      autoClose: 1000,
      position: "bottom-right",
    });
    console.log(DataShipment);
  };

  return (
    <div className="flex flex-row min-h-screen bg-slate-100">
      <Navbar />
      <div className="w-full container mx-auto pt-12 px-3 lg:px-16 mb-5">
        <Header title="Shipment"></Header>
        <div className="flex flex-col lg:flex-row">
          <div className="w-full flex-col bg-white shadow-lg py-4 px-4 mt-5 rounded-lg">
            <Address />
            <Courier DataState={{ DataShipment, setDataShipment, carts }} />
            {/* products */}
            <div className="text-lg pt-4 font-semibold">Products list</div>
            <hr className="mb-4" />
            <div className="h-[32rem] overflow-y-auto">
              {carts.map((cart, index) => {
                return (
                  <CartItem
                    key={index}
                    onDec={() => dispatch(removeItem(cart))}
                    onInc={() => dispatch(addItem(cart))}
                    isShowAction={true}
                    item={cart}
                  />
                );
              })}
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex-col lg:mx-3">
            <SummaryCart
              dataState={{ DataShipment, setDataShipment }}
              onSubmitPayment={onSubmitPayment}
              data={{ carts }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shipment;
