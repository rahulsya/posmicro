import { SET_AUTH, CLEAR_AUTH, LOGOUT, SET_TOKEN } from "./constants";

const initial_state = localStorage.getItem("tokens")
  ? JSON.parse(localStorage.getItem("tokens"))
  : { email: "", refresh_token: "", status: "", token: "", role: "" };

export default function reducer(state = initial_state, action) {
  switch (action.type) {
    case SET_AUTH:
      return {
        ...state,
        ...action.data,
      };
    case SET_TOKEN:
      return {
        ...state,
        token: action.token,
      };
    case CLEAR_AUTH:
      return {
        ...state,
        email: "",
        refresh_token: "",
        status: "",
        token: "",
      };
    case LOGOUT:
      return {
        ...state,
        email: "",
        refresh_token: "",
        status: "",
        token: "",
      };
    default:
      return state;
  }
}