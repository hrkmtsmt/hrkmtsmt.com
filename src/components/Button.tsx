import React from 'react';

type SelectColor = 'primary' | 'secondary';

type Props = {
  color: SelectColor;
} & React.ComponentProps<'button'>;

const Component: React.VFC<Props> = props => {
  const { color = 'primary' } = props;

  const changeButtonColor = (selectColor: SelectColor) => {
    const primaryColor =
      'bg-primary text-white before:bg-secondary hover:bg-secondary hover:text-primary';
    const secondaryColor =
      'bg-secondary text-primary before:bg-primary hover:bg-secondary hover:text-white';

    if (selectColor === 'primary') return primaryColor;
    if (selectColor === 'secondary') return secondaryColor;
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
