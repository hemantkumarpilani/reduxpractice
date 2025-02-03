import axios from 'axios';
import {apiEndpoints, BASE_URL} from './endpoints';

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
    console.log('authApi error', error);
    // return {
    //   status: error?.response?.status || 500,
    //   data: error?.response?.data || {},
    // };
  }
};

export {authApi};
