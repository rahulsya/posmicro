import axios from "../axiosConfig";

export const products = async () => {
  return await axios.get("/products");
};

export const addproducts = async (data) => {
  return await axios.post("/products", data);
};

export const editProduct = async (id, data) => {
  return await axios.put(`/products/${id}`, data);
};
