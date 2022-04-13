import React from "react";
import { ProductItem } from "../../components";

import { product } from "../../data/data";
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/Cart/action";

const Product = () => {
  const dispatch = useDispatch();

  return (
    <>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 ">
        {product.map((item) => {
          return (
            <ProductItem
              onClick={() => dispatch(addItem(item))}
              key={item.id}
              item={item}
            />
          );
        })}
      </div>
    </>
  );
};

export default Product;
