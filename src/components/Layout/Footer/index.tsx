import React from 'react';
import dayjs from 'dayjs';
import Link from 'next/link';

type Props = {
  socialLinks: Array<{
    name: string;
    href: string;
    children: React.ReactNode;
  }>;
  copyright: string;
};

export type FooterProps = Props;

const Components: React.FC<Props> = (props) => {
  return (
    <footer
      className={
        'flex justify-center rounded-t-[16px] bg-black px-4 py-[64px] font-qualion-regular text-white sm:px-6 md:px-8'
      }
    >
      <nav
        className={
          'flex w-full max-w-screen-xl flex-col flex-wrap justify-start gap-x-4 gap-y-2 sm:flex-row sm:flex-nowrap sm:justify-between'
        }
      >
        <ul className={'flex gap-2'}>
          {props.socialLinks.map((item) => {
            return (
              <li key={item.name}>
                <Link
                  href={item.href}
                  passHref
                  title={item.name}
                  className={
                    'flex h-6 w-6 items-center justify-center text-white'
                  }
                >
                  {item.children}
                </Link>
              </li>
            );
          })}
        </ul>
        <div>{`© 2021-${dayjs().format('YYYY')} ${props.copyright}`}</div>
      </nav>
    </footer>
  );
};

export const Footer = React.memo(Components);
