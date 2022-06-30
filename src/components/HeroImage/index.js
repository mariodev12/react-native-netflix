import React from "react";
import {
  View,
  Text,
  ImageBackground,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import Plus from "react-native-vector-icons/AntDesign";
import Play from "react-native-vector-icons/Entypo";
import Info from "react-native-vector-icons/Feather";

import LinearGradient from "react-native-linear-gradient";

import Logo from "../Logo";
import TypeProductLogo from "../TypeProductLogo";

const LOGO = require("../../../assets/logo.png");

const HeroImage = ({ type, title, category, name }) => {
  return (
    <ImageBackground
      source={require("../../../assets/hero-image.png")}
      style={styles.heroImage}
    >
      <LinearGradient
        colors={["rgba(0,0,0, 0.1)", "rgba(0,0,0, 1)"]}
        style={styles.heroImageContent}
      >
        <TypeProductLogo name="SERIE" />
        <View style={styles.information}>
          <Text style={styles.informationTitle}>
            La vida secreta de nuestras mascotas
          </Text>
          <Text style={styles.informationCategories}>
            Relajante · Fascinante · Familiar
          </Text>
        </View>
        <View style={styles.buttons}>
          <View style={styles.buttonVertical}>
            <Plus style={styles.buttonVerticalIcon} name="plus" />
            <Text style={styles.buttonVerticalText}>Mi lista</Text>
          </View>
          <View>
            <TouchableOpacity style={styles.buttonHorizontal}>
              <Play
                style={styles.buttonHorizontalIcon}
                name="controller-play"
              />
              <Text style={styles.buttonHorizontalText}>Reproducir</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonVertical}>
            <Info style={styles.buttonVerticalIcon} name="info" />
            <Text style={styles.buttonVerticalText}>Información</Text>
          </View>
        </View>
      </LinearGradient>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  heroImage: {
    width: 390,
    height: 450,
  },
  type: {
    flexDirection: "row",
    alignItems: "center",
  },
  typeText: {
    color: "#ccc",
    fontSize: 15,
    letterSpacing: 6,
    marginLeft: 8,
    fontWeight: "bold",
  },
  heroImageContent: {
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
    flex: 1,
    paddingBottom: 10,
  },
  informationTitle: {
    marginTop: 5,
    fontSize: 29,
    color: "white",
    textAlign: "center",
    width: 300,
    fontWeight: "bold",
    lineHeight: 26,
    letterSpacing: 2,
  },
  informationCategories: {
    marginBottom: 5,
    color: "white",
    textAlign: "center",
    fontSize: 15,
  },
  buttons: {
    flexDirection: "row",
    width: "80%",
    alignItems: "center",
    justifyContent: "space-around",
  },
  buttonVertical: {
    flexDirection: "column",
    alignItems: "center",
  },
  buttonVerticalIcon: {
    color: "white",
    fontSize: 20,
    marginBottom: 2,
  },
  buttonVerticalText: {
    color: "white",
    fontSize: 10,
    fontWeight: "bold",
  },
  buttonHorizontal: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    paddingVertical: 3,
    paddingHorizontal: 10,
    borderRadius: 2,
  },
  buttonHorizontalIcon: {
    fontSize: 18,
  },
  buttonHorizontalText: {
    fontSize: 12,
    fontWeight: "bold",
  },
});

export default HeroImage;
