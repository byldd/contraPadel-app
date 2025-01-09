import {Dimensions, StatusBar} from 'react-native';

const {width, height} = Dimensions.get('window');
const statusBarHeight = StatusBar.currentHeight || 0;
export const dimensions = {width, height, statusBarHeight};
