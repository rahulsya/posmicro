import React from "react";

function OrderItem({ data }) {
  const { item, orderItem } = data;

  return (
    <div className="flex w-full justify-between flex-row py-3">
      <div className="flex flex-row">
        <img
          src={`${process.env.REACT_APP_IMAGE_URL}/${item?.image_url}`}
          alt={item.name}
          className="w-16 h-16 object-cover rounded-lg"
        />
        <div className="pl-3">
          <div>{item.name}</div>
          <div>
            {orderItem?.quantity} x {`Rp. ${item.price}`}
          </div>
        </div>
      </div>
      <div className="justify-self-end">
        <div>Total Price</div>
        <div>{`Rp. ${orderItem?.quantity * item.price}`}</div>
      </div>
    </div>
  );
}

export default OrderItem;
