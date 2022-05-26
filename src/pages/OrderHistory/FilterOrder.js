import React from "react";
import { Input, Button } from "../../components";
import { SearchIC } from "../../assets/icons";

function FilterOrder() {
  return (
    <>
      <div>
        <div className="text-lg font-semibold">Filter Orders</div>
        <div className="mt-3 w-full lg:w-1/2">
          <div className="flex flex-row items-center">
            <Input
              name="keyword"
              title="Search Order"
              placeholder="Search Order"
            />
            <div className="px-1" />
            <Input title="Date Order" type="date" />
            <div className="mx-3 mt-3 px-6 py-3 border border-2 border-green-500 hover:shadow-lg bg-white rounded-lg cursor-pointer">
              <SearchIC />
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center">
          <div className="font-semibold mr-4">Status</div>
          <div className="cursor-pointer px-4 py-2 bg-green-100 text-green-700 border border-green-600 rounded-2xl mx-1">
            All
          </div>
          <div className="cursor-pointer px-2 text-gray-600 py-2 border rounded-2xl mx-1">
            Success
          </div>
          <div className="cursor-pointer px-2 text-gray-600 py-2 border rounded-2xl mx-1">
            Process
          </div>
          <div className="cursor-pointer px-2 text-gray-600 py-2 border rounded-2xl mx-1">
            Cancel
          </div>
        </div>
      </div>
    </>
  );
}

export default FilterOrder;
