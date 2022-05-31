import { useState } from "react";
import { CartItem, Button } from "../../components";
import { EmptyIL } from "../../assets/icons";

import { useSelector, useDispatch } from "react-redux";
import { addItem, removeItem, clearItem } from "../../redux/Cart/action";
import { useNavigate } from "react-router-dom";

import sumPrice from "../../utils/sum-price";
import AlertToast from "../../utils/toast";
import { formatNumber } from "../../utils/format-rupiah";
import orders from "../../api/orders";

function Carts() {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const carts = useSelector((state) => state.cart);
  const [currentPayment, setCurrentPayment] = useState("cash");
  const [shipment, setShipment] = useState("cod");

  const onSubmit = async () => {
    const order = {
      id: 8,
      total_price: 4000,
    };
    const user = {
      name: "rahul",
      email: "rahulsyaban666@gmail.com",
    };
    if (currentPayment === "cash") {
      console.log("call api ");
    } else {
      // open payment gateway
      const { token } = await orders.payment({ order, user });

      if (!token) {
        AlertToast("error", "Payment is fail");
        return;
      }
      window.snap.pay(token, {
        onSuccess: function (result) {
          /* You may add your own implementation here */
          alert("payment success!");
          console.log(result);
        },
        onPending: function (result) {
          /* You may add your own implementation here */
          alert("wating your payment!");
          console.log(result);
        },
        onError: function (result) {
          /* You may add your own implementation here */
          alert("payment failed!");
          console.log(result);
        },
        onClose: function () {
          /* You may add your own implementation here */
          alert("you closed the popup without finishing the payment");
        },
      });
    }
  };

  return (
    <>
      <div>
        <button
          onClick={() => dispatch(clearItem())}
          className="font-bold justify-end underline text-gray-600 underline-offset-4 pb-3"
        >{`Clear Carts >`}</button>

        <div className="h-[32rem] overflow-y-auto">
          {carts.length > 0 ? (
            carts.map((item, index) => {
              return (
                <CartItem
                  isShowAction
                  onDec={() => dispatch(removeItem(item))}
                  onInc={() => dispatch(addItem(item))}
                  key={index}
                  item={item}
                />
              );
            })
          ) : (
            <div className="h-full flex flex-col justify-center items-center font-semibold">
              <EmptyIL />
              Cart Is Empty...
            </div>
          )}
        </div>
        <hr />
        <div className="flex flex-row justify-between mt-4 text-gray-800 font-bold text-xl">
          <div>Subtotal</div>
          <div>{formatNumber(sumPrice(carts))}</div>
        </div>
        <ShippingMethod
          dataState={{ shipment, setShipment, setCurrentPayment }}
        />
        <PaymentMethod
          dataState={{ currentPayment, setShipment, setCurrentPayment }}
        />
        <hr />
        <div className="mb-6">
          {carts.length > 0 && (
            <>
              {shipment === "cod" ? (
                <Button
                  onPress={onSubmit}
                  type="success"
                  title="Complete Transactions"
                />
              ) : (
                <Button
                  onPress={() => navigate("/shipment")}
                  type="success"
                  title="Complete Shipment"
                />
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
}

const ShippingMethod = ({ dataState }) => {
  const { shipment, setShipment, setCurrentPayment } = dataState;
  return (
    <>
      {/* shipment */}
      <div className="font-semibold mt-5">shipping method</div>
      <div className="flex flex-row py-3">
        <button
          onClick={() => setShipment("cod")}
          className={`px-4 py-2 rounded-md text-center ${
            shipment === "cod" ? "bg-blue-500" : "bg-gray-400"
          } shadow-lg text-white font-semibold mr-3`}
        >
          COD
        </button>
        <button
          onClick={() => {
            setCurrentPayment("noncash");
            setShipment("courier");
          }}
          className={`px-4 py-2 rounded-md text-center ${
            shipment === "courier" ? "bg-blue-500" : "bg-gray-400"
          } shadow-lg text-white font-semibold mr-3`}
        >
          Courier Service
        </button>
      </div>
    </>
  );
};

const PaymentMethod = ({ dataState }) => {
  const { currentPayment, setShipment, setCurrentPayment } = dataState;
  return (
    <>
      {/*payment  */}
      <div className="font-semibold mt-5">Select Payment</div>
      <div className="flex flex-row py-3">
        <button
          onClick={() => {
            setCurrentPayment("cash");
            setShipment("cod");
          }}
          className={`px-4 py-2 rounded-md text-center ${
            currentPayment === "cash" ? "bg-blue-500" : "bg-gray-400"
          } shadow-lg text-white font-semibold mr-3`}
        >
          Cash
        </button>
        <button
          onClick={() => setCurrentPayment("noncash")}
          className={`px-4 py-2 rounded-md text-center ${
            currentPayment === "noncash" ? "bg-blue-500" : "bg-gray-400"
          } shadow-lg text-white`}
        >
          Non Cash
        </button>
      </div>
    </>
  );
};

export default Carts;
