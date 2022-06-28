import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  Animated,
} from "react-native";

const { width, height } = Dimensions.get("window");

import Cross from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const CATEGORIES = require("../../userData.json");

const CategoriesScreen = () => {
  const [position, setPosition] = useState(0);
  const navigation = useNavigation();
  let styleDynamic = {};
  return (
    <View style={styles.container}>
      <ScrollView>
        {CATEGORIES.categories.map((element, i) => {
          return (
            <Text
              onLayout={(event) => {
                const { x, y, height, width } = event.nativeEvent.layout;
                styleDynamic =
                  position > 0 ? { color: "red" } : { color: "blue" };
              }}
              style={[styles.text, styleDynamic]}
            >
              {element.name}
            </Text>
          );
        })}
      </ScrollView>
      <View style={styles.containerButton}>
        <View style={styles.btn}>
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => navigation.goBack()}
          >
            <View style={styles.btnClose}>
              <Cross name="close" size={30} color="black" />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(9, 9, 9, 1)",
    paddingTop: 60,
  },
  text: {
    color: "#ccc",
    textAlign: "center",
    marginBottom: 40,
  },
  containerButton: {
    width: "100%",
    height: 120,
    position: "absolute",
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.8)",
  },
  btn: {
    position: "absolute",
    bottom: 25,
    left: "45%",
  },
  btnClose: {
    backgroundColor: "white",
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
  },
  closeButton: {},
});

export default CategoriesScreen;
