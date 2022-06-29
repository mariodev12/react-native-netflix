import React from "react";
import { Text, StyleSheet } from "react-native";
const CATEGORIES = require("../../../userData.json");
const CategoriesList = () => {
  return CATEGORIES.categories.map((element, i) => {
    return (
      <Text
        onLayout={(event) => {
          const { x, y, height, width } = event.nativeEvent.layout;
        }}
        style={[styles.text]}
      >
        {element.name}
      </Text>
    );
  });
};

const styles = StyleSheet.create({
  text: {
    color: "#ccc",
    textAlign: "center",
    marginBottom: 40,
  },
});

export default CategoriesList;
