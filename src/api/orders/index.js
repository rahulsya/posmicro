import axios from "../axiosConfig";

export default {
  order: () => axios.get(`/order`),
  orderDetail: (id) => axios.get(`/order/${id}`),
  create_order: (payload) => axios.post("/order", payload),
  product_order: (params) => axios.get(`products/product_orders`, { params }),
};
