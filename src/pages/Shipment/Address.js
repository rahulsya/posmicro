import React from "react";

function Address({ data }) {
  return (
    <>
      <div className="text-lg font-semibold">Shipping Address</div>
      <hr />
      <div className="pt-3">
        <p className="font-semibold">{data?.name}</p>
        <p>6285718927573</p>
        <div>{data?.address}</div>
      </div>
    </>
  );
}

export default Address;
