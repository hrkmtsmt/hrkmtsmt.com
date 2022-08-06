import type { RootState } from '@src/store';

export const darkModeSelector = (state: RootState) => {
  return state.darkModeReducer.isDark;
};
