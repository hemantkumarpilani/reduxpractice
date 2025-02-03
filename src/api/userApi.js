import axios from 'axios';
import {apiEndpoints, BASE_URL} from './endpoints';
import {store} from '../redux/store';

const userApi = async () => {
  console.log('userApi', store.getState().auth.accessToken);
  try {
    const response = await axios.get(`${BASE_URL}auth${apiEndpoints.getUser}`, {
      headers: {
        Authorization: `Bearer ${store.getState().auth.accessToken}`,
      },
    });

    console.log('userApi response', response?.status);
    return {status: response.status, data: response.data};
  } catch (error) {
    console.log('userApi error', error?.response);
    return {
      status: error?.response?.status || 500,
      data: error?.response?.data || {},
    };
  }
};

export {userApi};
