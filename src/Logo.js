import React from 'react';
import {StyleSheet} from 'react-native';
import Animated from 'react-native-reanimated';
import CustomText from './utils/CustomText';

const Logo = ({scale}) => {
  return (
    <Animated.View style={{...styles.logo, transform: [{scale: scale}]}}>
      <CustomText fontWeight="400" fontSize={36}>
        Uber
      </CustomText>
    </Animated.View>
  );
};

export default Logo;

const styles = StyleSheet.create({
  logo: {
    backgroundColor: '#fff',
    height: 120,
    width: 120,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
