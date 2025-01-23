import {
  Image,
  Platform,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {fontR, screenHeight, screenWidth} from '../../utils/Scaling';
import {usePlayerStore} from '../../state/usePlayerStore';
import {useSharedState} from '../../features/tabs/SharedContext';
import ImageColors from 'react-native-image-colors';
import {Colors, darkenColor, Fonts} from '../../utils/Constants';
import LinearGradient from 'react-native-linear-gradient';
import Icon from '../ui/Icon';
import CustomText from '../ui/CustomText';
import VideoPlayer from './VideoPlayer';

const FullScreenPlayer = () => {
  const [colors, setColors] = useState(['#666', '#666']);
  const {collapsePlayer} = useSharedState();
  const {currentPlayingTrack} = usePlayerStore();

  useEffect(() => {
    const url = currentPlayingTrack?.artwork_uri;
    ImageColors.getColors(url, {
      fallback: '#666',
      cache: true,
      key: url,
    }).then((c: any) => {
      const color = Platform.OS === 'ios' ? c.secondary : c.vibrant;
      const darkenedSecondary = darkenColor(color);
      setColors([darkenedSecondary, darkenedSecondary]);
    });
  }, [currentPlayingTrack]);

  return (
    <View style={styles.container}>
      {currentPlayingTrack?.video_uri ? (
        <VideoPlayer video_uri={currentPlayingTrack?.video_uri} />
      ) : (
        <View style={styles.imageContainer}>
          <Image source={currentPlayingTrack?.artwork_uri} style={styles.img} />
        </View>
      )}

      <LinearGradient
        colors={[...colors, 'rgba(0, 0, 0, 0.6)']}
        style={styles.gradient}
      />

      <View style={styles.flexRowBetween}>
        <TouchableOpacity onPress={collapsePlayer}>
          <Icon
            name="chevron-down-sharp"
            iconFamily="Ionicons"
            size={fontR(20)}
          />
        </TouchableOpacity>
        <CustomText fontFamily={Fonts.Black} variant="h6">
          {currentPlayingTrack?.artist?.name}
        </CustomText>
        <Icon
          name="ellipsis-horizontal-sharp"
          iconFamily="Ionicons"
          size={fontR(20)}
        />
      </View>

      <View style={styles.albumContainer} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: screenHeight,
    // backgroundColor: 'green',
    backgroundColor: Colors.background,
  },
  gradient: {
    height: screenHeight,
    width: screenWidth,
    zIndex: -3,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  flexRowBetween: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    marginTop: Platform.OS === 'ios' ? 50 : 60,
  },
  albumContainer: {
    width: '100%',
    backgroundColor: Colors.background,
  },
  imageContainer: {
    position: 'absolute',
    width: screenWidth * 0.9,
    height: screenHeight * 0.42,
    overflow: 'hidden',
    borderRadius: 10,
    alignSelf: 'center',
    top: screenHeight * 0.17,
  },
  img: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});

export default FullScreenPlayer;
