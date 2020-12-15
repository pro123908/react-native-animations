import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const CustomView = ({
  children,
  container,
  flexRow,
  alignCenter,
  justifyBetween,
  flexRowCenter,
  justifyCenter,
  flex,
  testID,
  marginBottom,
  alignSelfCenter,
  padding24,
  paddingTop,
  paddingBottom,
  paddingRight,
  paddingLeft,
  padding,
  container24,
  marginBottom24,
  marginBottom16,
  marginBottom36,
  marginBottom8,
  backgroundColor,
}) => {
  const containerStyles = [
    container && styles.container,
    flexRow && styles.flexRow,
    alignCenter && styles.alignCenter,
    justifyBetween && styles.justifyBetween,
    flexRowCenter && styles.flexRowCenter,
    justifyCenter && styles.justifyCenter,
    container24 && styles.container24,

    flex && {flex: flex},
    marginBottom && {marginBottom: marginBottom},
    alignSelfCenter && styles.alignSelfCenter,
    padding24 && styles.padding24,
    paddingTop && {paddingTop: paddingTop},
    paddingBottom && {paddingBottom: paddingBottom},
    paddingRight && {paddingRight: paddingRight},
    paddingLeft && {paddingLeft: paddingLeft},
    padding && {padding: padding},

    marginBottom24 && styles.marginBottom24,
    marginBottom16 && styles.marginBottom16,
    marginBottom36 && styles.marginBottom36,
    marginBottom8 && styles.marginBottom8,

    backgroundColor && {backgroundColor: backgroundColor},
  ];
  return (
    <View style={containerStyles} testID={testID}>
      {children}
    </View>
  );
};

export default CustomView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  container24: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 24,
  },

  flexRow: {
    flexDirection: 'row',
  },

  flexRowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  alignCenter: {
    alignItems: 'center',
  },

  alignSelfCenter: {
    alignSelf: 'center',
  },

  justifyBetween: {
    justifyContent: 'space-between',
  },

  justifyCenter: {
    justifyContent: 'center',
  },

  padding24: {
    padding: 24,
  },

  marginBottom24: {
    marginBottom: 24,
  },
  marginBottom16: {
    marginBottom: 16,
  },
  marginBottom36: {
    marginBottom: 36,
  },
  marginBottom8: {
    marginBottom: 8,
  },
});
