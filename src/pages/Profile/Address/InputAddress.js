import { Button, Input } from "../../../components";
import Api from "../../../api/address";
import AlertToast from "../../../utils/toast";

function InputAddress({ data, setData, AddressState }) {
  const { address, setAddress, setIsEdit } = AddressState;

  const handeOnchange = (e) => {
    return setData((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };

  const onEditSubmit = () => {
    const payload = {
      name: data.name,
      detail_address: data.detail_address,
    };

    Api.update(data.id, payload)
      .then((response) => {
        setAddress(
          address.map((item) => ({
            ...item,
            name: item.id === data.id ? payload.name : item.name,
            detail_address:
              item.id === data.id
                ? payload.detail_address
                : item.detail_address,
          }))
        );
        AlertToast("success", "Address Successfully update");
        setIsEdit(false);
        setData({});
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // console.log(data);
  return (
    <div className="p-4 border mt-2 rounded">
      <div className="flex justify-between">
        <div>Edit Address</div>
        <div
          onClick={() => setIsEdit(false)}
          className="cursor-pointer underline text-red-600"
        >
          Cancel
        </div>
      </div>
      <Input
        value={data?.name}
        title="Name"
        name="name"
        onChange={handeOnchange}
      />
      <Input
        value={data?.detail_address}
        title="Detail Address"
        name="detail_address"
        onChange={handeOnchange}
      />
      <Button onPress={() => onEditSubmit()} bg="bg-green-500" title="Save" />
    </div>
  );
}

export default InputAddress;
