import React, { useEffect, useState } from "react";
import { Navbar } from "../../components";
import Header from "./Header";
import OrderReport from "./Order-Report";
// api
import orders from "../../api/orders";
import { countProduct } from "../../api/products/product";

import AlerToast from "../../utils/toast";

function Dashboard() {
  const [dataReport, setDataReport] = useState(null);
  const [month] = useState(new Date().getMonth() + 1);

  useEffect(() => {
    orders
      .reports({ month })
      .then((response) => {
        const { status, ...data } = response;
        setDataReport({ ...data, month });
      })
      .catch((err) => {
        AlerToast("error", err.message);
      });
  }, [month]);

  const [dataOrders, setDataOrders] = useState([]);

  useEffect(() => {
    orders
      .order({
        status: "all",
      })
      .then((response) => {
        setDataOrders(response.data);
      })
      .catch((err) => {
        AlerToast("error", err.message);
      });
  }, []);

  const [productCount, setProductCount] = useState(0);
  useEffect(() => {
    countProduct()
      .then((response) => {
        setProductCount(response.product);
      })
      .catch((err) => {
        AlerToast("error", err.message);
      });
  }, []);

  return (
    <div className="flex flex-row min-h-screen bg-slate-100">
      <Navbar />
      <div className="w-full flex lg:flex-row flex-col">
        <div className="w-full pt-12 px-5 container mx-auto">
          <Header productCount={productCount} data={dataReport} />
          {/* order report */}
          <OrderReport dataState={{ dataOrders, setDataOrders }} />
        </div>
        <div className="w-full lg:w-1/2 pt-12 px-12"></div>
      </div>
    </div>
  );
}

export default Dashboard;
