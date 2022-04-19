import React from "react";

const CartItem = ({ item, onInc, onDec }) => {
  return (
    <>
      <div className="mb-4">
        <div className="flex flex-row">
          <div className="w-1/4">
            <img
              src={item.image}
              alt="dummy product"
              className="w-24 h-24 object-cover rounded-lg"
            />
          </div>
          <div className="flex flex-col justify-between text-gray-800 w-full bg-gray-">
            <div>
              <p className="font-semibold">{item.name}</p>
              <p className="font-bold">Rp{item.price}</p>
            </div>
            <div className="flex flex-col items-end font-semibold">
              <div className="pr-8 pb-3">Amount</div>
              <div className="flex items-center text-gray-800 ">
                <button
                  onClick={onDec}
                  className="w-9 py-2 rounded-lg text-center bg-gray-400 text-white font-bold"
                >
                  -
                </button>
                <div className="px-4">{item.qty}</div>
                <button
                  onClick={onInc}
                  className="w-9 py-2 rounded-lg text-center bg-blue-500 text-white font-bold"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;
