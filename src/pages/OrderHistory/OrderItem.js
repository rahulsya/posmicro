import React from "react";
import { Button } from ".././../components";
import { useNavigate } from "react-router-dom";

function OrderItem() {
  const navigate = useNavigate();
  return (
    <>
      <div className="w-full lg:w-3/4 border border-gray-400 rounded-lg py-4 px-4 mb-4">
        <div className="flex flex-row justify-between">
          <div>
            <div className="font-semibold">Invoice #110ABCD</div>
            <div className="text-sm">24 April 2020</div>
            <div className="text-sm font-semibold text-green-500">Success</div>
          </div>
          <div>
            <div className="text-semibold">Total Amount</div>
            <div className="font-semibold text-lg pb-2">Rp. 150.000</div>
            <Button
              onPress={() => navigate("/detail-order")}
              bg="bg-green-700"
              title="Detail Transaction"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default OrderItem;
