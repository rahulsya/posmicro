import React from "react";
import dateFormat from "dateformat";

function Address({ data, userDetails }) {
  return (
    <div className="pt-3">
      <div>{dateFormat(data?.createdAt, "fullDate")}</div>
      <p className="font-semibold">{userDetails?.name}</p>
      <p>6285718927573</p>
      <div>{userDetails?.address}</div>
      <div>{data?.shipping_destination}</div>

      <div className="font-semibold pt-3">Courier</div>
      <div>Shipping Code : -</div>
      <div>{data?.courier_service}</div>
      <div>Estimation : {data?.shipping_estimation} day</div>

      <div className="font-semibold pt-3">Order Status</div>
      <div className="flex">
        Status Order :{" "}
        <div
          className={`font-semibold ${
            data?.status === "SUCCESS" ? "text-green-500" : "text-yellow-500"
          } `}
        >
          {data?.status}
        </div>
      </div>
      <div className="flex">
        Status Payment :{" "}
        <div
          className={`font-semibold ${
            data?.payment_status === "SUCCESS"
              ? "text-green-500"
              : "text-yellow-500"
          } `}
        >
          {data?.payment_status}
        </div>
      </div>
    </div>
  );
}

export default Address;
