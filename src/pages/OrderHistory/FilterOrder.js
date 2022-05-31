import React, { useState } from "react";
import { Input } from "../../components";
import ToastAlert from "../../utils/toast";
import orders from "../../api/orders";

const statusOrders = ["all", "success", "process", "cancel"];

function FilterOrder({ dataState }) {
  const { setOrders } = dataState;
  const [status, setStatus] = useState(statusOrders[0]);
  const [date, setDate] = useState(null);

  const HandleChange = (params) => {
    orders
      .order({ status: params.status, date: params.date })
      .then((response) => {
        setOrders(response.data);
      })
      .catch((err) => {
        ToastAlert("error", err.message);
      });
  };

  return (
    <>
      <div>
        <div className="text-lg font-semibold">Filter Orders</div>
        <div className="mt-3 w-full lg:w-1/2">
          <div className="flex flex-row items-center">
            <Input
              onChange={({ target }) => {
                setDate(target.value);
                HandleChange({ status, date: target.value });
              }}
              title="Date Order"
              type="date"
            />
          </div>
        </div>
        <div className="flex flex-row items-center">
          <div className="font-semibold mr-4">Status</div>
          {statusOrders.map((item, index) => {
            return (
              <div
                key={index}
                onClick={() => {
                  setStatus(item);
                  HandleChange({ status: item, date });
                }}
                className={`cursor-pointer px-4 py-2 ${
                  status === item
                    ? `bg-green-100 text-green-700 border-green-600`
                    : "bg-gray-50 text-gray-800"
                } border rounded-2xl mx-1`}
              >
                {item}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default FilterOrder;
