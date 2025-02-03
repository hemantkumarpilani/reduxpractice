import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  accessToken: '',
  refreshToken: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    accessToken: (state, action) => {
      console.log('accessToken', action.payload);
      state.accessToken = action.payload;
    },
    refreshToken: (state, action) => {
      state.refreshToken = action.payload;
    },
    clearAuth: (state, action) => {
      console.log('clearAuth clearAuth');
      // state = initialState;
      (state.accessToken = ''), (state.refreshToken = '');
    },
  },
});

// Action creators are generated for each case reducer function
export const {accessToken, refreshToken, clearAuth} = authSlice.actions;

export default authSlice.reducer;
