import React from "react";

import { View, Text, StyleSheet, FlatList, Image } from "react-native";

import Info from "react-native-vector-icons/Feather";
import Dots from "react-native-vector-icons/Entypo";
import ProgressBar from "../ProgressBar";
import PlayButton from "../PlayButton";
import { useNavigation } from "@react-navigation/native";
import { TouchableHighlight } from "react-native-gesture-handler";

const DATA = require("../../../assets/assets.json");

const ElementsList = ({ title, data, type }) => {
  const Started = ({ item }) => {
    return (
      <View>
        <View style={styles.overlayCover}>
          <PlayButton />
          <Image style={styles.cover} source={{ uri: item.image }} />
        </View>
        <ProgressBar width={"100%"} progress={"20%"} />
        <View style={styles.settings}>
          <Info name="info" color="#ccc" size={14} />
          <Dots name="dots-three-vertical" color="#ccc" size={14} />
        </View>
      </View>
    );
  };

  const Original = ({ item }) => {
    const navigation = useNavigation();
    return (
      <TouchableHighlight onPress={() => navigation.navigate("DetailScreen")}>
        <Image style={styles.cover} source={{ uri: item.image }} />
      </TouchableHighlight>
    );
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
});

export default ElementsList;
