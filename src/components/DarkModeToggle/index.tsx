import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
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
      className={
        'fixed top-4 right-4 flex h-8 w-[56px] rounded-full bg-primary-400 p-1 text-primary-400 sm:right-6 lg:right-8 xl:right-[max(calc(50%-640px),32px)]'
      }
    >
      <div
        className={
          'h-6 w-6 translate-x-0 overflow-hidden rounded-full bg-base-light duration-[0.4s] ease-in-out dark:translate-x-6 dark:bg-base-dark'
        }
      >
        <div
          className={
            '-translate-y-6 duration-[0.8s] ease-in-out dark:translate-y-0'
          }
        >
          <div className={'flex h-6 w-6 items-center justify-center'}>
            <Moon size={16} strokeWidth={3} />
          </div>
          <div className={'flex h-6 w-6 items-center justify-center'}>
            <Sun size={16} strokeWidth={3} />
          </div>
        </div>
      </div>
    </button>
  );
};

export const DarkModeToggle = React.memo(Component);
