import React from 'react';

type ColumnProps = {
  children: React.ReactNode;
  size: 'small' | 'medium' | 'large' | 'full';
};

type Column = {
  Column: typeof Column;
};

const Column: React.FC<ColumnProps> = props => {
  if (props.size === 'small') {
    return <div className={'col-span-2 sm:col-span-2 md:col-span-3'}>{props.children}</div>;
  }
  if (props.size === 'medium') {
    return <div className={'col-span-2 sm:col-span-4 md:col-span-4'}>{props.children}</div>;
  }
  if (props.size === 'large') {
    return <div className={'col-span-4 sm:col-span-4 md:col-span-6'}>{props.children}</div>;
  }
  if (props.size === 'full') {
    return <div className={'col-span-4 sm:col-span-8 md:col-span-12'}>{props.children}</div>;
  }
};

type Props = {
  children: React.ReactNode;
};

export const Grid: React.FC<Props> & Column = props => {
  return (
    <div className={'w-full max-w-screen-lg grid grid-cols-4 gap-4 sm:grid-cols-8 sm:gap-8 md:grid-cols-12'}>
      {props.children}
    </div>
  );
};

Grid.Column = Column;
