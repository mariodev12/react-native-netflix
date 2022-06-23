import React from "react";
import { Image, StyleSheet } from "react-native";

const Logo = () => {
  return (
    <Image source={require("../../../assets/logo.png")} style={styles.logo} />
  );
};

const styles = StyleSheet.create({
  logo: {
    height: 25,
    width: 15,
  },
});

export default Logo;
