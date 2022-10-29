import React from 'react';

type Props = {
  title?: string;
  children: React.ReactNode;
};

const Component: React.FC<Props> = (props) => {
  return (
    <section className={'grid grid-cols-1 gap-4'}>
      {props.title && (
        <h2
          className={
            'w-full font-qualion-bold text-[32px] font-bold leading-[48px] text-primary-400 sm:text-[48px] sm:leading-[64px]'
          }
        >
          {props.title}
        </h2>
      )}
      <div className={'w-full'}>{props.children}</div>
    </section>
  );
};

export const Section = React.memo(Component);
