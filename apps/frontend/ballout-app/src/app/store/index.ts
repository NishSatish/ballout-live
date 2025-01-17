import { configureStore } from '@reduxjs/toolkit';
import { userSlice } from '@ballout-app/src/app/store/user';
import { organizationSlice } from '@ballout-app/src/app/store/organization';
import { sidebarSlice } from '@ballout-app/src/app/store/sidebar';

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    organization: organizationSlice.reducer,
    sidebar: sidebarSlice.reducer
  }
});
