import axios from "axios";

const API_URL = "http://localhost:5000/api";  // Change this when deploying

export const fetchProducts = async () => {
  const response = await axios.get(`${API_URL}/products`);
  return response.data;
};
