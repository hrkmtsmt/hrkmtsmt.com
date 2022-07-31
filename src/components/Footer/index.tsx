import React from 'react';
import dayjs from 'dayjs';

type Props = {
  socialLinks: Array<{
    name: string;
    link: string;
    children: React.ReactNode;
  }>;
  copyrights: string;
};

export type FooterProps = Props;

const Components: React.FC<Props> = props => {
  return (
    <footer
      className={
        'bg-black rounded-t-[16px] pl-4 pr-4 sm:pl-8 sm:pr-8 pt-[64px] pb-[64px] text-white font-qualion flex justify-center'
      }
    >
      <nav
        className={
          'gap-x-4 max-w-screen-xl w-full gap-y-2 flex justify-start flex-wrap sm:flex-nowrap sm:justify-between'
        }
      >
        <ul>
          {props.socialLinks.map(item => {
            return (
              <li key={item.name}>
                <a href={item.link} title={item.name} className={'flex justify-center items-center h-6 w-6 text-white'}>
                  {item.children}
                </a>
              </li>
            );
          })}
        </ul>
        <div>{`© 2021-${dayjs().format('YYYY')} ${props.copyrights}`}</div>
      </nav>
    </footer>
  );
};

export const Footer = React.memo(Components);
