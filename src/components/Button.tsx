import React from 'react';

type Color = 'primary' | 'secondary';

type Props = {
  color: Color;
} & React.ComponentProps<'button'>;

const Component: React.VFC<Props> = (props) => {
  const { color } = props;

  const primaryButtonColor =
    'bg-primary text-white before:bg-secondary hover:bg-secondary hover:text-primary';

  const secondaryButtonColor =
    'bg-secondary text-primary before:bg-primary hover:bg-secondary hover:text-white';

  const changeButtonColor = (color: Color) => {
    if (color === 'primary') return primaryButtonColor;
    if (color === 'secondary') return secondaryButtonColor;
  };

  return (
    <button
      {...props}
      className={`
        ${changeButtonColor(color)}
        relative z-10 flex w-fit overflow-hidden rounded-full px-5 text-center font-bold leading-10 duration-200 ease-in-out before:absolute before:-left-0 before:-z-10 before:h-10 before:w-full before:-translate-x-full before:rounded-full before:duration-200 before:ease-in-out before:content-[""] hover:duration-200 hover:ease-in-out hover:before:translate-x-0 active:scale-95
      `}
    />
  );
};

export const Button = React.memo(Component);
