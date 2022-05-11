import {
  ADD_PRODUCT,
  DELETE_PRODUCT,
  EDIT_PRODUCT,
  ERROR_FETCH,
  PROCESS_FETCH,
  FETCH_PRODUCT,
  SUCCESS_FETCH,
} from "./constant";

const initialState = {
  data: [],
  status: "idle",
};
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case PROCESS_FETCH:
      return { ...state, status: "loading" };
    case ERROR_FETCH:
      return { ...state, status: "error" };
    case FETCH_PRODUCT:
      return {
        ...state,
        status: "success",
        data: action.data,
      };
    case EDIT_PRODUCT:
      const { data } = action.data;
      if (state.data.find((item) => item.id === action.data.id)) {
        return {
          ...state,
          data: state.data.map((item) => ({
            ...item,
            name: item.id === data.id ? data.name : item.name,
            category_id:
              item.id === data.id ? data.category_id : item.category_id,
            price: item.id === data.id ? data.price : item.price,
            amount_stock:
              item.id === data.id ? data.amount_stock : item.amount_stock,
          })),
        };
      } else {
        return { ...state };
      }
    case ADD_PRODUCT:
      return {
        ...state,
        data: [action.data, ...state.data],
      };
    case DELETE_PRODUCT:
      return {
        ...state,
        data: state.data.filter((item) => item.id !== action.id),
      };
    default:
      return state;
  }
}
