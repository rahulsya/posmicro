import React, { useState } from "react";
import dateFormat from "dateformat";
import { Button } from "../../components";
import order from "../../api/orders";

function Address({ address, data, userDetails }) {
  const [detailPayment, setDetailPayment] = useState(null);
  const onCheckPayment = () => {
    order
      .check_payment(data?.payment_id)
      .then((response) => {
        const { data } = response;
        setDetailPayment(data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  return (
    <div className="pt-3">
      <div>{dateFormat(data?.createdAt, "fullDate")}</div>
      <p className="font-semibold">{userDetails?.name}</p>
      <p>6285718927573</p>
      {address !== null && (
        <div className="p-4 border border-green-500 bg-green-100">
          <div className="font-semibold">{address?.name}</div>
          <div>{address?.detail_address}</div>
        </div>
      )}
      <div>{data?.shipping_destination}</div>

      <div className="font-semibold pt-3">Courier</div>
      <div>Shipping Code : {data?.courier_number}</div>
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
      {/* <div className="flex">
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
      </div> */}
      {/* check payment status */}
      {data?.payment_method === "NONCASH" && (
        <>
          <div className="font-semibold mt-4">Payment Status</div>
          <div>
            <Button
              onPress={() => onCheckPayment()}
              bg="bg-yellow-500"
              title="check status payment"
            />
            {detailPayment !== null && (
              <>
                <div className="flex pt-3">
                  payment type : {detailPayment?.payment_type}
                </div>
                <div className="flex">
                  transaction time : {detailPayment?.transaction_time}
                </div>
                <div className="flex mt-2">
                  transaction status :
                  <div
                    className={`ml-2 font-semibold rounded-xl px-2 py-1 text-white ${
                      detailPayment?.transaction_status ||
                      detailPayment?.capture === "settlement"
                        ? "bg-green-500"
                        : "bg-blue-400"
                    }`}
                  >
                    {detailPayment?.transaction_status}
                  </div>
                </div>
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default Address;
