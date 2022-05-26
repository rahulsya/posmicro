import React from "react";
import { Button } from "../../components";
import { formatNumber } from "../../utils/format-rupiah";

function ProductItem({
  item,
  onClick,
  actionButtons,
  actionEdit,
  actionDelete,
}) {
  return (
    <>
      <div
        key={item.id}
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
        {actionButtons && (
          <div className="flex flex-row justify-end -mr-3 items-end self-end">
            <Button onPress={actionDelete} bg="bg-red-400" title="Delete" />
            <Button onPress={actionEdit} bg="bg-blue-400" title="Edit" />
          </div>
        )}
      </div>
    </>
  );
}

export default ProductItem;
