import axios from "../axiosConfig";

export default {
  login: (data) => axios.post("/users/login", data),
  register: (data) => axios.post("/users/register", data),
  logout: () => axios.post("/users/logout"),
  update: (data) => axios.put("/users/update", data),
  details: () => axios.get("/users"),
  getUser: (id) => axios.get(`/users/${id}`),
  refresh: (credentials) =>
    axios.post("/refresh_token", {
      refresh_token: credentials.refresh_token,
      email: credentials.email,
    }),
  forgetPassword: (email) => axios.post(`/users/forget-password`, { email }),
  updatePassword: (token, password) =>
    axios.post(`/users/update-password`, { token, password }),
};
