import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export const SCREEN_HEIGHT = height;
export const SCREEN_WIDTH = width;

export const INPUT_HEIGHT = 150;
export const FOOTER_HEIGHT = 70;

export const LOGIN_VIEW_HEIGHT = INPUT_HEIGHT + FOOTER_HEIGHT;
