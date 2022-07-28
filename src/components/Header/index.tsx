import React from 'react';
import Link from 'next/link';
import { Logo } from '@src/components/Logo';

type Props = {
  headerMenus: Array<{
    name: string;
    link: string;
  }>;
};

export type HeaderProps = Props;

const Component: React.FC<Props> = props => {
  return (
    <header className={'pl-[32px] pr-[32px] flex justify-center'}>
      <div className={`w-[100%] max-w-screen-xl h-[64px] flex flex-row`}>
        <nav className={'flex flex-row gap-[16px] items-center'}>
          <h1>
            <Link href={'/'} passHref>
              <a className={'h-[40px]'}>
                <Logo size={'40px'} color={'primary'} />
              </a>
            </Link>
          </h1>
          <ul className={'flex flex-row gap-[16px] items-center'}>
            {props.headerMenus.map(menu => {
              return (
                <li>
                  <Link href={menu.link} passHref>
                    <a
                      className={
                        'font-qualion-bold relative text-[1.5rem] block leading-[40px] text-primary hover:text-secondary ease-in-out duration-200 hover:ease-in-out hover:duration-200 hover:after:content-[""] after:w-[8px] after:h-[8px] after:bg-primary after:block after:rounded-[8px] after:absolute after:left-[50%] after:-translate-x-[50%] after:-bottom-[16px] after:opacity-0 hover:after:bg-secondary hover:after:opacity-100 after:hover:-bottom-[8px] after:ease-in-out after:duration-200 after:hover:duration-200 after:hover:ease-in-out'
                      }
                    >
                      {menu.name}
                    </a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export const Header = React.memo(Component);
