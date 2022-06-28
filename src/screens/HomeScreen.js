import React, { useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  Image,
  ScrollView,
} from "react-native";
import ElementsList from "../components/ElementsList";

import Header from "../components/Header/index.js";
import HeroImage from "../components/HeroImage/index.js";
const HERO_IMAGE = require("../../assets/hero-image.png");

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header />
      </View>
      <ScrollView>
        <View style={styles.content}>
          <HeroImage />
          <View style={styles.section}>
            <ElementsList title="Popular en Netflix" />
          </View>
          <View style={styles.section}>
            <ElementsList type="started" title="Seguir viendo para Mario" />
          </View>
          <View style={styles.section}>
            <ElementsList title="Tendencias ahora" />
          </View>
          <View style={styles.section}>
            <ElementsList title="Joyas para ti" />
          </View>
          <View style={styles.section}>
            <ElementsList title="Popular en Netflix" />
          </View>
          <View style={styles.section}>
            <ElementsList title="Popular en Netflix" />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    left: 0,
    top: 0,
    right: 0,
    position: "absolute",
    zIndex: 1,
  },
  container: {
    backgroundColor: "black",
  },
  content: {
    flex: 1,
  },
  heroImage: {
    width: 390,
    height: 450,
  },
  section: {
    marginVertical: 5,
  },
});

export default HomeScreen;
