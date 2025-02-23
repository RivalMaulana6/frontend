import React, { useEffect, useState } from "react";
import { View, Text, FlatList, ActivityIndicator, StyleSheet } from "react-native";
import api from "@config/axiosConfig"; // ✅ Gunakan alias agar path lebih rapi
import ProductCard from "@components/ProductCard"; // ✅ Gunakan alias agar lebih fleksibel

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await api.get("/api/products");
        console.log("Fetched Products:", response.data);
        setProducts(response.data);
      } catch (err) {
        console.error("Error fetching products:", err);
        setError("Gagal mengambil data produk.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🛍️ Daftar Produk Light Stick</Text>

      {loading ? (
        <ActivityIndicator size="large" color="#007bff" />
      ) : error ? (
        <Text style={styles.error}>{error}</Text>
      ) : products.length > 0 ? (
        <FlatList
          data={products}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => <ProductCard product={item} />}
          contentContainerStyle={styles.list}
        />
      ) : (
        <Text style={styles.empty}>Produk tidak tersedia.</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: "center",
    backgroundColor: "#f8f9fa",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#333",
  },
  list: {
    width: "100%",
  },
  error: {
    color: "red",
    fontSize: 16,
  },
  empty: {
    fontSize: 16,
    color: "#777",
  },
});

export default ProductList;
