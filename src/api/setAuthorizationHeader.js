import axios from "./axiosConfig";

export default function (token = null) {
  if (token) axios.defaults.headers.common.authorization = `Bearer ${token}`;
  else delete axios.defaults.headers.common.authorization;
}
