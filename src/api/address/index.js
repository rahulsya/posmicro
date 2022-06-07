import axios from "../axiosConfig";

export default {
  getAll: () => axios.get(`/address`),
  store: (data) => axios.post(`/address`, data),
  update: (id, data) => axios.put(`/address/${id}`, data),
  destroy: (id) => axios.delete(`/address/${id}`),
  detail: (id) => axios.get(`/address/detail/${id}`),
};
