import React from "react";
import { View, StyleSheet } from "react-native";

const ProgressBar = ({ width, progress }) => {
  return (
    <View style={[styles.progressbar, { width: width }]}>
      <View style={{ height: 3, backgroundColor: "red", width: progress }} />
    </View>
  );
};

const styles = StyleSheet.create({
  progressbar: {
    backgroundColor: "#2c2e2e",
    height: 3,
  },
});

export default ProgressBar;
