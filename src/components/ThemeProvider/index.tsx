import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { checkTheme } from '@src/store/darkMode';

type Props = {
  children: React.ReactNode;
};

export const ThemeProvider: React.FC<Props> = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkTheme());
  }, []);

  return <React.Fragment>{props.children}</React.Fragment>;
};
