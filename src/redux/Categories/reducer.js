import {
  FETCH_ITEM,
  PROCESS_FETCH,
  ERROR_FETCH,
  ADD_CATEGORIES,
  EDIT_CATEGORIES,
  DELETE_CATEGORIES,
} from "./constant";
const initalState = {
  data: [],
  status: "idle",
};

export default function reducer(state = initalState, action) {
  switch (action.type) {
    case PROCESS_FETCH:
      return { ...state, status: "loading" };
    case ERROR_FETCH:
      return { ...state, status: "error" };
    case FETCH_ITEM:
      return {
        ...state,
        status: "success",
        data: action.data,
      };
    case ADD_CATEGORIES:
      return {
        ...state,
        data: [...state.data, action.data],
      };
    case EDIT_CATEGORIES:
      if (state.data.find((item) => item.id === action.data.id)) {
        return {
          ...state,
          data: state.data.map((item) => ({
            ...item,
            name: item.id === action.data.id ? action.data.data : item.name,
          })),
        };
      } else {
        return { ...state };
      }

    case DELETE_CATEGORIES:
      return {
        ...state,
        data: state.data.filter((item) => item.id != action.id),
      };
    default:
      return state;
  }
}
