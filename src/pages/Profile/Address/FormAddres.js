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
    <div className="border p-4 rounded mt-2">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          {...register("name_address", {
            required: true,
          })}
          title="Name Address"
          name="name_address"
          type="text"
          placeholder="Name address"
          errors={errors.name}
        />
        <Input
          {...register("detail_address", {
            required: true,
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