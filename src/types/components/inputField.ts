import {
  ImageURISource,
  StyleProp,
  TextInputProps,
  TextStyle,
  ViewStyle,
} from 'react-native';

export type InputFieldProps = {
  topLabel?: string;
  placeholder?: string;
  secureTextEntry?: boolean;
  onInputChange?: (value: string) => void;
  validationMessage?: string;
  validate?: (input: string) => boolean;
  forceValidation?: boolean;
  style?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<TextStyle>;
  labelStyle?: StyleProp<TextStyle>;
  validationStyle?: StyleProp<TextStyle>;
  textInputProps?: TextInputProps;
  editable?: boolean;
  defaultValue?: string;
  multiline?: boolean;
  passwordIcon?: boolean;
  error?: boolean;
  success?: boolean;
  largeInput?: boolean;
  halfWidth?: boolean;
  capitalize?: boolean;
};
