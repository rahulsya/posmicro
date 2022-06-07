import { useState, useEffect } from "react";
import AlertToast from "../../../utils/toast";
import Api from "../../../api/address";
import FormAddress from "./FormAddres";
import InputAddress from "./InputAddress";

function Address() {
  const [toggleAdd, setToggleAdd] = useState(false);
  const [address, setAddress] = useState([]);

  const [editedAddres, setEditedAddress] = useState({});
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    Api.getAll()
      .then((res) => {
        setAddress(res.address);
      })
      .catch((err) => {
        AlertToast("error", err.message);
      });
  }, []);

  const deleteAddress = (id) => {
    Api.destroy(id)
      .then((response) => {
        AlertToast("success", response.status);
        setAddress(address.filter((item) => item.id !== id));
      })
      .catch((err) => {
        AlertToast("error", err.message);
      });
  };

  return (
    <div className="p-4 rounded shadow bg-white">
      <div className="text-xl pb-4 font-bold">Data Address</div>
      <hr className="pb-3" />
      <div
        onClick={() => {
          setToggleAdd(!toggleAdd);
        }}
        className="font-semibold cursor-pointer underline text-green-600"
      >
        Tambah Alamat
      </div>
      {toggleAdd === true && <FormAddress setAddress={setAddress} />}
      {/* edit */}
      {isEdit === true && (
        <InputAddress
          AddressState={{ address, setAddress, setIsEdit }}
          setData={setEditedAddress}
          data={editedAddres}
        />
      )}
      {/* form address */}
      {address?.map((item, index) => {
        return (
          <div
            key={index}
            className="my-2 rounded border-green-500 p-4 border bg-green-100 text-gray-700"
          >
            <div className="flex justify-between">
              <div className="font-semibold">{item.name}</div>
              <div
                onClick={() => deleteAddress(item.id)}
                className="font-semibold cursor-pointer underline text-red-600"
              >
                Hapus
              </div>
            </div>
            <div>{item.detail_address}</div>
            <div
              onClick={() => {
                setIsEdit(true);
                setEditedAddress(item);
              }}
              className="font-semibold cursor-pointer underline text-green-600"
            >
              Ubah Alamat
            </div>{" "}
          </div>
        );
      })}
    </div>
  );
}

export default Address;
