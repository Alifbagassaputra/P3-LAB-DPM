import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import ProductDetails from "./src/pages/ProductDetails";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ProductDetails />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
