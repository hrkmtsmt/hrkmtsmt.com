import React from 'react';

type Props = {
  children: React.ReactNode;
};

export type MainProps = Props;

const Component: React.FC<Props> = (props) => {
  return (
    <main
      className={
        '-mb-4 flex justify-center rounded-t-[16px] bg-primary-100 pt-[64px] pb-[80px] pr-4 pl-4 dark:bg-main-dark sm:pr-6 sm:pl-6 md:pr-8 md:pl-8'
      }
    >
      <div className={'grid w-full max-w-screen-xl grid-cols-1 gap-10'}>
        {props.children}
      </div>
    </main>
  );
};

export const Main = React.memo(Component);
