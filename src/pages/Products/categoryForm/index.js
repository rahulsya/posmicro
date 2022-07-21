import React, { useState } from "react";
import { Button, Input } from "../../../components";
import EditForm from "./EditForm";
import Categories from "./Categories";
import { useForm } from "react-hook-form";
import { AddCategory } from "../../../redux/Categories/action";
import { useSelector, useDispatch } from "react-redux";

function CategoryForm({ categoryState }) {
  const dispatch = useDispatch();
  const category = useSelector((state) => state.categories);
  const { setShowFormCategory } = categoryState;

  const [showEditCategory, setShowEditCategory] = useState(false);
  const [dataCategory, setDataCategory] = useState({});

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    const payload = {
      name: data.category,
    };
    dispatch(AddCategory(payload));
    reset();
  };
  return (
    <div data-testid="categories-card">
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
            {...register("category", { required: "category name is required" })}
            name="category"
            title="Category"
            placeholder="Category Name"
            errors={errors.category}
          />
          <div className="mt-5" />
          <Button bg="bg-green-500" title="Add Category " />
        </form>
      </div>
      <div>
        {showEditCategory && (
          <EditForm
            dataEditState={{
              setShowEditCategory,
              setDataCategory,
              dataCategory,
            }}
          />
        )}
      </div>
      {/* categoriers */}
      <div className="h-[32rem] mt-5 overflow-y-auto">
        <Categories
          dataEditState={{ setShowEditCategory, setDataCategory }}
          categories={category?.data}
        />
      </div>
    </div>
  );
}

export default CategoryForm;
