import axios from "axios";

const api = axios.create({
  baseURL: "https://e2d3-140-213-106-220.ngrok-free.app", // Ganti dengan URL ngrok terbaru
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
