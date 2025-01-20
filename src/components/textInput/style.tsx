import {StyleSheet} from 'react-native';
import {theme} from '../../infrastructure/theme';

export const inputStyles = StyleSheet.create({
  container: {
    marginVertical: 8,
    width: '100%',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: theme.sizes[4],
    borderColor: theme.colors.border,
    height: 65,
    paddingHorizontal: theme.sizes[4],
    backgroundColor: theme.colors.ui.inputBg,
  },
  multiLineInput: {
    height: 150,
    textAlignVertical: 'top',
    alignItems: 'flex-start',
    paddingVertical: 12,
  },
  input: {
    flex: 1,
    color: theme.colors.ui.text,
    fontSize: theme.fontSizes.text,
    fontFamily: theme.fontWeights.bold500,
    height: '100%',
  },
  fixedInput: {
    color: theme.colors.ui.placeholder,
  },
  moneyText: {
    fontSize: 20,
  },
  icon: {
    padding: theme.units.sizes[10],
    height: '100%',
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topLabel: {
    fontSize: theme.fontSizes.text,
    color: theme.colors.ui.text,
    marginBottom: 8,
    fontFamily: theme.fontWeights.bold600,
  },
});
