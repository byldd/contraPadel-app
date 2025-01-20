import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {config} from '@/src/utils/config';
import {AuthService} from '@/src/services/auth';
import {logger} from '@/src/utils/commonFunctions';

GoogleSignin.configure({
  webClientId: config.WEB_CLIENT_ID,
});
export const useLoginViewModal = () => {
  const onGoogleButtonPress = async () => {
    const response = AuthService.googleLogin();
    logger(response);
    return response;
  };
  return {onGoogleButtonPress};
};
