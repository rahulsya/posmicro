import React, { useState } from "react";
import { useEffect } from "react";
import { Navbar, Header, CartItem, CompletedCard } from "../../components";
import Address from "./Address";
import Courier from "./Courier";
import SummaryCart from "./SummaryCart";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addItem, removeItem, clearItem } from "../../redux/Cart/action";
// import { toast } from "react-toastify";
import Toast from "../../utils/toast";
// api
import orders from "../../api/orders";
import user from "../../api/users";
import { updateStock } from "../../api/products/product";

function Shipment() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const carts = useSelector((state) => state.cart);

  const [status, setStatus] = useState("idle");

  const [DataUser, setDataUser] = useState(null);
  const [DataShipment, setDataShipment] = useState({
    courier_service: "",
    total_shipping: 0,
    shipping_estimation: "",
    shipping_destination: "",
    total_amount: 0,
    payment_method: "NONCASH",
    address_id: "",
  });

  const onSubmitPayment = () => {
    if (
      DataShipment.courier_service !== "" &&
      DataUser !== null &&
      DataShipment.address_id !== ""
    ) {
      setStatus("process");
      orders
        .create_order({
          products: carts,
          ...DataShipment,
          user_id: DataUser.id,
        })
        .then((response) => {
          Toast("success", response.message, {
            autoClose: 1000,
            position: "bottom-right",
          });
          manageOrders(carts);
          dispatch(clearItem());
          // call snap payment
          const { data } = response;
          const payload = {
            user: {
              name: DataUser?.name,
              email: DataUser?.email,
            },
            order: {
              id: data?.id,
              invoice: data?.invoice_number,
              total_price: data?.total_price,
            },
          };
          shapPayment(payload);
        })
        .catch((err) => {
          Toast("error", err.message, {
            autoClose: 1000,
            position: "bottom-right",
          });
          setStatus("error");
        });
    } else {
      Toast("error", "Please Complete The Order Form");
    }
  };

  const manageOrders = (data) => {
    updateStock(data)
      .then((response) => {
        Toast("success", response.message, {
          autoClose: 1000,
          position: "bottom-right",
        });
      })
      .catch((err) => {
        Toast("error", err.message, {
          autoClose: 1000,
          position: "bottom-right",
        });
      });
  };

  const shapPayment = async (data) => {
    const { token } = await orders.payment(data);
    if (!token) {
      Toast("error", "Payment is fail");
      return;
    }
    window.snap.pay(token, {
      onSuccess: function (result) {
        /* You may add your own implementation here */
        alert("payment success!");
        // console.log(result);
        orders
          .update_order(data?.order?.id, {
            payment_status: "SUCCESS",
            payment_id: result?.order_id,
          })
          .then((response) => {
            Toast("success", "payment completed");
            navigate(`/detail-order/${data?.order?.id}`);
          });
        setStatus("success");
      },
      onPending: function (result) {
        /* You may add your own implementation here */
        alert("wating your payment!");
        orders
          .update_order(data?.order?.id, {
            payment_status: "PROCESS",
            payment_id: result?.order_id,
          })
          .then((res) => {
            Toast("success", "order created");
            navigate(`/detail-order/${data?.order?.id}`);
          });
      },
      onError: function (result) {
        /* You may add your own implementation here */
        orders
          .update_order(data?.order?.id, {
            payment_status: "CANCEL",
            status: "CANCEL",
          })
          .then((response) => {
            Toast("success", "payment completed");
            navigate(`/detail-order/${data?.order?.id}`);
          });
        alert("payment failed!");
        // console.log(result);
      },
      onClose: function () {
        /* You may add your own implementation here */
        orders
          .update_order(data?.order?.id, {
            payment_status: "CANCEL",
            status: "CANCEL",
          })
          .then((response) => {
            Toast("error", "order cancel");
            navigate(`/detail-order/${data?.order?.id}`);
          });
        alert("you closed the popup without finishing the payment");
      },
    });
  };

  useEffect(() => {
    user
      .details()
      .then((response) => {
        const { data } = response;
        setDataUser(data);
      })
      .catch((err) => {
        Toast("error", err.message, {
          autoClose: 1000,
          position: "bottom-right",
        });
      });
  }, []);

  if (status === "success") {
    return <CompletedCard headerTitle="Shipment" />;
  }

  return (
    <div className="flex flex-row min-h-screen bg-slate-100">
      <Navbar />
      <div className="w-full container mx-auto pt-12 px-3 lg:px-16 mb-5">
        <Header title="Shipment"></Header>
        {carts.length > 0 && (
          <div className="flex flex-col lg:flex-row">
            <div className="w-full flex-col bg-white shadow-lg py-4 px-4 mt-5 rounded-lg">
              <Address data={{ setDataShipment, DataUser }} />
              <Courier DataState={{ DataShipment, setDataShipment, carts }} />
              {/* products */}
              <div className="text-lg pt-4 font-semibold">Products list</div>
              <hr className="mb-4" />
              <div className="h-[32rem] overflow-y-auto">
                {carts.map((cart, index) => {
                  return (
                    <CartItem
                      key={index}
                      onDec={() => dispatch(removeItem(cart))}
                      onInc={() => dispatch(addItem(cart))}
                      isShowAction={true}
                      item={cart}
                    />
                  );
                })}
              </div>
            </div>
            <div className="w-full lg:w-1/2 flex-col lg:mx-3">
              <SummaryCart
                dataState={{ DataShipment, setDataShipment }}
                onSubmitPayment={onSubmitPayment}
                data={{ carts }}
              />
            </div>
          </div>
        )}

        {/* carts is empty */}
        {carts.length <= 0 && status === "success" ? <div>Success</div> : ""}
        {carts.length <= 0 && <div>Carts is mepty</div>}
      </div>
    </div>
  );
}

export default Shipment;
