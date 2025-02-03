import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  userData: {},
};

export const userDetailSlice = createSlice({
  name: 'userdetail',
  initialState,
  reducers: {
    userInformation: state => {
      state.userData;
    },
  },
});

// Action creators are generated for each case reducer function
export const {userInformation} = userDetailSlice.actions;

export default userDetailSlice.reducer;
