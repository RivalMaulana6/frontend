import React, { useEffect, useState } from 'react';
import { 
  View, Text, FlatList, TouchableOpacity, ActivityIndicator, Button, 
  StyleSheet, TextInput, RefreshControl 
} from 'react-native';
import axios from 'axios';
import { API_BASE_URL } from '../utils/config'; // Import API URL
import ProductCard from '../components/ProductCard';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = ({ navigation }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [cartCount, setCartCount] = useState(0); // Jumlah item dalam keranjang
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [refreshing, setRefreshing] = useState(false);

  // Mengambil data produk dari API
  const fetchProducts = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`${API_BASE_URL}/api/products`);
      setProducts(response.data);
      setFilteredProducts(response.data);
    } catch (err) {
      setError('Terjadi kesalahan saat memuat produk');
    } finally {
      setLoading(false);
    }
  };

  // Mengambil data keranjang dari API
  const fetchCart = async () => {
    try {
      const userId = await AsyncStorage.getItem('userId'); // Ambil userId dari storage
      if (!userId) return;
      const response = await axios.get(`${API_BASE_URL}/api/carts?userId=${userId}`);
      const cartData = response.data;
      
      // Hitung total jumlah item dalam keranjang
      const totalItems = cartData.reduce((total, cart) => {
        return total + cart.items.reduce((sum, item) => sum + item.quantity, 0);
      }, 0);
      
      setCartCount(totalItems);
    } catch (err) {
      console.log('Gagal mengambil data keranjang:', err);
    }
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  // Fitur pull-to-refresh
  const onRefresh = async () => {
    setRefreshing(true);
    await fetchProducts();
    await fetchCart();
    setRefreshing(false);
  };

  // Fungsi pencarian produk
  const handleSearch = (text) => {
    setSearch(text);
    if (text) {
      const filtered = products.filter((product) => 
        product.name.toLowerCase().includes(text.toLowerCase())
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products);
    }
  };

  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#007bff" />
        <Text style={styles.loadingText}>Memuat produk...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.centered}>
        <Text style={styles.errorText}>{error}</Text>
        <Button title="Coba Lagi" onPress={fetchProducts} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Tampilkan jumlah item dalam keranjang */}
      <Text style={styles.cartText}>Keranjang: {cartCount} item</Text>

      {/* Input Pencarian */}
      <TextInput
        style={styles.searchBar}
        placeholder="Cari produk..."
        value={search}
        onChangeText={handleSearch}
      />

      {/* Daftar Produk */}
      <FlatList
        data={filteredProducts}
        keyExtractor={(item) => item._id || item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('Product', { product: item })}>
            <ProductCard product={item} />
          </TouchableOpacity>
        )}
        ListEmptyComponent={<Text style={styles.emptyText}>Produk tidak ditemukan</Text>}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
    padding: 10,
  },
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: "#555",
  },
  errorText: {
    fontSize: 16,
    color: "red",
    marginBottom: 10,
  },
  searchBar: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
    borderColor: "#ddd",
    borderWidth: 1,
    marginBottom: 10,
  },
  emptyText: {
    textAlign: "center",
    fontSize: 16,
    color: "#555",
    marginTop: 20,
  },
  cartText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#007bff",
    marginBottom: 10,
    textAlign: "center",
  },
});

export default HomeScreen;
