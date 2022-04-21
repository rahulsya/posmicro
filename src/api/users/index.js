import axios from "../axiosConfig";

export default {
  login: (data) => axios.post("/users/login", data),
  register: (data) => axios.post("/users/register", data),
  logout: () => axios.post("/users/logout"),
  update: (data) => axios.put("/users/update", data),
  details: () => axios.get("/users"),
};
