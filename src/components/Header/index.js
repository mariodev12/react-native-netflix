import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import Cast from "react-native-vector-icons/Feather";
import CaretDown from "react-native-vector-icons/FontAwesome";

import { useNavigation } from "@react-navigation/native";

import LinearGradient from "react-native-linear-gradient";
import Logo from "../Logo";

const USER_DATA = require("../../../userData.json");

const paddingHorizontal = 20;
const paddingTop = 40;

const Header = () => {
  const navigation = useNavigation();
  return (
    <LinearGradient
      colors={["rgba(0,0,0, 1)", "rgba(0,0,0, 0.1)"]}
      style={styles.linearGradient}
    >
      <View style={styles.container}>
        <View style={styles.heading}>
          <View>
            <Logo />
          </View>
          <View style={styles.right}>
            <Cast name="cast" size={20} color="white" style={styles.castIcon} />
            <View
              style={[
                styles.avatar,
                { backgroundColor: USER_DATA.users[2].backgroundColor },
              ]}
            />
          </View>
        </View>
        <View style={styles.menu}>
          <Text style={styles.menuOption}>Series TV</Text>
          <Text style={styles.menuOption}>Películas</Text>
          <View style={styles.menuDropdown}>
            <TouchableOpacity
              onPress={() => navigation.navigate("CategoriesScreen")}
            >
              <Text style={[styles.menuOption, styles.menuOptionDropdown]}>
                Categorías
              </Text>
            </TouchableOpacity>
            <CaretDown
              style={styles.menuDropdownIcon}
              name="caret-down"
              size={15}
              color="white"
            />
          </View>
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  linearGradient: {},
  container: {
    //backgroundColor: "red",
    paddingHorizontal: paddingHorizontal,
    height: 80 + paddingTop,
    paddingTop: paddingTop,
  },
  heading: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  menu: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    paddingHorizontal: paddingHorizontal * 0.8,
  },
  menuDropdown: {
    alignItems: "center",
    flexDirection: "row",
  },
  menuOptionDropdown: {
    marginRight: 4,
  },
  menuOption: {
    textAlign: "center",
    color: "white",
    fontWeight: "500",
  },
  right: {
    flexDirection: "row",
    alignItems: "center",
  },
  castIcon: { marginRight: 20 },
  avatar: {
    width: 20,
    height: 20,
    borderRadius: 2,
  },
});

export default Header;
