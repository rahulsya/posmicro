import React, { useEffect, useState } from "react";
import { Navbar, ProductItem, Button } from "../../components";
import ProductForm from "./productForm";
import CategoryForm from "./categoryForm";
// import { product } from "../../data/data";
import { products as allProduct } from "../../api/products/product";
// redux
import { useDispatch } from "react-redux";
import { fetchCategories } from "../../redux/Categories/action";

function Products() {
  const dispatch = useDispatch();

  const [showFormInput, setShowFormInput] = useState(false);
  const [showFormEdit, setShowFromEdit] = useState(false);
  const [showFormCategory, setShowFormCategory] = useState(false);
  const [dataProduct, setDataProduct] = useState({});

  // data products from api
  const [products, setProducts] = useState([]);

  useEffect(() => {
    dispatch(fetchCategories());
    allProduct()
      .then((response) => {
        setProducts(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="flex flex-row min-h-screen bg-slate-100">
      <Navbar />
      <div className="w-full flex lg:flex-row flex-col">
        <div className="w-full pt-12 px-4 container mx-auto">
          <div className="text-3xl font-bold text-gray-700 mb-5">
            Products Management
          </div>
          <hr className="pb-3" />
          <div className="actions flex flex-row mb-5">
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
          <div className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-4 ">
            {products.map((item) => {
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
                setProducts,
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
