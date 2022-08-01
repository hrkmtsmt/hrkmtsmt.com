import React from 'react'
import { Main } from '@src/components/Main'
import { Header } from '@src/components/Header'
import { Footer } from '@src/components/Footer'
import type { MainProps } from '@src/components/Main'
import type { HeaderProps } from '@src/components/Header'
import type { FooterProps } from '@src/components/Footer'

type Props = {
  mainContent: MainProps['children']
  headerMenus: HeaderProps['headerMenus']
  socialLinks: FooterProps['socialLinks']
  copyright: FooterProps['copyright']
}

const Component: React.FC<Props> = (props) => {
  return (
    <React.Fragment>
      <Header headerMenus={props.headerMenus} />
      <Main>{props.mainContent}</Main>
      <Footer socialLinks={props.socialLinks} copyright={props.copyright} />
    </React.Fragment>
  )
}

export const Layout = React.memo(Component)
