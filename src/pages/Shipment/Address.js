import { useEffect, useState } from "react";
import Api from "../../api/address";
import { Button } from "../../components";
import { useNavigate } from "react-router-dom";

function Address({ data }) {
  const { DataUser, setDataShipment } = data;
  const [dataAddress, setDataAddress] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    Api.getAll()
      .then((response) => {
        setDataAddress(response.address);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="text-lg font-semibold">Shipping Address</div>
      <hr />
      <div className="pt-3">
        <p className="font-semibold">{DataUser?.name}</p>
        <p>{DataUser?.email}</p>
        <p>{DataUser?.phone_number}</p>
      </div>
      <div className="py-2">Pilih Alamat : </div>
      {dataAddress.length === 0 && (
        <Button
          onPress={() => navigate("/profile")}
          title="Tambah Alamat"
          bg="bg-green-500"
        />
      )}
      <div className="flex">
        {dataAddress?.map((item, index) => {
          return (
            <div
              onClick={() => {
                setSelectedAddress(item);
                setDataShipment((state) => ({ ...state, address_id: item.id }));
              }}
              key={index}
              className={`cursor-pointer mr-2 p-4 ${
                selectedAddress?.id === item.id ? `border-green-500` : ""
              } border-2 rounded bg-green-100`}
            >
              <div className="capitalize font-semibold">{item.name}</div>
              <div>{item.detail_address}</div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Address;
