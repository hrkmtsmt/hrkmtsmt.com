import React from 'react';
import Link from 'next/link';
import { Button } from '@src/components/Button';
import { UrlObject } from 'url';

type Props = {
  title: string;
  href: string | UrlObject;
  media: string;
};

const Component: React.VFC<Props> = props => {
  return (
    <Link href={props.href} passHref>
      <a
        className={
          'w-full grid-col-1 grid gap-2 rounded-4 bg-base p-4 leading-6 duration-200 ease-in-out hover:drop-shadow-regular hover:duration-200 hover:ease-in-out'
        }
      >
        <div>
          <h3 className={'text-4 font-bold'}>{props.title}</h3>
          <div className={'text-3'}>{props.media}</div>
        </div>
        <Button color={'secondary'}>More</Button>
      </a>
    </Link>
  );
};

export const PostCard = React.memo(Component);
