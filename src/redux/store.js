import {applyMiddleware, configureStore, createStore} from '@reduxjs/toolkit';
import userDetailReducer from './slices/userDetailSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistStore, persistReducer} from 'redux-persist';
import rootReducer from './rootReducer';
import {createLogger} from 'redux-logger';

// export const store = configureStore({
//   reducer: {
//     userDetail: userDetailReducer,
//   },
// });

const options = {
  level: 'log',
};

const logger = createLogger(options);

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

let store = createStore(persistedReducer, applyMiddleware(logger));
let persistor = persistStore(store);

export {store, persistor};

// export default () => {
//   let store = createStore(persistedReducer, applyMiddleware(logger));
//   let persistor = persistStore(store);
//   return {store, persistor};
// };
