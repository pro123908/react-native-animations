import React, {useRef} from 'react';
import {StyleSheet, Text} from 'react-native';
import {
  State,
  TapGestureHandler,
  TextInput,
} from 'react-native-gesture-handler';
import Animated, {
  cond,
  eq,
  interpolate,
  set,
  useCode,
} from 'react-native-reanimated';
import {
  onGestureEvent,
  withSpringTransition,
  withTimingTransition,
} from 'react-native-redash';
import Logo from './Logo';
import {LOGIN_VIEW_HEIGHT, SCREEN_HEIGHT} from './utils/Constants';
import CustomText from './utils/CustomText';
import CustomView from './utils/CustomView';

const App = () => {
  const scale = useRef(new Animated.Value(0));

  const scaleAnimation = withTimingTransition(scale.current);

  // const translateY = interpolate(scaleAnimation, {
  //   inputRange: [0, 1],
  //   outputRange: [SCREEN_HEIGHT, SCREEN_HEIGHT - LOGIN_VIEW_HEIGHT],
  // });

  const innerLoginTranslateY = interpolate(scaleAnimation, {
    inputRange: [0, 1],
    outputRange: [LOGIN_VIEW_HEIGHT, 0],
  });

  const outerLoginTranslateY = interpolate(isOpenAnimation, {
    inputRange: [0, 1],
    outputRange: [SCREEN_HEIGHT - LOGIN_VIEW_HEIGHT, 0],
  });

  const gestureState = useRef(new Animated.Value(State.UNDETERMINED));
  const gestureHandler = onGestureEvent({state: gestureState.current});

  console.log('gesture state => ', gestureState.current);

  const isOpen = useRef(new Animated.Value(0));
  const isOpenAnimation = withSpringTransition(isOpen.current);

  useCode(() =>
    cond(eq(gestureState.current, State.END), [
      cond(eq(isOpen.current, 0), set(isOpen.current, 1)),
    ]),
  );

  useCode(() => cond(eq(scale.current, 0), set(scale.current, 1)), []);

  return (
    <CustomView container backgroundColor="#2289d6">
      <CustomView flex={1} justifyCenter alignCenter>
        <Logo scale={scaleAnimation} />
      </CustomView>

      <Animated.View
        style={{
          backgroundColor: '#fff',
          ...StyleSheet.absoluteFill,
          transform: [{translateY: outerLoginTranslateY}],
        }}>
        <Animated.View
          style={{
            backgroundColor: '#2289d6',
            height: LOGIN_VIEW_HEIGHT,
            alignItems: 'center',
            justifyContent: 'center',
            position: 'absolute',
            top: 0,
            right: 0,
            left: 0,
            borderWidth: 1,
          }}>
          <CustomText>Overlay bg</CustomText>
        </Animated.View>
        <Animated.View>
          <Animated.View
            style={{
              height: LOGIN_VIEW_HEIGHT,
              transform: [{translateY: innerLoginTranslateY}],
              borderWidth: 1,
              backgroundColor: '#fff',
            }}>
            <Animated.View style={{...styles.heading}}>
              <CustomText fontSize={24}>Get moving with Uber</CustomText>
            </Animated.View>
            <TapGestureHandler onGestureEvent={() => console.log('yo')}>
              <Animated.View>
                <Animated.View
                  pointerEvents="none"
                  style={{
                    flexDirection: 'row',
                    margin: 25,
                    alignItems: 'center',
                  }}>
                  <Text style={{...styles.prefix}}>+92</Text>

                  <TextInput
                    keyboardType="number-pad"
                    placeholder="Enter your mobile number"
                    style={{...styles.textInput}}
                  />
                </Animated.View>
              </Animated.View>
            </TapGestureHandler>
          </Animated.View>
        </Animated.View>
      </Animated.View>
    </CustomView>
  );
};

export default App;

const styles = StyleSheet.create({
  heading: {
    alignItems: 'flex-start',
    marginHorizontal: 25,
    marginTop: 50,
  },

  prefix: {
    fontSize: 20,
    paddingHorizontal: 10,
  },

  textInput: {
    flex: 1,
    fontSize: 20,
  },
});
