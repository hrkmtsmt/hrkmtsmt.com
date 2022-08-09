import { configureStore } from '@reduxjs/toolkit';
import { darkModeReducer } from '@src/store/darkMode';

export const store = configureStore({
  reducer: {
    darkModeReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
