import React from 'react';
import { View, Text, Button, Alert, StyleSheet } from 'react-native';

const CheckoutScreen = ({ route, navigation }) => {
  const { cart } = route.params;
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const handlePayment = (method) => {
    Alert.alert(
      "Konfirmasi Pembayaran",
      `Anda yakin ingin membayar dengan metode ${method}?`,
      [
        { text: "Batal", style: "cancel" },
        {
          text: "Lanjutkan",
          onPress: () => {
            Alert.alert('Pembayaran Berhasil', `Metode: ${method}`);
            navigation.navigate('Home');
          }
        }
      ]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Checkout</Text>
      <Text style={styles.total}>Total: Rp {total.toLocaleString()}</Text>

      <Button title="Bayar dengan COD" onPress={() => handlePayment('COD')} />
      <View style={styles.spacing} />
      <Button title="Bayar dengan Saldo" onPress={() => handlePayment('Saldo')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f9f9f9",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
  },
  total: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
  },
  spacing: {
    height: 10,
  },
});

export default CheckoutScreen;
