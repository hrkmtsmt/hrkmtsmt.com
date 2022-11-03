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

const Component: React.FC<Props> = (props) => {
  return (
    <header
      className={
        'flex h-[64px] justify-center px-4 font-qualion-bold sm:px-6 md:px-8'
      }
    >
      <div className={`flex h-[64px] w-full max-w-screen-xl flex-row`}>
        <nav className={'flex flex-row items-center gap-4'}>
          <h1>
            <Link href={'/'} passHref className={'h-10'}>
              <Logo size={'40px'} color={'primary-400'} />
            </Link>
          </h1>
          <ul className={'flex flex-row items-center gap-4'}>
            {props.headerMenus.map((menu) => {
              return (
                <li key={menu.name}>
                  <Link
                    href={menu.link}
                    passHref
                    className={
                      'relative block text-[24px] font-bold leading-10 text-primary-400 duration-200 ease-in-out after:absolute after:left-[50%] after:-bottom-4 after:block after:h-2 after:w-2 after:translate-x-[-50%] after:rounded-[8px] after:bg-primary-400 after:opacity-0 after:duration-200 after:ease-in-out hover:duration-200 hover:ease-in-out after:hover:-bottom-2 hover:after:opacity-100 after:hover:duration-200 after:hover:ease-in-out hover:after:content-[""]'
                    }
                  >
                    {menu.name}
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
