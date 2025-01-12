/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useSharedState} from '../../features/tabs/SharedContext';
import ScalePress from '../ui/ScalePress';

const AirPlayer = () => {
  const {expandPlayer} = useSharedState();
  return (
    <View style={styles.container}>
      <ScalePress onPress={expandPlayer}>
        <Text style={{textAlign: 'center'}}>AirPlayer</Text>
      </ScalePress>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 4,
    height: 60,
    justifyContent: 'center',
    backgroundColor: 'red',
    alignItems: 'center',
    paddingHorizontal: 5,
    overflow: 'hidden',
    width: '100%',
  },
});

export default AirPlayer;
