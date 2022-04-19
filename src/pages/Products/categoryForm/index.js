import React from "react";
import { Button, Input } from "../../../components";
import Categories from "./Categories";

function CategoryForm({ categoryState }) {
  const { setShowFormCategory } = categoryState;
  return (
    <>
      <div className="flex flex-row justify-between mb-5">
        <div className="font-semibold text-xl">Manage Categories</div>
        <Button
          onPress={() => setShowFormCategory(false)}
          bg="bg-red-500"
          title="Close"
        />
      </div>
      <div>
        <Input
          name="category"
          title="Category"
          placeholder="Category Name"
          //   value={data?.name}
          //   onChange={handeOnchange}
        />
        <div className="mt-5" />
        <Button bg="bg-green-500" title="Add Category " />
      </div>
      {/* categoriers */}
      <Categories />
    </>
  );
}

export default CategoryForm;
