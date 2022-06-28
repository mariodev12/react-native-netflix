import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Logo from "../Logo";

const TypeProductLogo = ({ name, size = 15 }) => {
  return (
    <View style={styles.type}>
      <Logo size={{ height: 18, width: 10 }} />
      <Text
        style={[
          styles.typeText,
          { fontSize: size, letterSpacing: size * 0.4, marginLeft: 8 },
        ]}
      >
        {name}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  type: {
    flexDirection: "row",
    alignItems: "center",
  },
  typeText: {
    color: "#ccc",
    fontWeight: "900",
  },
});

export default TypeProductLogo;
