import {
  PROCESS_FETCH,
  ERROR_FETCH,
  FETCH_ITEM,
  ADD_CATEGORIES,
  EDIT_CATEGORIES,
  DELETE_CATEGORIES,
} from "./constant";
import {
  categories,
  addCategory,
  editCategory,
  deleteCategory,
} from "../../api/products/category";
import toast from "../../utils/toast";

export const fetchCategories = () => {
  return async (dispatch) => {
    dispatch({ type: PROCESS_FETCH });
    try {
      const category = await categories();
      dispatch({ type: FETCH_ITEM, data: category.data });
    } catch (error) {
      dispatch({ type: ERROR_FETCH });
    }
  };
};

export const AddCategory = (data) => {
  return async (dispatch) => {
    try {
      const payload = await addCategory(data);
      dispatch({ type: ADD_CATEGORIES, data: payload.data });
    } catch (error) {
      dispatch({ type: ERROR_FETCH });
    }
  };
};

export const UpdateCategory = (id, data) => {
  return async (dispatch) => {
    editCategory(id, { name: data })
      .then((res) => {
        if (res) {
          console.log(res);
          dispatch({ type: EDIT_CATEGORIES, data: { data, id } });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const DeleteCategory = (id) => {
  return async (dispatch) => {
    deleteCategory(id)
      .then((res) => {
        if (res) {
          dispatch({ type: DELETE_CATEGORIES, id });
        }
      })
      .catch((err) => {
        // console.log(err.response.data.message);
        toast("error", err.response.data.message);
      });
  };
};
