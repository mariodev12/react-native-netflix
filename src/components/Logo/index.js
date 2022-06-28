import React from "react";
import { Image, StyleSheet } from "react-native";

const Logo = ({ size = { height: 25, width: 15 } }) => {
  return <Image source={require("../../../assets/logo.png")} style={size} />;
};

export default Logo;
