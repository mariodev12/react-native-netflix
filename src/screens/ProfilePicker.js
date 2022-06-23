import React from "react";
import { View, Text, StyleSheet } from "react-native";

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
            <View style={[styles.avatar, styles.buttonAddProfile]}>
              <Text style={styles.buttonAddPlus}>+</Text>
            </View>
            <Text style={styles.gridName}>Añadir perfil</Text>
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
    fontSize: 17,
    flex: 1,
  },
  buttonEdit: {
    right: 0,
    color: "white",
    fontWeight: "bold",
    textAlign: "right",
    position: "absolute",
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
  },
  buttonAddProfile: {
    backgroundColor: "#191919",
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
