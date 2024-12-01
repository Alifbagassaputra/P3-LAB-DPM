import React, { useState } from "react";
import { View, ActivityIndicator, StyleSheet, Alert } from "react-native";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import AddToCartButton from "../components/AddToCartButton";
import useFetchProduct from "../hooks/useFetchProduct";

const ProductDetails = () => {
  const { product, loading } = useFetchProduct(1); // ID produk 1
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = () => {
    setCartCount(cartCount + 1);
    Alert.alert("Success", "Product added to cart!");
  };

  return (
    <View style={styles.container}>
      <Navbar
        title="Product Details"
        onBack={() => Alert.alert("Info", "Back button pressed")}
      />
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" style={styles.loader} />
      ) : (
        <>
          <ProductCard product={product} />
          <AddToCartButton onPress={handleAddToCart} />
        </>
      )}
    </View>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  loader: {
    marginTop: 50,
  },
});
