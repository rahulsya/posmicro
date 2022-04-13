import { useState } from "react";
import { CartItem, Button } from "../../components";
import { EmptyIL } from "../../assets/icons";

import { useSelector, useDispatch } from "react-redux";
import { addItem, removeItem, clearItem } from "../../redux/Cart/action";

import sumPrice from "../../utils/sum-price";
import { formatNumber } from "../../utils/format-rupiah";

function Carts() {
  const dispatch = useDispatch();
  const carts = useSelector((state) => state.cart);
  const [currentPayment, setCurrentPayment] = useState("cash");
  return (
    <>
      <div className="w-full">
        <button
          onClick={() => dispatch(clearItem())}
          className="font-bold justify-end underline text-gray-600 underline-offset-4 pb-3"
        >{`Clear Carts >`}</button>

        <div className="h-[32rem] overflow-y-auto">
          {carts.length > 0 ? (
            carts.map((item, index) => {
              return (
                <CartItem
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
        {/*payment  */}
        <div className="font-semibold mt-5">Select Payment</div>
        <div className="flex flex-row py-3">
          <button
            onClick={() => setCurrentPayment("cash")}
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

        <hr />
        <Button type="success" title="Complete Transaction" />
      </div>
    </>
  );
}

export default Carts;
