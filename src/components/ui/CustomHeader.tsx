import {Image, StyleSheet, View} from 'react-native';
import React, {FC} from 'react';
import CustomText from './CustomText';
import {Fonts} from '../../utils/Constants';
import {fontR} from '../../utils/Scaling';

interface CustomHeaderProps {
  title: string;
}

const CustomHeader: FC<CustomHeaderProps> = ({title}) => {
  return (
    <View style={styles.flexRpw}>
      <Image
        source={require('../../assets/images/logo_text.png')}
        style={styles.img}
      />
      <CustomText
        fontFamily={Fonts.Medium}
        fontSize={fontR(12)}
        style={styles.text}>
        {title}
      </CustomText>
    </View>
  );
};

const styles = StyleSheet.create({
  img: {
    width: 140,
    height: 50,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  flexRpw: {
    gap: 10,
  },
  text: {
    marginTop: 2,
  },
});

export default CustomHeader;
