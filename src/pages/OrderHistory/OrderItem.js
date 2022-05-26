import React from "react";
import { Button } from ".././../components";
import { useNavigate } from "react-router-dom";
import dateFormat from "dateformat";

function OrderItem({ data }) {
  const { invoice_number, createdAt, total_price, payment_status, status } =
    data;
  const navigate = useNavigate();
  return (
    <>
      <div className="w-full lg:w-3/4 border border-gray-400 rounded-lg py-4 px-4 mb-4">
        <div className="flex flex-row justify-between">
          <div>
            <div className="font-semibold">Invoice #{invoice_number}</div>
            <div className="text-sm">{dateFormat(createdAt, "fullDate")}</div>
            <div
              className={`text-sm pt-2 font-semibold ${
                data.status === "SUCCESS" ? "text-green-500" : "text-yellow-500"
              }`}
            >
              {status}
            </div>
          </div>
          <div>
            <div className="text-semibold">Total Amount</div>
            <div className="font-semibold text-lg pb-2">Rp. {total_price}</div>
            <Button
              onPress={() => navigate(`/detail-order/${data.id}`)}
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
