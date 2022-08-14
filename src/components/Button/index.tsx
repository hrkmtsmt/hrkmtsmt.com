import React from 'react';

type Props = {
  color: 'primary' | 'secondary';
} & React.ComponentProps<'button'>;

const B: React.FC<React.ComponentProps<'button'>> = (props) => {
  return (
    <button
      {...props}
      className={`${props.className} relative z-10 flex w-fit overflow-hidden rounded-full px-5 text-center font-bold leading-10 duration-200 ease-in-out before:absolute before:-left-0 before:-z-10 before:h-10 before:w-full before:-translate-x-full before:rounded-full before:duration-200 before:ease-in-out before:content-[""] hover:duration-200 hover:ease-in-out hover:before:translate-x-0 active:scale-95`}
    />
  );
};

const Component: React.FC<Props> = (props) => {
  if (props.color === 'primary') {
    return (
      <B
        {...props}
        className={
          'text-wite bg-primary-400 before:bg-primary-200 hover:bg-primary-200 hover:text-primary-400'
        }
      />
    );
  }
  if (props.color === 'secondary') {
    return (
      <B
        {...props}
        className={
          'bg-primary-200 text-primary-400 before:bg-primary-400 hover:bg-primary-200 hover:text-white dark:bg-primary-800 dark:hover:text-primary-800'
        }
      />
    );
  }
};

export const Button = React.memo(Component);
