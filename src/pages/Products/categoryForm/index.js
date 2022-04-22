import React, { useEffect, useState } from "react";
import { Button, Input } from "../../../components";
import Categories from "./Categories";
import { useForm } from "react-hook-form";
import {
  addCategory,
  categories as allCategory,
} from "../../../api/products/category";

function CategoryForm({ categoryState }) {
  const { setShowFormCategory } = categoryState;
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    allCategory()
      .then((res) => {
        const { data } = res;
        setCategories(data);
      })
      .catch((err) => {
        console.log(`err ${err}`);
      });
  }, []);

  const onSubmit = (data) => {
    addCategory({ name: data.category })
      .then((res) => {
        setCategories([...categories, res.data]);
        reset();
      })
      .catch((err) => console.log(err));
  };
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
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            {...register("category", { required: true })}
            name="category"
            title="Category"
            placeholder="Category Name"
            errors={errors.category}
          />
          <div className="mt-5" />
          <Button bg="bg-green-500" title="Add Category " />
        </form>
      </div>
      {/* categoriers */}
      <div className="h-[32rem] mt-5 overflow-y-auto">
        <Categories categories={categories} />
      </div>
    </>
  );
}

export default CategoryForm;
