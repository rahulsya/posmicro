import React, { useEffect, useState } from "react";
import { Navbar, ProductItem, Button } from "../../components";
import ProductForm from "./productForm";
import CategoryForm from "./categoryForm";
// redux
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../../redux/Categories/action";
import {
  fetchProduct,
  DeleteProduct,
  NextPages,
  PrevPages,
} from "../../redux/Products/action";

function Products() {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.manageProduct);
  const category = useSelector((state) => state.categories);

  const [showFormInput, setShowFormInput] = useState(false);
  const [showFormEdit, setShowFromEdit] = useState(false);
  const [showFormCategory, setShowFormCategory] = useState(false);
  const [dataProduct, setDataProduct] = useState({});

  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch, products.page]);

  useEffect(() => {
    if (!category.data.length) {
      dispatch(fetchCategories());
    }
    return;
  }, [category.data, dispatch]);

  return (
    <div className="flex flex-row min-h-screen bg-slate-100">
      <Navbar />
      <div className="w-full flex lg:flex-row flex-col">
        <div className="w-full pt-12 px-4 container mx-auto">
          <div className="text-3xl font-bold text-gray-700 mb-5">
            Products Management
          </div>
          <hr className="pb-3" />
          <div className="actions flex flex-row justify-between mb-5">
            <div>
              <Button
                title="Add Product"
                onPress={() => {
                  setShowFormInput(true);
                  setShowFromEdit(false);
                }}
              />
              <Button
                onPress={() => {
                  // setShowFromEdit(false);
                  // setShowFormInput(false);
                  setShowFormCategory(true);
                }}
                bg="bg-yellow-600"
                title="Manage Categories"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-4 ">
              {products.data?.map((item, index) => {
                return (
                  <ProductItem
                    key={index}
                    actionButtons
                    actionEdit={() => {
                      setShowFromEdit(true);
                      // close active form
                      setShowFormInput(false);
                      setDataProduct(item);
                    }}
                    actionDelete={() => {
                      dispatch(DeleteProduct(item.id));
                    }}
                    item={item}
                  />
                );
              })}
            </div>

            <div className="flex flex-row my-4 justify-end">
              <Button
                disabled={products.page === 1 ? true : false}
                onPress={() => {
                  dispatch(PrevPages());
                }}
                bg="border-2 border-green-400 bg-gray-200 text-gray-600"
                title="Previous"
              />
              <Button
                disabled={products.isEmpty}
                onPress={() => {
                  dispatch(NextPages());
                }}
                bg="border-2 border-green-400 bg-gray-200 text-gray-600"
                title="Next"
              />
            </div>
          </div>
        </div>
        {/* form input here */}
        {showFormInput || showFormEdit ? (
          <div className="bg-gray-50 w-full lg:w-1/2 pt-12 px-12">
            <ProductForm
              editState={{
                showFormEdit,
                setShowFromEdit,
                dataProduct,
                setDataProduct,
              }}
              inputState={{
                showFormInput,
                setShowFormInput,
              }}
            />
          </div>
        ) : null}

        {showFormCategory && (
          <div className="bg-gray-50 w-full lg:w-2/5 pt-12 px-5 border-l-2">
            <CategoryForm
              categoryState={{
                setShowFormCategory,
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default Products;
