import React from "react";
import { Button, Input } from "../../../components";

function InputForm({ setFormInput }) {
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
        <Input name="name" title="Name" placeholder="Product Name" />
        <Input
          name="price"
          type="number"
          title="Price"
          placeholder="product price"
        />
        <Input
          name="stock"
          type="number"
          title="Stock"
          placeholder="Product Stock"
        />
        <div className="pb-3">
          <label className="font-semibold text-gray-800" htmlFor="category_id">
            Category Product
          </label>
          <select
            className="w-full py-3 px-4 rounded-md p-3 border-[1px]"
            id="cateogry_id"
          >
            <option value="">sticker materials</option>
            <option value="">sticker materials</option>
            <option value="">sticker materials</option>
          </select>
        </div>
        <Input
          name="image"
          type="file"
          title="Image"
          placeholder="Product Image"
        />
        <div className="mt-5" />
        <Button bg="bg-green-500" title="Add Product" />
      </div>
    </>
  );
}

export default InputForm;
