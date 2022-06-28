import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const DATA = require("../../../assets/assets.json");
const cover = DATA[0].covers.splice(0, 6);

const Related = () => {
  return (
    <View style={styles.container}>
      {cover.map((item, i) => {
        console.log(i % 2 === 0);
        return (
          <Image
            key={i}
            source={{ uri: item.image }}
            resizeMode="cover"
            style={[
              styles.cover,
              {
                marginBottom: 7,
                marginLeft: i % 3 == 0 ? 0 : 7,
              },
            ]}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  cover: {
    width: 120,
    height: 180,
    borderRadius: 4,
  },
});

export default Related;
