import { ADD_ITEM, REMOVE_ITEM, CLEAR_ITEMS, SET_ITEMS } from "./constant";

const intialState = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];

export default function reducer(state = intialState, action) {
  switch (action.type) {
    case ADD_ITEM:
      if (state.find((item) => item.id == action.item.id)) {
        return state.map((item) => {
          return {
            ...item,
            qty: item.id === action.item.id ? item.qty + 1 : item.qty,
          };
        });
      } else {
        return [...state, { ...action.item, qty: 1 }];
      }
    case REMOVE_ITEM:
      return state
        .map((item) => ({
          ...item,
          qty: item.id === action.item.id ? item.qty - 1 : item.qty,
        }))
        .filter((item) => item.qty > 0);
    case CLEAR_ITEMS:
      return [];
    default:
      return state;
  }
}
