import React, { useState } from "react";

import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  Touchable,
  TouchableWithoutFeedback,
} from "react-native";
import Video from "react-native-video";

const { width, height } = Dimensions.get("window");

import Play from "react-native-vector-icons/Ionicons";

const VideoPlayer = ({ rotate }) => {
  const x = width / 2 - 30;
  const y = 220 / 2 - 30;
  const [loaded, setLoaded] = useState(false);
  const [buffer, setBuffer] = useState(false);
  const [paused, setPaused] = useState(false);
  return (
    <View>
      <Video
        fullscreenAutorotate={true}
        fullscreenOrientation={"landscape"}
        fullscreen={true}
        paused={paused}
        source={require("../../../assets/broadchurch.mp4")} // Can be a URL or a local file.
        ref={(ref) => {
          this.player = ref;
        }} // Store reference
        muted
        onBuffer={() => setBuffer(true)}
        style={styles.backgroundVideo}
      />
      <View style={styles.controls}>
        <View style={[styles.btnPlay, { left: x, top: y }]}>
          <TouchableWithoutFeedback>
            <View style={styles.iconPlay}>
              <Play
                style={styles.play}
                name={!paused ? "play" : "pause"}
                size={30}
                color="white"
              />
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundVideo: {
    width: width,
    height: 220,
  },
  controls: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  btnPlay: {
    position: "absolute",
  },
  iconPlay: {
    width: 60,
    height: 60,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    borderColor: "white",
    backgroundColor: "rgba(35, 35, 35, 0.8)",
  },
  play: {
    marginLeft: 3,
  },
});

export default VideoPlayer;
