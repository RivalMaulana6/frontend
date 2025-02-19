import React from 'react';
import { View, Text, Image, Button } from 'react-native';
import { useCart } from '../context/CartContext';

const ProductScreen = ({ route, navigation }) => {
  const { product } = route.params;
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
    navigation.navigate('Cart');
  };

  return (
    <View>
      <Image source={{ uri: product.image }} style={{ width: '100%', height: 300 }} />
      <Text>{product.name}</Text>
      <Text>Rp {product.price}</Text>
      <Button title="Add to Cart" onPress={handleAddToCart} />
    </View>
  );
};

export default ProductScreen;
