import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Button, Alert, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CartScreen = ({ navigation }) => {
  const [cart, setCart] = useState([]);

  // Mengambil data keranjang dari AsyncStorage saat komponen dimuat
  useEffect(() => {
    const loadCart = async () => {
      const savedCart = await AsyncStorage.getItem('cart');
      if (savedCart) {
        setCart(JSON.parse(savedCart));
      }
    };

    loadCart();
  }, []);

  // Menangani penghapusan produk dengan konfirmasi
  const removeFromCart = async (productId) => {
    Alert.alert(
      "Konfirmasi",
      "Apakah Anda yakin ingin menghapus produk ini?",
      [
        { text: "Batal", style: "cancel" },
        { text: "Hapus", onPress: async () => {
            const updatedCart = cart.filter(item => item._id !== productId);
            setCart(updatedCart);
            await AsyncStorage.setItem('cart', JSON.stringify(updatedCart));
          }
        }
      ]
    );
  };

  // Menghitung total harga
  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Keranjang Belanja</Text>

      {cart.length === 0 ? (
        <Text style={styles.emptyText}>Keranjang Anda kosong.</Text>
      ) : (
        <>
          <FlatList
            data={cart}
            keyExtractor={(item) => item._id}
            renderItem={({ item }) => (
              <View style={styles.itemContainer}>
                <Text style={styles.itemText}>{item.name} - Rp {item.price.toLocaleString()}</Text>
                <Button title="Hapus" color="red" onPress={() => removeFromCart(item._id)} />
              </View>
            )}
          />

          <Text style={styles.totalText}>Total: Rp {getTotalPrice().toLocaleString()}</Text>
          <Button title="Lanjut ke Checkout" onPress={() => navigation.navigate('Checkout', { cart })} />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f9f9f9",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  emptyText: {
    fontSize: 16,
    textAlign: "center",
    color: "gray",
  },
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    backgroundColor: "white",
    marginBottom: 10,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  itemText: {
    fontSize: 16,
  },
  totalText: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 10,
  },
});

export default CartScreen;
