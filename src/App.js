/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import * as React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import Ionicons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";
import Octicons from "react-native-vector-icons/Octicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import ProfilePicker from "./screens/ProfilePicker";
import HomeScreen from "./screens/HomeScreen";
import DetailScreen from "./screens/DetailScreen";
import NewAdditionsScreen from "./screens/NewAdditionsScreen";
import SearchScreen from "./screens/SearchScreen";
import DownloadScreen from "./screens/DownloadScreen";
import CategoriesScreen from "./screens/CategoriesScreen";

import { getFocusedRouteNameFromRoute } from "@react-navigation/native";

const Stack = createStackNavigator();

const HomeStack = ({ route, navigation }) => {
  return (
    <Stack.Navigator
      initialRouteName="HomeStack"
      screenOptions={({ route }) => ({
        headerShown: false,
      })}
    >
      <Stack.Screen name="HomeStack" component={HomeScreen} />
    </Stack.Navigator>
  );
};

const Tab = createBottomTabNavigator();

const TabScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === "Home") {
            return <Octicons name="home" size={size} color={color} />;
          } else if (route.name === "News") {
            return (
              <MaterialCommunityIcons
                name="play-box-multiple-outline"
                size={size}
                color={color}
              />
            );
          } else if (route.name === "Search") {
            return <Feather name="search" size={size} color={color} />;
          } else if (route.name === "Downloads") {
            return (
              <Feather name="arrow-down-circle" size={size} color={color} />
            );
          }
        },
        tabBarStyle: {
          backgroundColor: "black",
        },
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="News" component={NewAdditionsScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Downloads" component={DownloadScreen} />
    </Tab.Navigator>
  );
};

const RootStack = createStackNavigator();

const RootStackScreen = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        screenOptions={{
          headerMode: "none",
        }}
      >
        <RootStack.Screen name="TabScreen" component={TabScreen} />
        <RootStack.Screen
          name="DetailScreen"
          component={DetailScreen}
          options={{
            headerMode: "none",
            presentation: "modal",
          }}
        />
        <RootStack.Screen
          name="CategoriesScreen"
          component={CategoriesScreen}
          options={{
            headerMode: "none",
            presentation: "transparentModal",
          }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default RootStackScreen;