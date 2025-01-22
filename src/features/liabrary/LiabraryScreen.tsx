import {StyleSheet, View} from 'react-native';
import React, {FC} from 'react';
import CustomSafeAreaView from '../../components/ui/CustomSafeAreaView';
import CustomHeader from '../../components/ui/CustomHeader';
import Icon from '../../components/ui/Icon';
import CustomText from '../../components/ui/CustomText';
import {fontR, screenHeight} from '../../utils/Scaling';

const LiabraryScreen: FC = () => {
  return (
    <CustomSafeAreaView>
      <CustomHeader title="" />
      <View style={styles.container}>
        <Icon iconFamily="Ionicons" name="musical-note" size={fontR(45)} />
        <CustomText variant={'h3'}>Coming Soon!</CustomText>
      </View>
    </CustomSafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: screenHeight * 0.7,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LiabraryScreen;
