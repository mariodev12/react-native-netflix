import React from "react";

import { View, Text, StyleSheet, FlatList, Image } from "react-native";

import Info from "react-native-vector-icons/Feather";
import Dots from "react-native-vector-icons/Entypo";
import Play from "react-native-vector-icons/Ionicons";

const DATA = require("../../../assets/assets.json");

const ElementsList = ({ title, data, type }) => {
  const Started = ({ item }) => {
    return (
      <View>
        <View style={styles.overlayCover}>
          <View style={styles.coverPlay}>
            <Play style={styles.playIcon} name="play" color="white" size={30} />
          </View>
          <Image style={styles.cover} source={{ uri: item.image }} />
        </View>
        <View style={styles.progressbar}>
          <View style={{ height: 3, backgroundColor: "red", width: "50%" }} />
        </View>
        <View style={styles.settings}>
          <Info name="info" color="#ccc" size={14} />
          <Dots name="dots-three-vertical" color="#ccc" size={14} />
        </View>
      </View>
    );
  };

  const Original = ({ item }) => {
    return <Image style={styles.cover} source={{ uri: item.image }} />;
  };

  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        data={DATA[0].covers}
        horizontal
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        renderItem={({ item }) =>
          type === "started" ? (
            <Started item={item} />
          ) : (
            <Original item={item} />
          )
        }
        style={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
    fontSize: 14,
    color: "white",
    paddingLeft: 8,
    marginBottom: 4,
  },
  cover: {
    height: 120,
    width: 90,
    borderRadius: 4,
  },
  separator: {
    width: 7,
  },
  list: {
    paddingLeft: 5,
  },
  //For started list
  progressbar: {
    backgroundColor: "#2c2e2e",
  },
  settings: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#1e1f1f",
    paddingVertical: 5,
    paddingHorizontal: 5,
  },
  overlayCover: {
    position: "relative",
  },
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

export default ElementsList;
