import { createSlice } from '@reduxjs/toolkit';

const darkModeSlice = createSlice({
  name: 'darkMode',
  initialState: {
    isDark: false
  },
  reducers: {
    toggleDarkMode: (state) => {
      state.isDark = !state.isDark;
      if (state.isDark) document.documentElement.classList.add('dark');
      if (!state.isDark) document.documentElement.classList.remove('dark');
    }
  }
});

export const { toggleDarkMode } = darkModeSlice.actions;

export const darkModeReducer = darkModeSlice.reducer;
