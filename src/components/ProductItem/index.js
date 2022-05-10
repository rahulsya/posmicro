import React from "react";
import { formatNumber } from "../../utils/format-rupiah";

function ProductItem({ item, onClick }) {
  return (
    <>
      <div
        onClick={onClick}
        className="px-3 py-3 bg-white rounded-xl flex flex-col flex-wrap cursor-pointer hover:shadow-lg"
      >
        <img
          src={`${process.env.REACT_APP_IMAGE_URL}/${item?.image_url}`}
          alt="dummy"
          className="h-48 w-full object-cover"
        />
        <div className="pt-2 font-medium text-gray-800">{item.name}</div>
        <div className="pt-1 text-sm text-gray-500">
          Stocks : {item.amount_stock}
        </div>
        <div className="text-lg font-bold text-gray-800">
          {formatNumber(item.price)}
        </div>
      </div>
    </>
  );
}

export default ProductItem;
