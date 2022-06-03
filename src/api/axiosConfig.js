import axios from "axios";
import ErrorHandler from "./errorHandler";

const instance = axios.create({
  Accept: "application/json",
  baseURL: `${process.env.REACT_APP_API_GATEWAY_URL}`,
});

instance.interceptors.response.use((response) => response.data, ErrorHandler);

export { default as setAuthorizationHeader } from "./setAuthorizationHeader";
export default instance;
