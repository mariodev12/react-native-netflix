import React, { useState } from "react";
import { View, StyleSheet } from "react-native";

import Video from "react-native-video";

const VideoScreen = ({ route }) => {
  const { rotate } = route.params;
  const [loaded, setLoaded] = useState(false);
  const [buffer, setBuffer] = useState(false);
  const [paused, setPaused] = useState(false);
  return (
    <View style={styles.container}>
      <Video
        fullscreenAutorotate={true}
        fullscreenOrientation="landscape"
        controls
        fullscreen={true}
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
});

export default VideoScreen;
