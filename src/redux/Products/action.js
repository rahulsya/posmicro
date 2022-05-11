import {
  ADD_PRODUCT,
  DELETE_PRODUCT,
  EDIT_PRODUCT,
  ERROR_FETCH,
  PROCESS_FETCH,
  FETCH_PRODUCT,
  SUCCESS_FETCH,
} from "./constant";
import {
  addproducts,
  products,
  deleteProduct,
} from "../../api/products/product";

import toast from "../../utils/toast";

export const AddProduct = (data) => {
  return async (dispatch) => {
    addproducts(data)
      .then((response) => {
        toast("success", "success add new product");
        dispatch({ type: ADD_PRODUCT, data: response.data });
      })
      .catch((err) => {
        return toast("error", err.response.data.message);
      });
  };
};

export const EditProduct = (id, data) => {
  return async (dispatch) => {
    dispatch({ type: EDIT_PRODUCT, data: { data, id } });
    // editProduct(id, data)
    //   .then((res) => {
    //   })
    //   .catch((err) => toast("error", err.response.data.message));
  };
};

export const fetchProduct = () => {
  return async (dispatch) => {
    dispatch({ type: PROCESS_FETCH });
    products()
      .then((res) => {
        dispatch({ type: FETCH_PRODUCT, data: res.data });
      })
      .catch((err) => {
        dispatch({ type: ERROR_FETCH });
        toast("error", err.response.data.message);
      });
  };
};

export const DeleteProduct = (id) => {
  return async (dispatch) => {
    deleteProduct(id)
      .then((res) => {
        toast("success", "success delete product");
        dispatch({ type: DELETE_PRODUCT, id });
      })
      .catch((err) => {
        toast("error", err.response.data.message);
      });
  };
};
