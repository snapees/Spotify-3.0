import {StyleSheet} from 'react-native';
import React, {FC} from 'react';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {BOTTOM_TAB_HEIGHT, Colors} from '../../utils/Constants';
import Animated, {useAnimatedStyle} from 'react-native-reanimated';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import ScalePress from '../../components/ui/ScalePress';
import {HomeTabIcon, LiabraryTabIcon, SearchTabIcon} from './TabIcon';
import {useSharedState} from './SharedContext';

const CustomTabBar: FC<BottomTabBarProps> = props => {
  const {state, navigation} = props;
  const safeAreaInsects = useSafeAreaInsets();

  const {translationY} = useSharedState();

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateY: -translationY.value}],
    };
  });
  return (
    <Animated.View
      style={[
        styles.tabBarContainer,
        animatedStyle,
        {paddingBottom: safeAreaInsects.bottom},
      ]}>
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event?.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });
        };

        return (
          <ScalePress
            key={index}
            style={styles.tabBarItem}
            onLongPress={onLongPress}
            onPress={onPress}>
            {route?.name === 'Home' && <HomeTabIcon focused={isFocused} />}
            {route?.name === 'Search' && <SearchTabIcon focused={isFocused} />}
            {route?.name === 'Liabrary' && (
              <LiabraryTabIcon focused={isFocused} />
            )}
          </ScalePress>
        );
      })}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  tabBarContainer: {
    backgroundColor: Colors.backgroundDark,
    width: '100%',
    position: 'absolute',
    height: BOTTOM_TAB_HEIGHT,
    bottom: 0,
    paddingTop: 10,
    zIndex: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  tabBarItem: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CustomTabBar;
