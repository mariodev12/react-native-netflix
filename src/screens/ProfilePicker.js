import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet, TouchableHighlight } from "react-native";

import Plus from "react-native-vector-icons/Fontisto";

const SAMPLE_USERS = [
  {
    name: "@Alf",
    avatar: "",
    backgroundColor: "#D22F28",
  },
  {
    name: "M@rio",
    avatar: "",
    backgroundColor: "#791BDE",
  },
  {
    name: "Irene",
    avatar: "",
    backgroundColor: "#DDB13D",
  },
];

const ProfilePicker = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.wrapper}>
      <View style={styles.header}>
        <Text style={styles.title}>¿Quién eres? Elige tu perfil</Text>
        <Text style={styles.buttonEdit}>Editar</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.grid}>
          {SAMPLE_USERS.map((item, id) => {
            return (
              <View style={styles.gridCell} key={id}>
                <View
                  style={[
                    styles.avatar,
                    { backgroundColor: item.backgroundColor },
                  ]}
                ></View>
                <Text style={styles.gridName}>{item.name}</Text>
              </View>
            );
          })}
          <View style={styles.gridCell}>
            <TouchableHighlight
              onPress={() => navigation.navigate("TabScreen")}
            >
              <View>
                <View style={[styles.avatar, styles.buttonAddProfile]}>
                  <Plus name="plus-a" color="white" size={25} />
                </View>
                <Text style={styles.gridName}>Añadir perfil</Text>
              </View>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "black",
    flex: 1,
    paddingTop: 80,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    position: "relative",
  },
  title: {
    color: "#ccc",
    textAlign: "center",
    letterSpacing: 0.4,
    fontSize: 15,
    flex: 1,
  },
  buttonEdit: {
    right: 0,
    color: "white",
    fontWeight: "900",
    textAlign: "right",
    position: "absolute",
    fontSize: 12,
  },
  content: {
    marginTop: 10,
    flex: 0.8,
    justifyContent: "center",
    alignItems: "center",
  },
  grid: {
    flexDirection: "row",
    width: 302,
    flexWrap: "wrap",
    padding: 20,
  },
  gridCell: {
    width: 100,
    height: 140,
    margin: 15,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 5,
  },
  buttonAddProfile: {
    backgroundColor: "black",
    borderRadius: 3,
    borderWidth: 2,
    borderColor: "#333333",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonAddPlus: {
    fontSize: 55,
    color: "white",
  },
  gridName: {
    color: "white",
    textAlign: "center",
    marginTop: 5,
  },
});

export default ProfilePicker;
