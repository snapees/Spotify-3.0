/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';
import Navigation from './src/navigation/Navigation';
import 'react-native-gesture-handler';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {LogBox, Platform} from 'react-native';
import TrackPlayer from 'react-native-track-player';

LogBox.ignoreAllLogs();
const App = () => {
  useEffect(() => {
    if (Platform.OS === 'android') {
      TrackPlayer.setupPlayer();
    }
  }, []);

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <Navigation />
    </GestureHandlerRootView>
  );
};

export default App;
