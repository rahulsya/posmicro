import { SET_AUTH, GET_DATA_AUTH } from "./constants";
import user from "../../api/users";

export const setAuth = (data) => {
  return {
    type: SET_AUTH,
    data,
  };
};

export const getDataAuth = () => {
  return async (dispatch) => {
    user
      .details()
      .then((response) => {
        const { data } = response;
        dispatch({ type: GET_DATA_AUTH, data });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
