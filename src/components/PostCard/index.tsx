import React from 'react';
import Link from 'next/link';
import { Button } from '@src/components/Button';

type Props = {
  title: string;
  tag: string;
  href: string;
};

const Component: React.VFC<Props> = (props) => {
  return (
    <Link href={props.href} passHref>
      <a
        className={
          'grid w-full grid-cols-1 gap-4 rounded-[16px] bg-base-light p-4 leading-6 duration-200 ease-in-out hover:drop-shadow-light hover:duration-200 hover:ease-in-out dark:bg-base-dark dark:hover:drop-shadow-dark'
        }
      >
        <div>
          <div className={'text-[12px] font-bold text-primary-400'}>
            {props.tag}
          </div>
          <h3 className={'h-12 overflow-hidden font-bold'}>{props.title}</h3>
        </div>
        <Button color={'secondary'}>More</Button>
      </a>
    </Link>
  );
};

export const PostCard = React.memo(Component);
