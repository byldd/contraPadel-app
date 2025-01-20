import React, {useRef, useState} from 'react';
import ScreenWrapper from '../../../components/layouts/screenWrapper/screenWrapper';
import Header from '../../../components/header';
import InputField from '../../../components/textInput';
import CustomButton from '../../../components/button/customButton';
import {RelativePathString, router} from 'expo-router';
import {ROUTES} from '@/src/navigation/routes';
import PhoneInput from 'react-native-phone-number-input';
import {commonStyles} from '@/src/styles/commonStyles';
import {logger} from '@/src/utils/commonFunctions';
import {Column} from '@/src/components/tools';
const RegisterScreen = () => {
  const [value, setValue] = useState('');

  const phoneInput = useRef<PhoneInput>(null);

  return (
    <ScreenWrapper>
      <Header title={'SIGN UP'} />
      <Column style={[commonStyles.ph16]}>
        <InputField placeholder="Full Name" topLabel="Full Name" />
        <InputField placeholder="Email" topLabel="Email" />
        <PhoneInput
          ref={phoneInput}
          defaultValue={value}
          defaultCode="IT"
          layout="first"
          onChangeText={text => {
            logger(text);
          }}
          onChangeFormattedText={text => {
            logger(text);
          }}
          withDarkTheme
          withShadow
          autoFocus
        />
        <InputField
          topLabel="Set Password (requirements)"
          placeholder="Set Password"
        />
        <InputField
          placeholder="Confirm Password"
          topLabel="Confirm Password"
        />
        <CustomButton
          rounded
          title="Create account"
          onPress={() =>
            router.navigate(ROUTES.FEATURE as string as RelativePathString)
          }
        />
      </Column>
    </ScreenWrapper>
  );
};

export default RegisterScreen;
