import React from "react";
import { View, Text, StyleSheet, TouchableHighlight } from "react-native";

import Plus from "react-native-vector-icons/Fontisto";
import Edit from "react-native-vector-icons/MaterialIcons";
import Left from "react-native-vector-icons/Entypo";
import IconList from "react-native-vector-icons/Ionicons";
import Cross from "react-native-vector-icons/Entypo";
import { useNavigation } from "@react-navigation/native";

const DATA = require("../../userData.json");

const Profile = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableHighlight
        style={styles.closeButton}
        onPress={() => navigation.goBack()}
      >
        <View style={styles.btnContainer}>
          <Cross name="cross" color="white" size={16} />
        </View>
      </TouchableHighlight>
      <View style={styles.avatars}>
        {DATA.users.map((item, i) => {
          return (
            <View style={styles.avatarContent}>
              <View
                style={[
                  styles.avatar,
                  item.name == "Mario" && styles.selected,
                  { backgroundColor: item.backgroundColor },
                ]}
              />
              <Text
                style={[
                  styles.avatarName,
                  item.name == "Mario" && styles.selectedText,
                ]}
              >
                {item.name}
              </Text>
            </View>
          );
        })}
        <View style={styles.avatarContent}>
          <View style={[styles.avatar, styles.avatarPlus]}>
            <Plus name="plus-a" color="gray" size={30} />
          </View>
          <Text style={styles.avatarName}>Añadir perfil</Text>
        </View>
      </View>
      <View style={styles.adminProfiles}>
        <View style={styles.editButton}>
          <Edit name="edit" color="white" size={15} />
          <Text style={styles.editText}>Administrar perfiles</Text>
        </View>
      </View>
      <View style={styles.list}>
        {[
          { icon: "notifications", text: "Notificaciones" },
          { icon: "checkmark-outline", text: "Mi lista" },
          { icon: "settings", text: "Configuración de aplicación" },
          { icon: "person", text: "Cuenta" },
          { icon: "ios-help-circle-outline", text: "Ayuda" },
        ].map((item, i) => {
          return (
            <View style={styles.listItem}>
              <View style={styles.listItemLeft}>
                <IconList name={`${item.icon}`} color="white" size={18} />
                <Text style={styles.listItemText}>{item.text}</Text>
              </View>
              <View>
                <Left name="chevron-thin-right" size={10} color="white" />
              </View>
            </View>
          );
        })}
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>Cerrar sesión</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
    paddingTop: 40,
  },
  closeButton: {
    position: "absolute",
    top: 10,
    right: 10,
  },
  btnContainer: {
    backgroundColor: "#1F1F20",
    height: 20,
    width: 20,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  avatars: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 3,
  },
  avatarContent: {
    alignItems: "center",
    marginBottom: 25,
  },
  avatarName: {
    marginTop: 5,
    color: "white",
  },
  avatarPlus: {
    backgroundColor: "black",
    borderWidth: 1,
    borderColor: "grey",
    alignItems: "center",
    justifyContent: "center",
  },
  selected: {
    borderWidth: 1.5,
    borderColor: "white",
  },
  selectedText: {
    fontWeight: "bold",
  },
  adminProfiles: {
    alignItems: "center",
  },
  editButton: {
    flexDirection: "row",
    marginBottom: 20,
  },
  editText: {
    marginLeft: 5,
    color: "white",
  },
  list: {
    marginBottom: 20,
  },
  listItem: {
    paddingVertical: 15,
    paddingHorizontal: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#121212",
    marginBottom: 2,
  },
  listItemLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  listItemText: {
    marginLeft: 5,
    color: "white",
  },
  footer: {
    alignItems: "center",
  },
  footerText: {
    color: "white",
  },
});

export default Profile;
