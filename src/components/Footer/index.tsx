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
        'bg-black rounded-t-[16px] pl-[32px] pr-[32px] pt-[64px] pb-[64px] text-white font-qualion flex justify-center'
      }
    >
      <nav
        className={
          'gap-x-[16px] max-w-[1280px] w-full gap-y-[8px] flex justify-start flex-wrap sm:flex-nowrap sm:justify-between'
        }
      >
        <ul>
          {props.socialLinks.map(item => {
            return (
              <li key={item.name}>
                <a
                  href={item.link}
                  title={item.name}
                  className={'flex justify-center items-center h-[1.5rem] w-[1.5rem] text-white'}
                >
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
