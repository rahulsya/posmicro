import { useState } from "react";
import orders from "../../api/orders";
import { Button, Input } from "../../components";
import ToastAlert from "../../utils/toast";

const statusOrders = ["all", "success", "process", "cancel"];

function FilterForm({ dataState }) {
  // state Orders report
  const { setDataOrders } = dataState;

  const [status, setStatus] = useState(statusOrders[0]);
  const [invoiceNumber, setInvoiceNumber] = useState("");

  const [isResetFilter, setIsResetFilter] = useState(false);

  const onSearch = (key) => {
    if (key === "Enter") {
      fetchData({ invoiceNumber, status: "all" });
    }
  };

  const fetchData = (params) => {
    // params as data object
    orders
      .order({ status: params?.status, invoice_number: params?.invoiceNumber })
      .then((response) => {
        setDataOrders(response.data);
        setIsResetFilter(true);
      })
      .catch((err) => {
        ToastAlert("error", err.message);
      });
  };

  return (
    <div>
      {isResetFilter === true && (
        <Button
          onPress={() => {
            setStatus("all");
            setInvoiceNumber("");
            fetchData({ status: "all" });
          }}
          bg="bg-green-500"
          title="Reset"
        />
      )}
      <div className="flex flex-row w-1/2 py-2">
        <Input
          value={invoiceNumber}
          onKeyDown={(e) => onSearch(e.key)}
          onChange={({ target }) => setInvoiceNumber(target.value)}
          title="Search Invoice Number"
          placeholder="invoice number"
        />
      </div>
      <div className="flex flex-row items-center">
        <div className="font-semibold mr-4">Status</div>
        {statusOrders.map((item, index) => {
          return (
            <div
              key={index}
              onClick={() => {
                setStatus(item);
                fetchData({ status: item });
              }}
              className={`capitalize cursor-pointer px-4 py-2 ${
                status === item
                  ? `bg-green-100 text-green-700 border-green-600`
                  : "bg-gray-50 text-gray-800"
              } border rounded-2xl mx-1`}
            >
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default FilterForm;
