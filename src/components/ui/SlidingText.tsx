import {Dimensions, LayoutChangeEvent, StyleSheet, View} from 'react-native';
import React, {FC, useEffect, useState} from 'react';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import CustomText from './CustomText';

interface SlidingTextProps {
  text: string | undefined;
  fontSize: any;
  fontFamily: any;
}

const SlidingText: FC<SlidingTextProps> = ({text, fontSize, fontFamily}) => {
  const [textWidth, setTextWidth] = useState<number>(0);
  const containerWidth = Dimensions.get('window').width - 130; // 130 is the width of the play button can be adjusted
  const translationX = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateX: translationX.value}],
    };
  });

  const handleTextLayout = (e: LayoutChangeEvent) => {
    const {width} = e.nativeEvent.layout;
    setTextWidth(width);
  };

  useEffect(() => {
    if (textWidth > containerWidth) {
      translationX.value = withRepeat(
        withTiming(-textWidth + 200, {duration: 8000, easing: Easing.linear}),
        -1,
        true,
      );
    } else {
      translationX.value = 0;
    }
  }, [textWidth, containerWidth, text, translationX]);

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.textContainer, animatedStyle]}>
        <CustomText
          fontSize={fontSize}
          numberOfLines={1}
          fontFamily={fontFamily}
          onLayout={handleTextLayout}>
          {text}
        </CustomText>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
    width: '100%',
  },
  textContainer: {
    flexDirection: 'row',
    width: 600,
  },
});

export default SlidingText;
