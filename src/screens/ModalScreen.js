import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from "react-native";

const { width, height } = Dimensions.get("window");

import Cross from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

import CategoriesList from "../components/CategoriesList";
import EpisodesList from "../components/EpisodesList";

const ModalScreen = ({ route }) => {
  const { type } = route.params;
  const [position, setPosition] = useState(0);
  const navigation = useNavigation();
  let styleDynamic = {};

  const componentsPicker = () => {
    if (type == "Categories") {
      return <CategoriesList />;
    } else if (type == "Seasons") {
      return <EpisodesList />;
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
      >
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          {componentsPicker()}
        </View>
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
    alignItems: "center",
    justifyContent: "center",
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
    bottom: 20,
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

export default ModalScreen;
