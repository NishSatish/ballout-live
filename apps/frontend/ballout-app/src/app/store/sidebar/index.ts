import { createSlice } from '@reduxjs/toolkit';

export const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState: {
    open: false
  },
  reducers: {
    toggleSidebar: (state, action) => {
      state.open = !state.open
    }
  }
})

export const sidebarActions = sidebarSlice.actions;
