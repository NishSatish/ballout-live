import { createSlice } from '@reduxjs/toolkit';

const initUser: UserStore = {
  firstName: undefined,
  lastName: undefined,
  email: undefined,
};

type UserStore = {
  firstName?: string,
  lastName?: string,
  email?: string
}

export const userSlice = createSlice({
  name: 'user',
  initialState: initUser,
  reducers: {
    loginUser : (state, action) => {
      state = action.payload;
    }
  }
});
