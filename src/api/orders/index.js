import axios from "../axiosConfig";

export default {
  order: (params) => axios.get(`/order`, { params }),
  orderDetail: (id) => axios.get(`/order/${id}`),
  create_order: (payload) => axios.post("/order", payload),
  update_order: (id, payload) => axios.put(`/order/${id}`, payload),
  product_order: (params) => axios.get(`products/product_orders`, { params }),
  payment: (data) => axios.post(`payment/transaction`, data),
  check_payment: (id) => axios.get(`payment/${id}`),
  reports: (params) => axios.get(`/report`, { params }),
};
