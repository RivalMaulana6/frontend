import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from  "navigation/AppNavigator"; 
import ProductList from "./components/ProductList"; // Import daftar produk

export default function App() {
  return (
    <NavigationContainer>
      <AppNavigator />
      <div>
        <h1>Light Stick Shop</h1>
        <ProductList /> {/* Menampilkan daftar produk */}
      </div>
    </NavigationContainer>
  );
}
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from  "navigation/AppNavigator"; 
import ProductList from "./components/ProductList"; // Import daftar produk

export default function App() {
  return (
    <NavigationContainer>
      <AppNavigator />
      <div>
        <h1>Light Stick Shop</h1>
        <ProductList /> {/* Menampilkan daftar produk */}
      </div>
    </NavigationContainer>
  );
}
