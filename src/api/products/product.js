import axios from "../axiosConfig";

export const products = async (params) => {
  return await axios.get("/products", { params });
};

export const productDetail = async (id) => {
  return await axios.get(`products/${id}`);
};

export const addproducts = async (data) => {
  return await axios.post("/products", data);
};

export const editProduct = async (id, data) => {
  return await axios.put(`/products/${id}`, data);
};
export const deleteProduct = async (id) => {
  return await axios.delete(`/products/${id}`);
};

export const updateStock = async (data) => {
  return await axios.post(`/products/stock`, { payload: data });
};
