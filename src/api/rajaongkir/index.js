import axios from "../axiosConfig";

export default {
  getProvince: () => axios.get("/courier/provinsi"),
  getCity: (provinceId) => axios.get(`/courier/kota/${provinceId}`),
  cost: (payload) => axios.post("/courier/ongkir", payload),
};
