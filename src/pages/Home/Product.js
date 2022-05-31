import React from "react";
import { ProductItem } from "../../components";

import { useDispatch } from "react-redux";
import { addItem } from "../../redux/Cart/action";

const Product = ({ dataProducts }) => {
  const dispatch = useDispatch();

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ">
        {dataProducts?.map((item) => {
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
