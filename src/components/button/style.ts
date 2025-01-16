import {StyleSheet} from 'react-native';
import {theme} from '../../infrastructure/theme';

export const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    height: 56,
    paddingHorizontal: 4,
    borderRadius: 10,
    borderWidth: 0,
    marginVertical: 8,
    width: '100%',
    borderColor: theme.colors.ui.transparent,
  },

  outlined: {
    borderWidth: 2,
    backgroundColor: theme.colors.ui.transparent,
    borderColor: theme.colors.ui.primary,
  },

  small: {
    height: 44,
    paddingHorizontal: 3,
    borderRadius: 10,
  },

  disabled: {
    opacity: 0.5,
  },
  rounded: {
    borderRadius: 500,
  },
  text: {
    fontSize: theme.fontSizes.h6,
    fontFamily: theme.fontWeights.bold500,
    color: theme.colors.ui.white,
  },
});
