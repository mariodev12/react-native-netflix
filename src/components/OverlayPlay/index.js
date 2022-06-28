import React from "react";
import { View, StyleSheet } from "react-native";

import Play from "react-native-vector-icons/Ionicons";

const OverlayPlay = ({ children, size = 1.2 }) => {
  return (
    <View style={styles.container}>
      <View
        style={[
          styles.coverPlay,
          { width: 25 * size, height: 25 * size, borderRadius: 15 * size },
        ]}
      >
        <Play
          style={styles.playIcon}
          name="play"
          color="white"
          size={15 * size}
        />
      </View>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
  },
  coverPlay: {
    position: "absolute",
    zIndex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: 50,
    height: 50,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: "white",
    backgroundColor: "rgba(35, 35, 35, 0.8)",
  },
  playIcon: {
    marginLeft: 2,
  },
});

export default OverlayPlay;
