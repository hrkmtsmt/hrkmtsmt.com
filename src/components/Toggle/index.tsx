import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Sun, Moon } from 'react-feather';
import { toggleDarkMode } from '@src/store/darkMode';

const Component: React.FC = () => {
  const dispatch = useDispatch();
  const onClick = useCallback(() => {
    dispatch(toggleDarkMode());
  }, []);

  return (
    <button
      onClick={onClick}
      className={'w-[56px] h-8 rounded-full bg-primary p-1 flex'}
    >
      <div
        className={
          'w-6 h-6 rounded-full bg-base overflow-hidden ease-in-out duration-[0.4s] translate-x-0 dark:translate-x-6'
        }
      >
        <div
          className={
            'ease-in-out duration-[0.8s] -translate-y-6 dark:translate-y-0'
          }
        >
          <div
            className={'w-6 h-6 flex justify-center items-center text-primary'}
          >
            <Moon size={16} strokeWidth={3} />
          </div>
          <div
            className={'w-6 h-6 flex justify-center items-center text-primary'}
          >
            <Sun size={16} strokeWidth={3} />
          </div>
        </div>
      </div>
    </button>
  );
};

export const Toggle = React.memo(Component);
