import React from 'react';
import styles from './styles.module.scss';

type ColumnProps = {
  children: React.ReactNode;
  size: 'small' | 'medium' | 'large' | 'full';
};

type Column = {
  Column: typeof Column;
};

const Column: React.FC<ColumnProps> = (props) => {
  if (props.size === 'small') {
    return <div className={styles['column-small']}>{props.children}</div>;
  }
  if (props.size === 'medium') {
    return <div className={styles['column-medium']}>{props.children}</div>;
  }
  if (props.size === 'large') {
    return <div className={styles['column-large']}>{props.children}</div>;
  }
  if (props.size === 'full') {
    return <div className={styles['column-full']}>{props.children}</div>;
  }
};

type Props = {
  children: React.ReactNode;
};

export const Grid: React.FC<Props> & Column = (props) => {
  return <div className={styles.grid}>{props.children}</div>;
};

Grid.Column = Column;
