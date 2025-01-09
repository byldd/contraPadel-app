import {NavigationProp, ParamListBase} from '@react-navigation/native';
export type Navigation = NavigationProp<ParamListBase>;
export type navigationPropsType = {
  navigation: Navigation;
  route?: any;
};
