import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { View, Text } from "react-native";
import AppNavigator from "@navigation/AppNavigator"; // ✅ Gunakan alias Babel
import ProductList from "@components/ProductList"; // ✅ Gunakan alias Babel
import api from "@config/axiosConfig"; // ✅ Pastikan alias ini sesuai dengan `babel.config.js`

export default function App() {
  const [products, setProducts] = useState([]); // ✅ State untuk menyimpan produk
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await api.get("/api/products"); // ✅ Sesuaikan endpoint backend
        setProducts(response.data);
      } catch (err) {
        setError(err.message || "Terjadi kesalahan saat mengambil data");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <NavigationContainer>
      <AppNavigator />
      <View style={{ padding: 20 }}>
        <Text style={{ fontSize: 24, fontWeight: "bold" }}>Light Stick Shop</Text>

        {loading && <Text>Loading...</Text>}
        {error && <Text style={{ color: "red" }}>{error}</Text>}

        {!loading && !error && <ProductList products={products} />}
      </View>
    </NavigationContainer>
  );
}
