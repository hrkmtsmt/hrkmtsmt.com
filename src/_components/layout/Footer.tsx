import React from 'react';
import { HorizonalList, NavLink } from '@src/_components/Nav';
import json from '@public/index.json';
import { color, mediaQuery } from '@src/styles/style';
import styled from 'styled-components';

const Container = styled.footer`
  width: 100%;
  background: var(${color.primaryColorDark});
  color: var(--color-white);
  padding: 80px 32px;
  z-index: -999;
  border-radius: 24px 24px 0 0;
  a {
    text-decoration: none;
    color: var(--color-white);
  }
  ${mediaQuery.tablet} {
    padding: 80px 24px;
  }
  ${mediaQuery.mobile} {
    padding: 80px 16px;
  }
`;

const Wrapper = styled.div`
  max-width: var(--max-width);
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  gap: 32px;
  ${mediaQuery.tablet} {
    gap: 24px;
  }
  ${mediaQuery.mobile} {
    gap: 16px;
    flex-direction: column;
  }
`;

export const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <nav className={'l-footer-nav'}>
          <HorizonalList>
            {json.socialMedia.map((data: any) => (
              <NavLink key={data.id} href={data.link}>
                <i className={`i-${data.id}`} />
              </NavLink>
            ))}
          </HorizonalList>
        </nav>
        <p className={'c-copyright'}>2021 hrkmtsmt</p>
      </Wrapper>
    </Container>
  );
};
