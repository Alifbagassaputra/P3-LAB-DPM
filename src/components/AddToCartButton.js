import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const AddToCartButton = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>Add to Cart</Text>
    </TouchableOpacity>
  );
};

export default AddToCartButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#FF6347",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
    marginTop: 20,
  },
  text: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
  },
});
