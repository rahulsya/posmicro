import axios from "../axiosConfig";

export const categories = async () => {
  return await axios.get(`/categories`);
};
export const addCategory = async (data) => {
  return await axios.post(`/categories`, data);
};
export const editCategory = async (id, data) => {
  return await axios.put(`/categories/${id}`, data);
};
export const deleteCategory = async (id) => {
  return await axios.delete(`/categories/${id}`);
};
