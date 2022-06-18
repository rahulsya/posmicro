import React from "react";
import { Button } from "../../components";
import dateFormat from "dateformat";
import { useNavigate } from "react-router-dom";
import FilterForm from "./FilterForm";

function OrderReport({ dataState }) {
  const { dataOrders, setDataOrders } = dataState;
  // console.log(data);
  const navigate = useNavigate();

  return (
    <div className="mt-12 p-8 bg-white shadow-xl rounded text-gray-800">
      <div className="flex flex-row justify-between font-semibold text-xl items-center">
        <div className="">Order Report</div>
        <div className="text-lg">Filter Order</div>
      </div>
      <FilterForm dataState={{ setDataOrders }} />
      <div className="mt-4">
        <table className="w-full table-auto">
          <thead>
            <tr className="font-semibold text-lg">
              <td className="border-b pb-3">InvoiceNumber</td>
              <td className="border-b pb-3">Total Payment</td>
              <td className="border-b pb-3">Date</td>
              <td className="border-b pb-3">Status </td>
            </tr>
          </thead>

          <tbody>
            {dataOrders?.map((report, index) => {
              return (
                <tr key={index} className="text-gray-700">
                  <td className="py-4 border-b bg-gray-50">
                    #{report?.invoice_number}
                  </td>
                  {/* <td className="py-4 border-b bg-gray-50">{report.product}</td> */}
                  <td className="py-4 border-b bg-gray-50">
                    Rp {report.total_price}
                  </td>
                  <td className="py-4 border-b bg-gray-50">
                    {dateFormat(report?.createdAt, "fullDate")}
                  </td>
                  <td className="py-4 border-b bg-gray-50">
                    <Button
                      onPress={() => navigate(`/detail-order/${report?.id}`)}
                      type={`${
                        report?.status === "SUCCESS"
                          ? "btn-completed"
                          : "btn-pending"
                      }`}
                      title={report?.status}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {dataOrders.length === 0 && (
          <div className="capitalize w-full flex justify-center py-3 font-semibold">
            <div>data is empty</div>
          </div>
        )}

        <div>Pagination here</div>
      </div>
    </div>
  );
}

export default OrderReport;
