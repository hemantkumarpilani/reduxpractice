import React, {useState} from 'react';
import LoginView from './LoginView';
import {successfulToast} from '../../../utils/toastMessage';
import {useToast} from 'react-native-toast-notifications';
import {emailValidation, passwordValidation} from '../../../utils/validation';
import {authApi} from '../../../api/authApi';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {accessToken} from '../../../redux/slices/authSlice';
import EncryptedStorage from 'react-native-encrypted-storage';

const LoginController = () => {
  const toast = useToast();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const loginPress = async () => {
    if (!emailValidation(email).status) {
      toast.show(emailValidation(email).message, {
        type: 'danger',
        placement: 'top',
        duration: 2000,
        offset: 30,
        animationType: 'zoom-in',
      });
      return;
    }
    if (!passwordValidation(password).status) {
      toast.show(passwordValidation(password).message, {
        type: 'danger',
        placement: 'top',
        duration: 2000,
        offset: 30,
        animationType: 'zoom-in',
      });
    }

    if (emailValidation(email).status && passwordValidation(password).status) {
      // console.log('login successful');
      // console.log('flwd.sfma', authApi(email, password)?.status);
      const {status, data} = await authApi(email, password);
      console.log('akjlsdnklad', status, JSON.stringify(data));
      console.log('hemantt', status == 200);
      if (status == 200) {
        console.log('inside iff');
        try {
          await EncryptedStorage.setItem(
            'user_information',
            JSON.stringify({
              username: data?.username,
              email: data?.email,
              firstName: data?.firstName,
              lastName: data?.lastName,
              image: data?.image,
            }),
          );
          await EncryptedStorage.setItem(
            'refreshToken',
            JSON.stringify({
              refreshToken: data.refreshToken,
            }),
          );
          dispatch(accessToken(data.accessToken));

          // Congrats! You've just stored your first value!
        } catch (error) {
          // There was an error on the native side
        }

        // successfulToast(toast);
      }
    }

    // authApi(email, password);
  };
  return (
    <LoginView
      loginPress={loginPress}
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
    />
  );
};

export default LoginController;
