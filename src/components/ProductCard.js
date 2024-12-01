import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import RatingStars from "./RatingStars";

const ProductCard = ({ product }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.price}>Rp{product.price}</Text>
      <RatingStars rating={product.rating.rate} />
      <Text style={styles.description}>{product.description}</Text>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  card: {
    alignItems: "center",
    padding: 20,
    borderRadius: 10,
    backgroundColor: "#fff",
    margin: 10,
    elevation: 3,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10,
    color: "#333",
  },
  price: {
    fontSize: 18,
    color: "green",
    marginVertical: 5,
  },
  description: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
    marginVertical: 10,
  },
});
