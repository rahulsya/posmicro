import React from "react";
import { Button, Input } from "../../../components";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { addproducts } from "../../../api/products/product";

function InputForm({ setFormInput, setDataProduct }) {
  const category = useSelector((state) => state.categories);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const payload = new FormData();
    payload.append("name", data.name);
    payload.append("price", data.price);
    payload.append("stock", data.amount_stock);
    payload.append("category_id", data.category_id);
    payload.append("image", data.image[0]);
    addproducts(payload)
      .then((res) => {
        setDataProduct((oldState) => [...oldState, res.data]);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div className="flex flex-row justify-between mb-5">
        <div className="font-semibold text-xl">Add New Prodcut</div>
        <Button
          onPress={() => setFormInput((state) => !state)}
          bg="bg-red-500"
          title="Close"
        />
      </div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            {...register("name", { required: true })}
            name="name"
            title="Name"
            placeholder="Product Name"
            errors={errors.name}
          />
          <Input
            {...register("price", { required: true })}
            name="price"
            type="number"
            title="Price"
            placeholder="product price"
            errors={errors.price}
          />
          <Input
            {...register("amount_stock", { required: true })}
            name="amount_stock"
            type="number"
            title="Stock"
            placeholder="Product Stock"
            errors={errors.amount_stock}
          />
          <div className="pb-3">
            <label
              className="font-semibold text-gray-800"
              htmlFor="category_id"
            >
              Category Product
            </label>
            <select
              {...register("category_id", { required: true })}
              className="w-full py-3 px-4 rounded-md p-3 border-[1px]"
              id="cateogry_id"
            >
              {category?.data.map((item) => {
                return (
                  <option key={item.id} value={`${item.id}`}>
                    {item.name}
                  </option>
                );
              })}
            </select>
          </div>
          <Input
            {...register("image", { required: true })}
            name="image"
            type="file"
            title="Image"
            placeholder="Product Image"
            errors={errors.image}
          />
          <div className="mt-5" />
          <Button bg="bg-green-500" title="Add Product" />
        </form>
      </div>
    </>
  );
}

export default InputForm;
