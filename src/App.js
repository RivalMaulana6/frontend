import api from "@config/axiosConfig"; // Pastikan path sesuai
import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { View, Text } from "react-native";
import AppNavigator from "@navigation/AppNavigator";
import ProductList from "@components/ProductList";

export default function App() {
  useEffect(() => {
    const testAPI = async () => {
      try {
        const response = await api.get("/api/products"); // Sesuaikan dengan endpoint backend
        console.log("Response:", response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    testAPI();
  }, []);

  return (
    <NavigationContainer>
      <AppNavigator />
      <View>
        <Text style={{ fontSize: 24, fontWeight: "bold" }}>
          Light Stick Shop
        </Text>
        <ProductList />
      </View>
    </NavigationContainer>
  );
}
