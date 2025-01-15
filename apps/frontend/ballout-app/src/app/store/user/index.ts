import { createSlice } from '@reduxjs/toolkit';

const initUser: UserStore = {
  firstName: undefined,
  lastName: undefined,
  email: undefined,
};

export type UserStore = {
  firstName?: string,
  lastName?: string,
  email?: string
}

export const userSlice = createSlice({
  name: 'user',
  initialState: initUser,
  reducers: {
    loginUser : (state, action) => {
      console.log('inside payload:', action);
      state.email = action.payload.email;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
    }
  }
});

export const userActions = userSlice.actions;
