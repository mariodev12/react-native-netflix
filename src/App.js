/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from "react";
import { StyleSheet, View } from "react-native";

import ProfilePicker from "./screens/ProfilePicker";
import HomeScreen from "./screens/HomeScreen";

const App = () => {
  return (
    <View style={styles.test}>
      <HomeScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  test: {
    backgroundColor: "black",
  },
});

export default App;
