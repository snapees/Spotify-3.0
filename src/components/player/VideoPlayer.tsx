import {StyleSheet, View} from 'react-native';
import React, {FC} from 'react';
import {screenHeight, screenWidth} from '../../utils/Scaling';
import Video from 'react-native-video';
import LinearGradient from 'react-native-linear-gradient';

interface VideoPlayerProps {
  video_uri: any;
}

const VideoPlayer: FC<VideoPlayerProps> = ({video_uri}) => {
  return (
    <View>
      <Video
        source={video_uri}
        ignoreSilentSwitch="ignore"
        playWhenInactive={false}
        playInBackground={false}
        controls={false}
        disableFocus={true}
        muted
        style={styles.videoContainer}
        repeat
        hideShutterView
        resizeMode="cover"
        shutterColor="transparent"
      />

      <LinearGradient
        colors={[
          'rgba(0,0,0,0)',
          'rgba(0,0,0,0.1)',
          'rgba(0,0,0,0.2)',
          'rgba(0,0,0,0.3)',
          'rgba(0,0,0,0.4)',
          'rgba(0,0,0,0.7)',
          'rgba(0,0,0,0.8)',
          'rgba(0,0,0,0.9)',
          'rgba(0,0,0,1)',
        ]}
        style={styles.gradient}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  videoContainer: {
    height: screenHeight,
    aspectRatio: 9 / 16,
    width: screenWidth,
    position: 'absolute',
    zIndex: -2,
  },
  gradient: {
    height: screenHeight,
    width: screenWidth,
    zIndex: -1,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
});

export default VideoPlayer;
