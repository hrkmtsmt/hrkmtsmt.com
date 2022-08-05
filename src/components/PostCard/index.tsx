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
          'w-full grid-col-1 grid gap-4 rounded-[16px] bg-base p-4 leading-6 duration-200 ease-in-out hover:drop-shadow-regular hover:duration-200 hover:ease-in-out'
        }
      >
        <div>
          <div className={'text-[12px] text-primary font-bold'}>
            {props.tag}
          </div>
          <h3 className={'text-4 font-bold h-12 overflow-hidden'}>
            {props.title}
          </h3>
        </div>
        <Button color={'secondary'}>More</Button>
      </a>
    </Link>
  );
};

export const PostCard = React.memo(Component);
