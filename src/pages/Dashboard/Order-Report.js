import React from "react";
import { Button } from "../../components";

const reports = [
  {
    id: 1,
    invoice: "#00117042020",
    product: "2x Maxdecal Green 1/m",
    total: "150000",
    date: "17/04/2022",
    status: "Completed",
  },
  {
    id: 2,
    invoice: "#00117042020",
    product: "2x Maxdecal Green 1/m",
    total: "178000",
    date: "17/04/2022",
    status: "Pending",
  },
  {
    id: 3,
    invoice: "#00117042020",
    product: "2x Maxdecal Green 1/m",
    total: "150000",
    date: "17/04/2022",
    status: "Pending",
  },
  {
    id: 4,
    invoice: "#00117042020",
    product: "3x Maxdecal Green 1/m",
    total: "150000",
    date: "17/04/2022",
    status: "Pending",
  },
];

function OrderReport() {
  return (
    <div className="mt-12 p-8 bg-white shadow-xl rounded text-gray-800">
      <div className="flex flex-row justify-between font-semibold text-xl items-center">
        <div className="">Order Report</div>
        <div className="text-lg">Filter Order</div>
      </div>
      <div>filter form here</div>
      <div className="mt-4">
        <table className="w-full table-auto">
          <thead>
            <tr className="font-semibold text-lg">
              <td className="border-b pb-3">InvoiceNumber</td>
              <td className="border-b pb-3">Products</td>
              <td className="border-b pb-3">Total Payment</td>
              <td className="border-b pb-3">Date</td>
              <td className="border-b pb-3">Status </td>
            </tr>
          </thead>
          <tbody>
            {reports.map((report, index) => {
              return (
                <tr className="text-gray-700">
                  <td className="py-4 border-b bg-gray-50">{report.invoice}</td>
                  <td className="py-4 border-b bg-gray-50">{report.product}</td>
                  <td className="py-4 border-b bg-gray-50">
                    Rp {report.total}
                  </td>
                  <td className="py-4 border-b bg-gray-50">{report.date}</td>
                  <td className="py-4 border-b bg-gray-50">
                    <Button type="btn-completed" title="Completed" />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div>Pagination here</div>
      </div>
    </div>
  );
}

export default OrderReport;
