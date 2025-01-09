import {StyleSheet} from 'react-native';
import {theme} from '../infrastructure/theme';
import {dimensions} from '../components/tools';

export const commonStyles = StyleSheet.create({
  transparent: {
    backgroundColor: 'transparent',
  },
  blacktext: {
    color: 'black',
  },
  whiteText: {
    color: 'white',
  },
  fullFlex: {
    flex: 1,
  },
  noFlex: {
    flex: 0,
  },
  fullHeight: {
    height: '100%',
  },
  fullWidth: {
    width: '100%',
  },
  halfWidth: {
    width: dimensions.width / 2 - 24,
  },
  padding16: {
    padding: theme.sizes[4],
  },
  ph16: {
    paddingHorizontal: theme.sizes[4],
  },
  padding8: {
    padding: theme.sizes[2],
  },
  centerText: {
    textAlign: 'center',
  },
  tinyText: {
    fontSize: theme.units.sizes[10],
    color: theme.colors.ui.text,
    fontFamily: theme.fontWeights.bold500,
  },
  smallText: {
    fontSize: theme.fontSizes.caption,
    color: theme.colors.ui.text,
    fontFamily: theme.fontWeights.bold500,
  },
  basicText: {
    fontSize: theme.fontSizes.button,
    color: theme.colors.ui.text,
    fontFamily: theme.fontWeights.bold600,
  },
  text16: {
    fontSize: theme.fontSizes.text,
    color: theme.colors.ui.text,
    fontFamily: theme.fontWeights.bold500,
  },
  text18: {
    fontSize: theme.fontSizes.title,
    color: theme.colors.ui.text,
    fontFamily: theme.fontWeights.bold500,
  },
  text20: {
    fontSize: theme.fontSizes.h6,
    color: theme.colors.ui.text,
    fontFamily: theme.fontWeights.bold500,
  },
  errorMessage: {
    fontSize: theme.fontSizes.button,
    fontFamily: theme.fontWeights.bold400,
    color: theme.colors.ui.error,
    marginTop: theme.sizes[2],
  },
  heading: {
    fontSize: theme.fontSizes.h3,
    fontFamily: theme.fontWeights.bold600,
    color: theme.colors.ui.text,
    marginBottom: 24,
  },
  bold700: {
    fontFamily: theme.fontWeights.bold700,
  },
  bold600: {
    fontFamily: theme.fontWeights.bold600,
  },
  bold500: {
    fontFamily: theme.fontWeights.bold500,
  },
  bold400: {
    fontFamily: theme.fontWeights.bold400,
  },
  primaryColor: {
    color: theme.colors.ui.primary,
  },
  secondaryColor: {
    color: theme.colors.ui.secondary,
  },
  grayColor: {
    color: theme.colors.ui.gray,
  },
  rejectText: {
    color: theme.colors.ui.error,
  },
  successText: {
    color: theme.colors.ui.success,
  },
  pendingText: {
    color: theme.colors.ui.yellowDark,
  },
  underlineText: {
    textDecorationLine: 'underline',
  },
  lineXs: {
    lineHeight: 18,
  },
  lineSm: {
    lineHeight: 21,
  },
  InputTopLabel: {
    fontSize: theme.fontSizes.button,
    color: theme.colors.ui.gray,
    marginBottom: 8,
    fontFamily: theme.fontWeights.bold400,
  },
  descInput: {
    height: 80,
    textAlignVertical: 'top',
  },
  inputStyle: {
    backgroundColor: theme.colors.ui.inputBg,
    flex: 1,
    borderRadius: theme.sizes[3],
    paddingVertical: 6,
    paddingLeft: theme.sizes[10],
    fontSize: theme.fontSizes.button,
    fontFamily: theme.fontWeights.bold600,
    color: theme.colors.ui.text,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  dot: {
    height: 8,
    width: 11,
    backgroundColor: theme.colors.border,
    borderRadius: 10,
  },
  activeDot: {
    width: 36,
    backgroundColor: theme.colors.ui.gray,
  },
  boxShadow: {
    shadowColor: theme.colors.ui.gray,
    // Shadow for iOS
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    // Shadow for Android
    elevation: 5,
  },
  badgeContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: theme.colors.ui.secondary,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderBottomLeftRadius: 15,
  },
  card: {
    backgroundColor: theme.colors.ui.white,
    borderRadius: 10,
    padding: 16,
    shadowColor: theme.colors.ui.gray,
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  verticalDivider: {
    height: 40,
    backgroundColor: theme.colors.border,
    width: 1,
  },
  horizontalDivider: {
    width: '100%',
    height: 1,
    backgroundColor: theme.colors.border,
    marginVertical: 14,
  },
  riskCardImage: {
    height: 110,
    width: '100%',
    borderRadius: 10,
    marginVertical: 8,
  },
  activeDotIndicator: {
    height: 8,
    width: 8,
    borderRadius: 100,
    backgroundColor: theme.colors.ui.error,
    position: 'absolute',
    right: 0,
    top: 0,
    zIndex: 100,
  },
});
