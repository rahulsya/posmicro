import axios from "axios";
import errorHandler from "./errorHandler";

const instance = axios.create({
  Accept: "application/json",
  baseURL: `${process.env.REACT_APP_API_GATEWAY_URL}`,
});

instance.interceptors.response.use((response) => response.data, errorHandler);

export { default as setAuthorizationHeader } from "./setAuthorizationHeader";
export default instance;
