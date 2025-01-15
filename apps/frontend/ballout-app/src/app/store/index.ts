import { configureStore } from '@reduxjs/toolkit';
import { userSlice } from '@ballout-app/src/app/store/user';

export const store = configureStore({
  reducer: {
    user: userSlice.reducer
  }
});
