import React, { createContext, useState, useContext, useEffect } from "react";
import api from "../config/axiosConfig"; // ✅ Import API dari config

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // 🔄 Load keranjang dari database saat aplikasi dibuka
  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await api.get("/api/cart"); // ✅ Ambil data keranjang dari backend
        setCart(response.data);
      } catch (error) {
        console.error("Error fetching cart:", error);
      }
    };
    fetchCart();
  }, []);

  // ✅ Tambah produk ke keranjang
  const addToCart = async (product) => {
    try {
      const response = await api.post("/api/carts", { productId: product._id });
      setCart(response.data); // ✅ Update state berdasarkan respons dari backend
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };

  // ❌ Hapus produk dari keranjang
  const removeFromCart = async (productId) => {
    try {
      const response = await api.delete(`/api/carts/${productId}`);
      setCart(response.data); // ✅ Perbarui state setelah penghapusan
    } catch (error) {
      console.error("Error removing item:", error);
    }
  };

  // 🔄 Kosongkan keranjang (misalnya setelah checkout)
  const clearCart = async () => {
    try {
      await api.delete("/api/carts/clear");
      setCart([]); // ✅ Kosongkan state keranjang
    } catch (error) {
      console.error("Error clearing cart:", error);
    }
  };

  // 🔢 Hitung total harga keranjang
  const getCartTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, getCartTotal }}>
      {children}
    </CartContext.Provider>
  );
};
