import { ADD_ITEM, REMOVE_ITEM, CLEAR_ITEMS } from "./constant";

export function addItem(item) {
  return {
    type: ADD_ITEM,
    item,
  };
}

export function removeItem(item) {
  return {
    type: REMOVE_ITEM,
    item,
  };
}

export function clearItem() {
  return {
    type: CLEAR_ITEMS,
  };
}
