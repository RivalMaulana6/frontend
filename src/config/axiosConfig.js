import axios from "axios";

const api = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_BASE_URL, // Panggil dari .env
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
