import React from "react";
import { HomeIC, DashboardIC } from "../../assets/icons";

function Header() {
  return (
    <div>
      <div className="flex flex-col font-bold text-3xl">
        <div className="text-gray-700 pb-2">Dashboard</div>
        <div className="text-gray-600 text-sm font-normal pb-5">
          Saturday, 16 April 2022
        </div>
        <hr />
      </div>
      <div className="grid grid-cols-3 gap-4 mt-8 text-gray-600">
        <div className="p-4 bg-white shadow-xl flex flex-col rounded">
          <div>
            <HomeIC />
          </div>
          <div className="pt-2 font-semibold text-3xl">Rp. 1.500.000</div>
          <div className="text-lg pt-2">Total Revenue / April 2022</div>
        </div>
        <div className="p-4 bg-white shadow-xl flex flex-col rounded">
          <div>
            <DashboardIC />
          </div>
          <div className="pt-2 font-semibold text-3xl">45</div>
          <div className="text-lg pt-2">Total Products </div>
        </div>
        <div className="p-4 bg-white shadow-xl flex flex-col rounded">
          <div>
            <HomeIC />
          </div>
          <div className="pt-2 font-semibold text-3xl">100</div>
          <div className="text-lg pt-2">Total Orders / April 2022</div>
        </div>
      </div>
    </div>
  );
}

export default Header;
