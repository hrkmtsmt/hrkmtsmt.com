import React from 'react';
import { HorizonalList, NavLink } from '@src/_components/Nav';
import json from '@src/pulic/index.json';

export const Footer = () => {
  return (
    <footer className={'l-footer'}>
      <div className={'l-footer-inner'}>
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
      </div>
    </footer>
  );
};
