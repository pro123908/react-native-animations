import React, {useState} from 'react';
import {StyleSheet, Text as NativeText} from 'react-native';

const CustomText = ({
  text,
  fontSize,
  color,
  textTransform,
  backgroundColor,
  marginBottom,
  fontWeight,
  textAlign,
  onClick,
  flex,
  marginRight,
  marginLeft,
  marginTop,
  lineHeight,
  letterSpacing,
  maxWidth,
  opacity,
  disabledColor,
  children,
}) => {
  const [isFocus, isSetFocus] = useState(false);

  if (fontWeight) {
    if (fontWeight === '200') {
      fontWeight = 'PoppinsExtraLight';
    } else if (fontWeight === '300') {
      fontWeight = 'PoppinsLight';
    } else if (fontWeight === '500') {
      fontWeight = 'PoppinsMedium';
    } else if (fontWeight === '600') {
      fontWeight = 'PoppinsSemiBold';
    } else if (fontWeight === '700') {
      fontWeight = 'ProductSansBold';
    } else if (fontWeight === '800') {
      fontWeight = 'PoppinsExtraBold';
    }
  }
  const stylesText = [
    styles.text,
    fontSize && {fontSize: fontSize},
    color && {color: color},
    textTransform && {textTransform: textTransform},
    marginBottom && {marginBottom: marginBottom},

    backgroundColor && {backgroundColor: backgroundColor},
    fontWeight && {fontFamily: fontWeight},
    textAlign && {textAlign: textAlign},
    flex && {flex: flex},
    marginRight && {marginRight: marginRight},
    marginLeft && {marginLeft: marginLeft},
    marginTop && {marginTop: marginTop},

    lineHeight && {lineHeight: lineHeight},
    letterSpacing && {letterSpacing: letterSpacing},
    maxWidth && {maxWidth: maxWidth},
    opacity && {opacity: opacity},
    disabledColor && {color: disabledColor},
  ];
  return (
    <NativeText style={stylesText} onPress={onClick}>
      {children}
    </NativeText>
  );
};

const styles = StyleSheet.create({
  text: {
    color: '#0A0A0A',
    // fontFamily: 'PoppinsLight',
    fontFamily: 'ProductSansRegular',
    fontSize: 12,
    flexShrink: 1,

    // letterSpacing: -0.3,
  },
});

export default CustomText;
