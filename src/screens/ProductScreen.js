import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Image, Button, StyleSheet, Alert } from "react-native";
import { useCart } from "../context/CartContext";
import { API_BASE_URL } from "../utils/config";

const ProductScreen = ({ route, navigation }) => {
  const { cart, addToCart } = useCart();
  const [products, setProducts] = useState([]);
  const [isInCart, setIsInCart] = useState({});

  useEffect(() => {
    fetch(`${API_BASE_URL}/api/products`)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        const cartStatus = data.reduce((acc, product) => {
          acc[product._id] = cart.some(item => item._id === product._id);
          return acc;
        }, {});
        setIsInCart(cartStatus);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, [cart]);

  const handleAddToCart = async (productId) => {
    const userId = "USER_ID_TEST"; // Gantilah dengan userId dari user yang sedang login

    try {
      const response = await fetch(`${API_BASE_URL}/api/carts/${userId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ productId, quantity: 1 }),
      });

      if (response.ok) {
        Alert.alert("Sukses", "Produk berhasil ditambahkan ke keranjang!");
      } else {
        Alert.alert("Error", "Gagal menambahkan produk ke keranjang.");
      }
    } catch (error) {
      console.error("Error adding to cart:", error);
      Alert.alert("Error", "Terjadi kesalahan saat menambahkan produk.");
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Daftar Light Stick</Text>
      <FlatList
        data={products}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <View style={styles.productContainer}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.price}>Rp {item.price.toLocaleString()}</Text>
            <Text style={styles.stock}>Stok: {item.stock > 0 ? item.stock : "Habis"}</Text>
            <Button
              title={isInCart[item._id] ? "Sudah di Keranjang" : "Tambahkan ke Keranjang"}
              onPress={() => handleAddToCart(item)}
              color={isInCart[item._id] ? "#6c757d" : "#007bff"}
              disabled={item.stock === 0 || isInCart[item._id]}
            />
          </View>
        )}
      />
      <Button title="Lihat Keranjang" onPress={() => navigation.navigate("Cart")} color="#28a745" />
      <Button title="Kembali ke Beranda" onPress={() => navigation.navigate("Home")} color="#ffc107" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  productContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 5,
  },
  price: {
    fontSize: 16,
    color: "#28a745",
  },
  stock: {
    fontSize: 14,
    color: "#d9534f",
  },
});

export default ProductScreen;
