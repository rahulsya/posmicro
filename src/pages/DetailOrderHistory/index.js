import React, { useState, useEffect } from "react";
import { Navbar, Header, Input, Button } from "../../components";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";

import { formatNumber } from "../../utils/format-rupiah";
import AlertToast from "../../utils/toast";
import order from "../../api/orders";
import users from "../../api/users";
import OrderItem from "./OrderItem";
import Address from "./Address";

function DetailOrderHistory() {
  const params = useParams();
  const [orderDetail, setOrderDetail] = useState(null);
  const [productOrders, setProductOrders] = useState([]);
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    if (params.id) {
      order
        .orderDetail(params.id)
        .then((response) => {
          setOrderDetail(response.order);
          const ids = response.order.OrderItems.map((item) => item.product_id);
          // get products orders
          order
            .product_order({ productsId: ids })
            .then((res) => {
              setProductOrders(res.data);
            })
            .catch((err) => {
              AlertToast("error", err.message);
            });

          // get users profile
          users
            .getUser(response.order.user_id)
            .then((res) => {
              setUserDetails(res.data);
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch((err) => {
          AlertToast("error", err.message);
        });
    }
    return;
  }, [params]);

  const statusOrder = ["COMPLETED", "PROCESS", "CANCEL"];
  const { register, handleSubmit } = useForm();

  const onUpdateOrder = (data) => {
    console.log(data);
  };

  return (
    <>
      <div className="flex flex-row min-h-screen bg-slate-100">
        <Navbar />
        <div className="w-full container mx-auto pt-12 px-3 lg:px-16">
          <Header title="Order #00123890"></Header>
          <div className="mt-4 flex flex-col md:flex-row">
            <div className=" flex flex-col w-full px-4 py-5 rounded-lg shadow-xl bg-white">
              <div className="">
                <div className="text-lg font-semibold">
                  Shipping Information
                </div>
                <hr />
                <Address userDetails={userDetails} data={orderDetail} />
              </div>
              <div className="text-lg font-semibold mt-5">Detail Product</div>
              <hr />
              {productOrders.map((item, index) => {
                const orderItem = orderDetail.OrderItems.find(
                  (order) => order.product_id === item.id
                );
                return <OrderItem key={index} data={{ item, orderItem }} />;
              })}
            </div>

            <div className="w-full md:w-1/2 lg:mx-3">
              <div className="bg-white shadow-lg px-4 py-4 rounded-lg">
                <div className="text-lg font-semibold">Detail Payment</div>
                <hr />
                <div className="pt-4 text-lg">
                  <div className="flex justify-between">
                    <div className="text-md ">SubTotal</div>
                    <div className="text-sm xl:text-xl font-semibold">
                      {formatNumber(
                        orderDetail?.total_price - orderDetail?.total_shipping
                      )}
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <div className="text-md ">Shipping</div>
                    <div className="text-sm xl:text-xl font-semibold">
                      {formatNumber(orderDetail?.total_shipping)}
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <div className="text-md ">Total</div>
                    <div className="text-sm xl:text-xl font-semibold">
                      {formatNumber(orderDetail?.total_price)}
                    </div>
                  </div>
                </div>
              </div>
              {/* show if user with acces admin  */}
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
                    <label
                      className="font-semibold text-gray-800"
                      htmlFor="status_order"
                    >
                      Status Order
                    </label>
                    <select
                      {...register("status", { required: true })}
                      id="status_order"
                      className="w-full py-3 px-4 rounded-md p-3 border-[1px]"
                    >
                      <option value="">Status Order</option>
                      {statusOrder.map((item) => {
                        return (
                          <option
                            selected={
                              orderDetail?.status === item ? true : false
                            }
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DetailOrderHistory;
