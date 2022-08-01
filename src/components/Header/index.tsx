import React from 'react'
import Link from 'next/link'
import { Logo } from '@src/components/Logo'

type Props = {
  headerMenus: Array<{
    name: string
    link: string
  }>
}

export type HeaderProps = Props

const Component: React.FC<Props> = (props) => {
  return (
    <header className={'pl-4 pr-4 sm:pl-8 sm:pr-8 flex justify-center'}>
      <div className={`w-full max-w-screen-xl h-[64px] flex flex-row`}>
        <nav className={'flex flex-row gap-4 items-center'}>
          <h1>
            <Link href={'/'} passHref>
              <a className={'h-10'}>
                <Logo size={'40px'} color={'primary'} />
              </a>
            </Link>
          </h1>
          <ul className={'flex flex-row gap-4 items-center'}>
            {props.headerMenus.map((menu) => {
              return (
                <li>
                  <Link href={menu.link} passHref>
                    <a
                      className={
                        'font-qualion-bold relative text-[24px] block leading-10 text-primary hover:text-secondary ease-in-out duration-200 hover:ease-in-out hover:duration-200 hover:after:content-[""] after:w-2 after:h-2 after:bg-primary after:block after:rounded-[8px] after:absolute after:left-[50%] after:-translate-x-[50%] after:-bottom-4 after:opacity-0 hover:after:bg-secondary hover:after:opacity-100 after:hover:-bottom-2 after:ease-in-out after:duration-200 after:hover:duration-200 after:hover:ease-in-out'
                      }
                    >
                      {menu.name}
                    </a>
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export const Header = React.memo(Component)
