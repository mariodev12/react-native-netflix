import React, { useEffect, useState, useRef, useLayoutEffect } from "react";
import {
  Animated,
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";

import TypeProductLogo from "../components/TypeProductLogo";

import VideoPlayer from "../components/VideoPlayer";
import Play from "react-native-vector-icons/FontAwesome";
import Download from "react-native-vector-icons/Octicons";

import Thumbsup from "react-native-vector-icons/Octicons";
import Plus from "react-native-vector-icons/Fontisto";
import Plane from "react-native-vector-icons/Ionicons";
import Down from "react-native-vector-icons/AntDesign";

import ProgressVideoDetail from "../components/ProgressVideoDetail";
import EpisodePicker from "../components/EpisodePicker";
import Related from "../components/Related";

const DUMMY_DATA = require("../../assets/assets.json");
const episodes = DUMMY_DATA[0].dummyEpisodes.episodes.splice(0, 5);

const DetailScreen = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [finshed, setFinished] = useState(false);
  const [width, setWidth] = useState(new Animated.Value(0));
  const [episode, setEpisode] = useState(0);

  const onChangeTab = (tab) => {
    setSelectedTab(tab);

    if (!finshed) {
      Animated.timing(width, {
        toValue: 100,
        duration: 1000,
        useNativeDriver: false,
      }).start();
    }
  };

  return (
    <View style={styles.container}>
      <VideoPlayer />
      <ScrollView style={{ paddingHorizontal: 5, paddingTop: 10 }}>
        <TypeProductLogo size={10} name="SERIE" />
        <Text style={styles.title}>The Umbrella Academy</Text>
        <View style={styles.subtitle}>
          <Text style={[styles.white, styles.year]}>2022</Text>
          <View style={styles.ageIconContainer}>
            <Text style={[styles.white, styles.age]}>16+</Text>
          </View>
          <Text style={[styles.white, styles.season]}>6 temporadas</Text>
          <View style={styles.hdIconContainer}>
            <Text style={[styles.white, styles.hdIcon]}>HD</Text>
          </View>
        </View>
        <View style={styles.topTitle}>
          <View style={styles.topIconContainer}>
            <Text style={styles.topIconText}>TOP</Text>
            <Text style={styles.topIconNumber}>10</Text>
          </View>
          <Text style={styles.topText}>N.º4 en series hoy</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={[styles.btn, styles.play]}>
            <Play name="play" color="black" size={20} />
            <Text style={styles.playText}>Reproducir</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.btn, styles.download]}>
            <Download name="download" color="white" size={20} />
            <Text style={styles.downloadText}>Descargar T3:E7</Text>
          </TouchableOpacity>
        </View>
        <ProgressVideoDetail />
        <View style={styles.information}>
          <Text style={styles.description}>
            Esta serie policíaca dramática protagonizada por Cillian Murphy y
            Sam Neill está libremente inspirada en una historia real.
          </Text>
          <View>
            <Text style={styles.actor} numberOfLines={1}>
              Reparto: Cillian Murphy, Sam Neill, Helen McCrory... más.
            </Text>
            <Text style={styles.createdBy}>Creada por: Sreven Knight.</Text>
          </View>
        </View>
        <View style={styles.interactionDetail}>
          <View style={styles.icon}>
            <Plus
              style={styles.iconElement}
              name="plus-a"
              size={28}
              color="white"
            />
            <Text style={[styles.iconText]}>Mi lista</Text>
          </View>
          <View style={styles.icon}>
            <Thumbsup
              style={styles.iconElement}
              name="thumbsup"
              size={25}
              color="white"
            />
            <Text style={[styles.iconText]}>Valorar</Text>
          </View>
          <View style={styles.icon}>
            <Plane
              style={styles.iconElement}
              name="paper-plane-outline"
              size={28}
              color="white"
            />
            <Text style={[styles.iconText]}>Compartir</Text>
          </View>
        </View>
        <View style={styles.tabs}>
          {[
            { name: "Episodios", selected: true },
            { name: "Similares", selected: false },
            { name: "Tráilers y más", selected: false },
          ].map((item, i) => {
            return (
              <TouchableOpacity
                onPress={() => onChangeTab(i)}
                style={[styles.tab]}
              >
                <Text
                  style={[
                    styles.tabElement,
                    selectedTab == i && styles.selectedText,
                  ]}
                >
                  {item.name}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
        <View>
          {selectedTab == 0 && (
            <View>
              <TouchableOpacity>
                <View style={styles.pickerBtn}>
                  <Text style={styles.buttonText}>Temporada 3</Text>
                  <Down name="down" size={15} color="#fff" />
                </View>
              </TouchableOpacity>
              <EpisodePicker data={episodes} />
            </View>
          )}
          {selectedTab == 1 && (
            <View style={styles.mt10}>
              <Related />
            </View>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    backgroundColor: "black",
    flex: 1,
  },
  title: {
    color: "white",
    fontWeight: "bold",
    marginVertical: 2,
    fontSize: 20,
  },
  subtitle: {
    marginTop: 4,
    flexDirection: "row",
    alignItems: "center",
  },
  year: {
    fontSize: 15,
    fontWeight: "500",
  },
  ageIconContainer: {
    backgroundColor: "#FF5B20",
    marginHorizontal: 3,
    paddingVertical: 2,
    paddingHorizontal: 5,
    borderRadius: 5,
  },
  age: {
    fontSize: 13,
    fontWeight: "600",
  },
  season: {
    fontSize: 15,
    fontWeight: "500",
  },
  hdIconContainer: {
    marginLeft: 6,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1.5,
    borderColor: "#464646",
    borderRadius: 3,
    paddingVertical: 1,
    paddingHorizontal: 2,
  },
  hdIcon: {
    color: "#ccc",
    fontSize: 11,
    fontWeight: "bold",
  },
  topTitle: {
    marginTop: 4,
    flexDirection: "row",
    alignItems: "center",
  },
  topIconContainer: {
    backgroundColor: "#E50914",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 3,
    paddingVertical: 3,
    paddingHorizontal: 5,
  },
  topText: {
    color: "white",
    marginLeft: 5,
    fontWeight: "900",
    fontSize: 17,
  },
  topIconText: {
    color: "white",
    fontWeight: "900",
    fontSize: 8,
    lineHeight: 10,
  },
  topIconNumber: {
    color: "white",
    fontWeight: "900",
    lineHeight: 13,
  },
  buttonContainer: {
    marginTop: 10,
    marginBottom: 15,
  },
  btn: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 40,
    borderRadius: 3,
  },
  play: {
    backgroundColor: "white",
    marginBottom: 10,
  },
  playText: {
    marginLeft: 10,
    fontWeight: "bold",
    fontSize: 16,
  },
  download: {
    backgroundColor: "#2A2A2A",
  },
  downloadText: {
    marginLeft: 10,
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  information: {
    marginVertical: 15,
  },
  description: {
    color: "white",
    fontSize: 15,
    fontWeight: "600",
    marginBottom: 10,
  },
  actor: {
    color: "#878888",
    fontSize: 13,
    marginBottom: 3,
  },
  createdBy: {
    color: "#878888",
    fontSize: 13,
  },
  interactionDetail: {
    width: "75%",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  icon: {
    alignItems: "center",
  },
  iconElement: {
    marginBottom: 10,
    height: 30,
    width: 30,
  },
  iconText: {
    fontSize: 12,
    color: "#878888",
  },
  tabs: {
    flexDirection: "row",
    marginTop: 12,
  },
  tab: {
    paddingVertical: 10,
    marginRight: 15,
  },
  tabElement: {
    fontSize: 15,
    color: "#878888",
    fontWeight: "900",
  },
  selectedText: {
    color: "white",
  },
  /* font color: white */
  white: {
    color: "white",
  },
  pickerBtn: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  buttonText: {
    color: "#878888",
    fontSize: 16,
    marginRight: 5,
  },
  mt10: {
    marginTop: 10,
  },
});

export default DetailScreen;
