import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || "https://lightstickshop-backend-production.up.railway.app/api";

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: { "Content-Type": "application/json" },
});

export default axiosInstance;
