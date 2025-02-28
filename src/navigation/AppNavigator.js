import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import ProductScreen from '../screens/ProductScreen';
import CartScreen from '../screens/CartScreen';
import CheckoutScreen from '../screens/CheckoutScreen';
import ContactScreen from '../screens/ContactScreen';
import ProfileScreen from '../screens/ProfileScreen';

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
          title: route.params?.product?.name || 'Detail Produk', // Menangani jika `route.params.product` undefined
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
        options={{ title: '📞 Hubungi Kami' }} 
      />
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ title: '👤 Profil Pengguna' }} 
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
