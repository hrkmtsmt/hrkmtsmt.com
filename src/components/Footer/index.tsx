import React from 'react';
import dayjs from 'dayjs';
import Link from 'next/link';

type Props = {
  socialLinks: Array<{
    name: string;
    link: string;
    children: React.ReactNode;
  }>;
  copyright: string;
};

export type FooterProps = Props;

const Components: React.FC<Props> = (props) => {
  return (
    <footer
      className={
        'bg-black rounded-t-[16px] pl-4 pr-4 sm:pl-8 sm:pr-8 pt-[64px] pb-[64px] text-white font-qualion flex justify-center'
      }
    >
      <nav
        className={
          'gap-x-4 max-w-screen-xl w-full gap-y-2 flex flex-col justify-start flex-wrap sm:flex-row sm:flex-nowrap sm:justify-between'
        }
      >
        <ul className={'flex gap-2'}>
          {props.socialLinks.map((item) => {
            return (
              <li key={item.name}>
                <Link href={item.link} passHref>
                  <a
                    title={item.name}
                    className={
                      'flex justify-center items-center h-6 w-6 text-white'
                    }
                  >
                    {item.children}
                  </a>
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
