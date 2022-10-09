import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '@src/store';

const darkModeSlice = createSlice({
  name: 'darkMode',
  initialState: {
    isDark: false
  },
  reducers: {
    checkTheme: (state) => {
      const isUserThemeDark = matchMedia(
        '(prefers-color-scheme: dark)'
      ).matches;
      if (isUserThemeDark) {
        state.isDark = true;
        document.documentElement.classList.add('dark');
      }
      if (!isUserThemeDark) {
        state.isDark = false;
        document.documentElement.classList.remove('dark');
      }
    },
    toggleTheme: (state) => {
      state.isDark = !state.isDark;
      if (state.isDark) document.documentElement.classList.add('dark');
      if (!state.isDark) document.documentElement.classList.remove('dark');
    }
  }
});

export const { checkTheme, toggleTheme } = darkModeSlice.actions;

export const darkModeReducer = darkModeSlice.reducer;

export const darkModeSelector = (state: RootState) => {
  return state.darkModeReducer;
};
