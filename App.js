import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { View, Text } from "react-native";
import AppNavigator from "../Navigation/AppNavigator";
import ProductList from "./components/ProductList"; // Pastikan jalur impor sesuai

export default function App() {
  return (
    <NavigationContainer>
      <AppNavigator />
      <View>
        <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Light Stick Shop</Text>
        <ProductList /> {/* Menampilkan daftar produk */}
      </View>
    </NavigationContainer>
  );
}