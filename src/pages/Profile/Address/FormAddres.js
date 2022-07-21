import { Input, Button } from "../../../components";
import { useForm } from "react-hook-form";
import AlertToast from "../../../utils/toast";
import Api from "../../../api/address";

function FormAddres({ setAddress }) {
  // const { address, setAddress } = stateAddress;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const payload = {
      name: data.name_address,
      detail_address: data.detail_address,
    };

    Api.store(payload)
      .then((response) => {
        setAddress((state) => [response.address, ...state]);
        // setAddress([...address,address.find(item)])
        // console.log(response);
      })
      .catch((error) => {
        AlertToast("error", error.message);
      });
    reset();
  };

  return (
    <div data-testid="add_address" className="border p-4 rounded mt-2">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          {...register("name_address", {
            required: "name address is required",
          })}
          title="Name Address"
          name="name_address"
          type="text"
          placeholder="Name address"
          errors={errors.name_address}
        />
        <Input
          {...register("detail_address", {
            required: "detail address is required",
          })}
          title="Address Detail"
          name="detail_address"
          type="text-area"
          placeholder="Name address"
          errors={errors.detail_address}
        />
        <Button bg="bg-green-500" title="Simpan" />
      </form>
    </div>
  );
}

export default FormAddres;
