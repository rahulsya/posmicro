import { SET_AUTH } from "./constants";

export const setAuth = (data) => {
  return {
    type: SET_AUTH,
    data,
  };
};
