import React from "react";
import { Button } from "../../components";
import { formatNumber } from "../../utils/format-rupiah";
import sumPrice from "../../utils/sum-price";

function SummaryCart({ data }) {
  const { carts } = data;
  return (
    <>
      <div className="w-full bg-white shadow-lg py-4 px-4 mt-5 rounded-lg">
        <div className="text-lg font-semibold">Summary</div>
        <hr />
        <div className="pt-4 text-lg">
          <div className="flex justify-between">
            <div className="text-md ">SubTotal</div>
            <div className="text-sm xl:text-xl font-semibold">
              {formatNumber(sumPrice(carts))}
            </div>
          </div>
          <div className="flex justify-between">
            <div className="text-md ">Shipping</div>
            <div className="text-sm xl:text-xl font-semibold">Rp. 0</div>
          </div>
          <div className="flex justify-between">
            <div className="text-md ">Total</div>
            <div className="text-sm xl:text-xl font-semibold">
              {formatNumber(sumPrice(carts))}
            </div>
          </div>
        </div>

        <Button type="success" title="Continue To Payment" />
      </div>
    </>
  );
}

export default SummaryCart;
