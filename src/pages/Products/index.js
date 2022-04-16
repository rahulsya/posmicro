import React, { useState } from "react";
import { Navbar, ProductItem, Button } from "../../components";
import ProductForm from "./productForm";
import { product } from "../../data/data";

function Products() {
  const [showFormInput, setShowFormInput] = useState(false);

  const [showFormEdit, setShowFromEdit] = useState(false);
  const [dataProduct, setDataProduct] = useState({});

  return (
    <div className="flex flex-row min-h-screen bg-gray-100">
      <Navbar />
      <div className="w-full flex lg:flex-row flex-col">
        <div className="w-full pt-12 px-4 container mx-auto">
          <div className="text-2xl font-semibold text-gray-700 mb-5">
            Products Management
          </div>
          <div className="actions flex flex-row mb-5">
            <Button
              title="Add Product"
              onPress={() => {
                setShowFormInput(true);
                setShowFromEdit(false);
              }}
            />
            <Button title="Add Category" />
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-4 ">
            {product.map((item) => {
              return (
                <ProductItem
                  onClick={() => {
                    setShowFromEdit(true);
                    // close active form
                    setShowFormInput(false);
                    setDataProduct(item);
                  }}
                  key={item.id}
                  item={item}
                />
              );
            })}
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
      </div>
    </div>
  );
}

export default Products;
