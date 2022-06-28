import React from "react";
import { View, StyleSheet } from "react-native";

import Play from "react-native-vector-icons/Ionicons";

const PlayButton = () => {
  return (
    <View style={styles.coverPlay}>
      <Play style={styles.playIcon} name="play" color="white" size={30} />
    </View>
  );
};

const styles = StyleSheet.create({
  coverPlay: {
    position: "absolute",
    left: "25%",
    top: "33%",
    zIndex: 1,
    width: 50,
    height: 50,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    borderColor: "white",
    backgroundColor: "rgba(35, 35, 35, 0.8)",
  },
  playIcon: {
    marginLeft: 2,
  },
});

export default PlayButton;
