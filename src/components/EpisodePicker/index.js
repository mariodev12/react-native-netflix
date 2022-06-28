import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

import Download from "react-native-vector-icons/Octicons";
import OverlayPlay from "../OverlayPlay";
import ProgressBar from "../ProgressBar";

const EpisodePicker = ({ data }) => {
  return (
    <View>
      {/* https://www.themoviedb.org/t/p/w454_and_h254_bestv2/aPmaLYbRpTKFnWncmBnqBMuBDMp.jpg */}
      {data.map(
        ({ episode_number, name, runtime, overview, still_path }, i) => (
          <View style={styles.item}>
            <View style={styles.row}>
              <OverlayPlay>
                <Image
                  style={styles.thumbnail}
                  source={{
                    uri: `https://www.themoviedb.org/t/p/w454_and_h254_bestv2/${still_path}`,
                  }}
                />
                <ProgressBar width={"100%"} progress={"45%"} />
              </OverlayPlay>
              <View style={styles.titleContainer}>
                <Text style={[styles.white, styles.title]}>
                  {episode_number}. {name}
                </Text>
                <Text style={[styles.white, styles.runtime]}>{runtime}min</Text>
              </View>
              <View style={styles.iconContainer}>
                <Download name="download" color="white" size={25} />
              </View>
            </View>
            <View>
              <Text style={[styles.white, styles.description]}>{overview}</Text>
            </View>
          </View>
        )
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    marginBottom: 25,
  },
  row: {
    flexDirection: "row",
    marginBottom: 10,
    alignItems: "center",
  },
  thumbnail: {
    width: 120,
    height: 70,
  },
  titleContainer: {
    marginLeft: 5,
  },
  iconContainer: {
    marginLeft: "auto",
  },
  description: {
    fontSize: 14.9,
  },
  title: {
    fontSize: 14,
  },
  runtime: {
    fontSize: 12,
    color: "#888880",
  },
  white: {
    color: "white",
  },
});

export default EpisodePicker;
