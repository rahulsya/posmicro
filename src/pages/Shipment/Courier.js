import React from "react";

function Courier() {
  return (
    <>
      <div className="text-lg pt-4 font-semibold">Select Courier</div>
      <hr />
      <div className="flex flex-row">
        <div className="py-3">
          <label className="font-semibold text-gray-800" htmlFor="category_id">
            Province
          </label>
          <select
            className="w-full py-3 px-4 rounded-md p-3 border-[1px]"
            id="cateogry_id"
          >
            <option value="">DKI JAKARTA</option>
            <option value="">Aceh</option>
            <option value="">DKI JAKARTA</option>
            <option value="">Aceh</option>
            <option value="">DKI JAKARTA</option>
            <option value="">Aceh</option>
            <option value="">DKI JAKARTA</option>
            <option value="">Aceh</option>
          </select>
        </div>
        <div className="px-3"></div>
        <div className="py-3">
          <label className="font-semibold text-gray-800" htmlFor="category_id">
            City
          </label>
          <select
            className="w-full py-3 px-4 rounded-md p-3 border-[1px]"
            id="cateogry_id"
          >
            <option value="">Jakarta Timur</option>
            <option value="">jakarta selatan</option>
          </select>
        </div>
        <div className="px-3"></div>
      </div>
      {/* courier service */}
      <div className="font-semibold">Select Services</div>
      <div className="flex flex-row mb-3">
        {["JNE", "TIKI", "POS indonesia"].map((item, index) => {
          return (
            <div
              key={index}
              className={`mr-3 cursor-pointer py-4 px-4 ${
                index === 0 ? "bg-blue-500" : "bg-gray-400"
              }  text-white shadow-lg rounded-lg text-sm`}
            >
              <div className="font-semibold text-xs">{item}</div>
            </div>
          );
        })}
      </div>
      {/* courier list */}
      <div className="font-semibold">Courier List</div>
      <div className="flex flex-row">
        <div className="cursor-pointer py-4 px-4 bg-blue-100 text-gray-500 shadow-lg rounded-lg text-sm">
          <div className="font-semibold text-xs">
            Next Day (JNE City Courier)
          </div>
          <div className="font-semibold">Estimasi 1-2 Hari</div>
          <div className="font-semibold">Rp. 15.000</div>
        </div>
        <div className="ml-3 cursor-pointer py-4 px-4 text-gray-800 bg-blue-400 shadow-lg rounded-lg text-sm">
          <div className="font-semibold  text-xs">
            Next Day (JNE City Courier)
          </div>
          <div className="font-semibold">Estimasi 1-2 Hari</div>
          <div className="font-semibold">Rp. 15.000</div>
        </div>
      </div>
    </>
  );
}

export default Courier;
