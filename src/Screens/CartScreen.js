import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CartScreen = ({ route, navigation }) => {
  const [cart, setCart] = useState([]);

  // Mengambil data keranjang dari AsyncStorage
  useEffect(() => {
    const loadCart = async () => {
      const savedCart = await AsyncStorage.getItem('cart');
      if (savedCart) {
        setCart(JSON.parse(savedCart));
      }
    };

    loadCart();
  }, []);

  // Menambahkan produk ke keranjang dan menyimpannya di AsyncStorage
  const addToCart = async (product) => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
    await AsyncStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  // Menangani penghapusan produk dari keranjang
  const removeFromCart = async (productId) => {
    const updatedCart = cart.filter(item => item._id !== productId);
    setCart(updatedCart);
    await AsyncStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  return (
    <View>
      <FlatList
        data={cart}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <View>
            <Text>{item.name} - Rp {item.price}</Text>
            <Button title="Remove" onPress={() => removeFromCart(item._id)} />
          </View>
        )}
      />
      <Button title="Proceed to Checkout" onPress={() => navigation.navigate('Checkout', { cart })} />
    </View>
  );
};

export default CartScreen;