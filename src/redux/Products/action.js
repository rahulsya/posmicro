import {
  ADD_PRODUCT,
  DELETE_PRODUCT,
  EDIT_PRODUCT,
  ERROR_FETCH,
  PROCESS_FETCH,
  FETCH_PRODUCT,
  NEXT_PAGE,
  PREV_PAGE,
  IS_EMPTY,
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
  return async (dispatch, getState) => {
    // console.log(getState().manageProduct.page);
    let page = getState().manageProduct.page || 1;
    let params = {
      category: "all",
      page,
    };

    dispatch({ type: PROCESS_FETCH });
    products(params)
      .then((res) => {
        if (res.data.length === 0) {
          dispatch({ type: IS_EMPTY, status: true });
          return;
        }
        dispatch({ type: IS_EMPTY, status: false });
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

export const NextPages = () => {
  return {
    type: NEXT_PAGE,
  };
};

export const PrevPages = () => {
  return {
    type: PREV_PAGE,
  };
};

export const IsEmpty = () => {
  return {
    type: IS_EMPTY,
  };
};
