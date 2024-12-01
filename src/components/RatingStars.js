import React from "react";
import { View, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const RatingStars = ({ rating }) => {
  const stars = Array(5)
    .fill(0)
    .map((_, index) => (
      <FontAwesome
        key={index}
        name={index < Math.floor(rating) ? "star" : "star-o"}
        size={20}
        color="#FFD700"
        style={styles.star}
      />
    ));

  return <View style={styles.container}>{stars}</View>;
};

export default RatingStars;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 10,
  },
  star: {
    marginHorizontal: 2,
  },
});
