import React from 'react';

type Props = {
  children: React.ReactNode;
};

export type MainProps = Props;

const Component: React.FC<Props> = (props) => {
  return (
    <main
      className={
        '-mb-4 flex justify-center rounded-t-[16px] bg-primary-100 py-[64px] px-4 dark:bg-main-dark sm:px-6 md:px-8'
      }
    >
      <div className={'grid w-full max-w-screen-xl grid-cols-1 gap-10'}>
        {props.children}
      </div>
    </main>
  );
};

export const Main = React.memo(Component);
