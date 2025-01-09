import {isDarkMode} from '../../components/tools';

export const colors = {
  ui: {
    primary: '#426990',
    secondary: '#689E9F',
    text: isDarkMode ? '#F9F6EE' : '#150F2F',
    subtext: '#150F2FCC',
    transparent: 'transparent',
    error: '#D23D50',
    errorLight: isDarkMode ? '#1d0b0d' : '#fdf2f3',
    success: '#5CB85C',
    successLight: isDarkMode ? '#0f1b0f' : '#f3f8f1',
    pending: '#FFC829',
    inputBg: '#E1E1E180',
    placeholder: isDarkMode ? '#FFFFFF60' : '#150F2F80',
    black: isDarkMode ? '#FFFFFF' : '#150F2F',
    white: isDarkMode ? '#191919' : '#FFFFFF',
    primaryOpacity: isDarkMode ? '#222222' : '#dee5ec',
    secondaryOpacity: '#689E9F20',
    gray: isDarkMode ? '#ffffff80' : '#150F2F99',
    overlay: isDarkMode ? '#FFFFFF30' : '#00000030',
    yellowDark: '#FEC728',
  },
  bg: {
    primary: '#ffd633',
    secondary: isDarkMode ? '#FFFFFF08' : '#F0F4F7',
    lightGray: '#3C5C7D0F',
  },
  border: isDarkMode ? '#ffffff30' : '#D0D3D9',
  borderLight: isDarkMode ? '#ffffff15' : '#D0D3D975',
};
