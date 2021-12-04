import React from 'react';

type Props = {
  children?: React.ReactNode;
};

export const List = (props: Props) => {
  return <ul className={'c-list'}>{props.children}</ul>;
};

export const ListItem = (props: Props) => {
  return <li className={'c-list-item'}>{props.children}</li>;
};
