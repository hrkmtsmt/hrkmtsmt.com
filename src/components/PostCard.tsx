import React from 'react';
import Link from 'next/link';
import { Button } from '@src/components/Button';
import { UrlObject } from 'url';

type Props = {
  title: string;
  href: string | UrlObject;
  media: string;
};

export const PostCard: React.VFC<Props> = props => {
  return (
    <Link href={props.href} passHref>
      <a
        className={
          'grid-col-1 grid gap-[0.5rem] rounded-[1rem] bg-base p-[1rem] leading-[1.5rem] duration-200 ease-in-out hover:drop-shadow-regular hover:duration-200 hover:ease-in-out'
        }
      >
        <div>
          <h3 className={'text-[1rem] font-bold'}>{props.title}</h3>
          <div className={'text-[12px]'}>{props.media}</div>
        </div>
        <Button color={'secondary'}>More</Button>
      </a>
    </Link>
  );
};
