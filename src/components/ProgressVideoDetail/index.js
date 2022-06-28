import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ProgressBar from "../ProgressBar";

const ProgressVideoDetail = () => {
  return (
    <View>
      <Text style={styles.episode}>T3:E7 Auf Wiedersehen</Text>
      <View style={styles.lapse}>
        <ProgressBar width="60%" progress="10%" />
        <Text style={styles.timelapse}>Tiempo restante: 23min</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  episode: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  lapse: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
    justifyContent: "space-between",
  },
  bar: {
    backgroundColor: "#878888",
    width: "60%",
    height: 3,
  },
  timelapse: {
    marginLeft: 15,
    color: "#878888",
    fontSize: 10,
    fontWeight: "bold",
  },
});

export default ProgressVideoDetail;
