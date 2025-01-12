import React, {FC} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from '../utils/NavigationUtils';
import SplashScreen from '../features/auth/SplashScreen';
import MoodScanner from '../features/moodscan/MoodScanner';
import SharedTransition from '../features/tabs/SharedTransition';

const Stack = createNativeStackNavigator();

const navigation: FC = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{
          headerShown: false,
          animation: 'fade',
        }}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="MoodScanner" component={MoodScanner} />
        <Stack.Screen name="SharedTransition" component={SharedTransition} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default navigation;
