import React, { useEffect, useState } from "react";
import { View, StyleSheet, TouchableHighlight } from "react-native";

import Video from "react-native-video";

import Orientation from "react-native-orientation";

import Close from "react-native-vector-icons/EvilIcons";

const VideoScreen = ({ route }) => {
  const { rotate } = route.params;
  const [loaded, setLoaded] = useState(false);
  const [buffer, setBuffer] = useState(false);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    Orientation.lockToLandscape();
    //this.player.presentFullscreenPlayer();
    return function cleanup() {
      Orientation.removeOrientationListener(Orientation.lockToPortrait());
    };
  }, []);

  return (
    <View style={styles.container}>
      <TouchableHighlight style={styles.btnColor}>
        <Close name="close" size={18} color="white" />
      </TouchableHighlight>
      <Video
        //fullscreenAutorotate={true}
        //fullscreenOrientation="landscape"
        controls
        //fullscreen={true}
        paused={paused}
        source={require("../../assets/broadchurch.mp4")} // Can be a URL or a local file.
        ref={(ref) => {
          this.player = ref;
        }} // Store reference
        muted
        onBuffer={() => setBuffer(true)}
        style={styles.backgroundVideo}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
  },
  backgroundVideo: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  btnColor: {
    position: "absolute",
    top: 20,
    right: 20,
    backgroundColor: "gray",
    height: 20,
    width: 20,
  },
});

export default VideoScreen;
