import React from 'react';

type Props = {
  title: string;
  children: React.ReactNode;
};

const Component: React.FC<Props> = (props) => {
  return (
    <section className={'grid grid-cols-1 gap-4'}>
      <h2
        className={
          'text-primary font-bold sm:text-[48px] sm:leading-[64px] text-[32px] leading-[48px] w-full'
        }
      >
        {props.title}
      </h2>
      <div className={'w-full'}>{props.children}</div>
    </section>
  );
};

export const Section = React.memo(Component);
