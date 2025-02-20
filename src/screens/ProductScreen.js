import React, { useState, useEffect } from 'react';
import { View, Text, Image, Button, StyleSheet, Alert } from 'react-native';
import { useCart } from '../context/CartContext';

const ProductScreen = ({ route, navigation }) => {
  const { product } = route.params;
  const { cart, addToCart } = useCart();
  const [isInCart, setIsInCart] = useState(false);

  useEffect(() => {
    // Cek apakah produk sudah ada di keranjang
    const found = cart.some(item => item._id === product._id);
    setIsInCart(found);
  }, [cart]);

  const handleAddToCart = () => {
    if (isInCart) {
      Alert.alert("Peringatan", "Produk ini sudah ada di keranjang!");
      return;
    }

    addToCart(product);
    Alert.alert("Berhasil", `${product.name} telah ditambahkan ke keranjang!`);
    setIsInCart(true);
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text style={styles.name}>{product.name}</Text>
      {product.description && <Text style={styles.description}>{product.description}</Text>}
      <Text style={styles.price}>Rp {product.price.toLocaleString()}</Text>
      <Text style={styles.stock}>Stok: {product.stock > 0 ? product.stock : "Habis"}</Text>

      <View style={styles.buttonContainer}>
        <Button
          title={isInCart ? "Sudah di Keranjang" : "Tambahkan ke Keranjang"}
          onPress={handleAddToCart}
          color={isInCart ? "#6c757d" : "#007bff"}
          disabled={product.stock === 0 || isInCart}
        />
        <Button
          title="Lihat Keranjang"
          onPress={() => navigation.navigate('Cart')}
          color="#28a745"
        />
        <Button
          title="Kembali ke Beranda"
          onPress={() => navigation.navigate('Home')}
          color="#ffc107"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  image: {
    width: "100%",
    height: 300,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    marginBottom: 15,
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: "center",
    color: "#555",
    marginBottom: 10,
  },
  price: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#28a745",
    marginBottom: 5,
  },
  stock: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#d9534f",
    marginBottom: 15,
  },
  buttonContainer: {
    width: "100%",
    flexDirection: "column",
    gap: 10,
    marginTop: 10,
  },
});

export default ProductScreen;
