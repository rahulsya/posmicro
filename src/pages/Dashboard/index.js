import React from "react";
import { Navbar } from "../../components";
import Header from "./Header";
import OrderReport from "./Order-Report";

function Dashboard() {
  return (
    <div className="flex flex-row min-h-screen bg-slate-100">
      <Navbar />
      <div className="w-full flex lg:flex-row flex-col">
        <div className="w-full pt-12 px-5 container mx-auto">
          <Header />
          {/* order report */}
          <OrderReport />
        </div>
        <div className="w-full lg:w-1/2 pt-12 px-12"></div>
      </div>
    </div>
  );
}

export default Dashboard;
