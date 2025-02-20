import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import ProductScreen from '../Screens/ProductScreen';
import CartScreen from '../Screens/CartScreen';
import CheckoutScreen from '../Screens/CheckoutScreen';
import ContactScreen from '../Screens/cantact'; // ✅ Tambahkan ContactScreen
import AppNavigator from "./navigation/AppNavigator";

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#007bff' },
        headerTintColor: '#fff',
        headerTitleAlign: 'center',
        headerTitleStyle: { fontSize: 20, fontWeight: 'bold' },
      }}
    >
      <Stack.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{ title: '🏪 Light Stick Shop' }} 
      />
      <Stack.Screen 
        name="Product" 
        component={ProductScreen} 
        options={({ route }) => ({
          title: route.params.product.name, // Nama produk tampil di header
        })} 
      />
      <Stack.Screen 
        name="Cart" 
        component={CartScreen} 
        options={{ title: '🛒 Keranjang Belanja' }} 
      />
      <Stack.Screen 
        name="Checkout" 
        component={CheckoutScreen} 
        options={{ title: '💳 Checkout' }} 
      />
      <Stack.Screen 
        name="Contact" 
        component={ContactScreen} 
        options={{ title: '📞 Hubungi Kami' }} // ✅ Tambahkan ContactScreen ke dalam navigasi
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
