import axios from "../axiosConfig";

export const categories = async () => {
  return await axios.get(`/products/category`);
};
export const addCategory = async (data) => {
  return await axios.post(`/products/category`, data);
};
export const editCategory = async (data) => {
  return await axios.put(`/products/category`, data);
};
export const deleteCategory = async (id) => {
  return await axios.delete(`/products/category/${id}`);
};
