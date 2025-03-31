import axios from 'axios';
import {apiEndpoints, BASE_URL} from './endpoints';
import {Alert} from 'react-native';

const authApi = async (username, password) => {
  try {
    const response = await axios.post(`${BASE_URL}auth${apiEndpoints.login}`, {
      username: username,
      password: password,
      expiresInMins: 30,
    });

    console.log('authApi response', response?.status);
    return {status: response.status, data: response.data};
  } catch (error) {
    console.log('authApi error', error?.status);
    Alert.alert('error', `authApi error ${error?.status}`);
    // toast.show(`Invalid status ${status}`, {
    //   type: 'danger',
    //   placement: 'top',
    //   duration: 2000,
    //   offset: 30,
    //   animationType: 'zoom-in',
    // });
    return {status: response.status, data: response.data};

    // return {
    //   status: error?.response?.status || 500,
    //   data: error?.response?.data || {},
    // };
  }
};

export {authApi};
