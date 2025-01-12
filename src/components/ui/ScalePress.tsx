/* eslint-disable react-native/no-inline-styles */
import {ViewStyle, Animated, TouchableOpacity} from 'react-native';
import React, {FC, ReactNode} from 'react';

interface ScalePressProps {
  onPress?: () => void;
  onLongPress?: () => void;
  children: ReactNode;
  style?: ViewStyle;
}

const ScalePress: FC<ScalePressProps> = ({
  onPress,
  onLongPress,
  children,
  style,
}) => {
  const scaleValue = new Animated.Value(1);

  const onPressIn = () => {
    Animated.spring(scaleValue, {
      toValue: 0.8,
      useNativeDriver: true,
    });
  };

  const onPressOut = () => {
    Animated.timing(scaleValue, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    });
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      style={style}
      onLongPress={onLongPress}>
      <Animated.View
        style={[{transform: [{scale: scaleValue}], width: '100%'}]}>
        {children}
      </Animated.View>
    </TouchableOpacity>
  );
};

export default ScalePress;
