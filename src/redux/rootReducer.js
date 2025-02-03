import {combineReducers} from 'redux';
import userDetailReducer from './slices/userDetailSlice';
import authReducer from './slices/authSlice';

const rootReducer = combineReducers({
  user: userDetailReducer,
  auth: authReducer,
});

export default rootReducer;
