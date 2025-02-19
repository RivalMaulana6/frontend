import React from 'react';
import { View, Text, Button, Alert } from 'react-native';

const CheckoutScreen = ({ route, navigation }) => {
  const { cart } = route.params;
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const handlePayment = (method) => {
    if (method === 'Saldo') {
      // Cek saldo jika perlu, bisa integrasikan dengan API pengguna
      Alert.alert('Pembayaran Berhasil', `Metode: ${method}`);
    } else {
      Alert.alert('Pembayaran Berhasil', `Metode: ${method}`);
    }
    navigation.navigate('Home');
  };

  return (
    <View>
      <Text>Total: Rp {total}</Text>
      <Button title="Bayar dengan COD" onPress={() => handlePayment('COD')} />
      <Button title="Bayar dengan Saldo" onPress={() => handlePayment('Saldo')} />
    </View>
  );
};

export default CheckoutScreen;
