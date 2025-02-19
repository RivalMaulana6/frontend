const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || "https://lightstickshop-backend-production.up.railway.app/api";

export const fetchProducts = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/products`);
    if (!response.ok) throw new Error("Gagal mengambil data produk");
    return await response.json();
  } catch (error) {
    console.error("Error:", error);
    return [];
  }
};
