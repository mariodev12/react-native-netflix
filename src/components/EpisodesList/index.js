import React from "react";
import { Text, StyleSheet } from "react-native";
const SEASONS = require("../../../assets/assets.json");

const EpisodesList = () => {
  const seasonList = SEASONS[0].episodes;
  return seasonList.map((item, i) => {
    return <Text style={styles.text}>{item}</Text>;
  });
};

const styles = StyleSheet.create({
  text: {
    color: "#ccc",
    textAlign: "center",
    marginBottom: 40,
  },
});

export default EpisodesList;
