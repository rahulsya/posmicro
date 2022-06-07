import React from "react";
import { Input, Button } from "../../components";
import { useForm } from "react-hook-form";
import AlertToast from "../../utils/toast";
import orders from "../../api/orders";

function ConfirmForm({ dataState }) {
  const { statusOrder, orderDetail, params, setOrderDetail } = dataState;
  const { register, handleSubmit } = useForm();

  const onUpdateOrder = (data) => {
    if (params?.id) {
      orders
        .update_order(params.id, data)
        .then((response) => {
          console.log(response);
          setOrderDetail((state) => ({
            ...state,
            status: response.data.status,
            courier_number: response.data.courier_number,
          }));
          AlertToast("success", "order status updated");
        })
        .catch((error) => {
          AlertToast("error", error.message);
        });
    }
  };

  return (
    <div className="mt-4 bg-white shadow-lg px-4 py-4 rounded-lg">
      <div className="text-lg font-semibold">Cofirmation Form</div>
      <hr />
      <div className="pt-4"></div>

      <form onSubmit={handleSubmit(onUpdateOrder)}>
        <Input
          {...register("courier_number", { required: true })}
          name="courier_number"
          title="Update Shipping Number"
          placeholder="shipping Number"
        />
        <div className="">
          <label className="font-semibold text-gray-800" htmlFor="status_order">
            Status Order
          </label>
          <select
            {...register("status", { required: true })}
            id="status_order"
            className="w-full py-3 px-4 rounded-md p-3 border-[1px]"
          >
            <option value="">Status Order</option>
            {statusOrder.map((item, index) => {
              return (
                <option
                  key={index}
                  selected={orderDetail?.status === item ? true : false}
                  value={item}
                >
                  {item}
                </option>
              );
            })}
          </select>
          <Button
            bg="bg-green-500 mt-3"
            type="btn-wfull"
            title="Update Order"
          />
        </div>
      </form>
    </div>
  );
}

export default ConfirmForm;
