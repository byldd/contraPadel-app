import {useEffect} from 'react';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import {config} from '@/src/utils/config';

GoogleSignin.configure({
  webClientId: config.WEB_CLIENT_ID,
});
export const useLoginViewModal = () => {
  async function onGoogleButtonPress() {
    await GoogleSignin.hasPlayServices();
    const {data} = await GoogleSignin.signIn();
    const googleCredential = auth.GoogleAuthProvider.credential(
      data ? data.idToken : '',
    );
    const userCredential = await auth().signInWithCredential(googleCredential);
    const firebaseUser = userCredential.user;

    if (!firebaseUser.email || !firebaseUser.uid) {
      throw new Error('Missing required user information from Google');
    }

    const fullName = firebaseUser.displayName || '';
    const [first = '', last = ''] = fullName.split(' ');
    const response = {
      user: {
        email: firebaseUser.email,
        name: {first, last},
        oauth: 'GOOGLE',
        firebaseUid: firebaseUser.uid,
        idToken: data && data.idToken,
      },
    };
    console.log(response);
    return response;
  }
  return {onGoogleButtonPress};
};
