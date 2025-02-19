import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';
import axios from 'axios';
import ProductCard from '../components/ProductCard';

const HomeScreen = ({ navigation }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://lightstickshop-backend-production.up.railway.app/products');
        setProducts(response.data);
      } catch (err) {
        setError('Terjadi kesalahan saat memuat produk');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (error) {
    return (
      <View>
        <Text>{error}</Text>
      </View>
    );
  }

  return (
    <View>
      <FlatList
        data={products}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('Product', { product: item })}>
            <ProductCard product={item} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default HomeScreen;
