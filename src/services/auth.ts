import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import {OAuth} from '../enums/auth';

export class AuthService {
  static googleLogin = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const {data} = await GoogleSignin.signIn();
      const googleCredential = auth.GoogleAuthProvider.credential(
        data ? data.idToken : '',
      );
      const userCredential = await auth().signInWithCredential(
        googleCredential,
      );
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
          oauth: OAuth.GOOGLE,
          firebaseUid: firebaseUser.uid,
          // idToken: data && data.idToken,
        },
      };
      return response;
    } catch (error) {
      return error;
    }
  };
}
