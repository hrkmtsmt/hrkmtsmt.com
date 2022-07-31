import React from 'react';

type Props = {
  children: React.ReactNode;
};

const Component: React.FC<Props> = props => {
  return (
    <main className={'pt-8 pb-8 pr-4 pl-4 sm:pr-8 sm:pl-8 flex justify-center'}>
      <div className={'w-full max-w-screen-xl grid grid-cols-1 gap-10'}>{props.children}</div>
    </main>
  );
};

export const Main = React.memo(Component);
