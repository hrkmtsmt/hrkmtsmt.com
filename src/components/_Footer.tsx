import React from 'react';
import { NavHorizonal, NavItemLink, NavIcon } from './_Navigation';
import json from '@public/index.json';

export const Footer = () => {
  return (
    <footer className={'l-footer'}>
      <div className={'l-footer-inner'}>
        <nav className={'l-footer-nav'}>
          <NavHorizonal>
            {json.socialMedia.map((data) => (
              <NavItemLink key={data.id} link={data.link}>
                <NavIcon className={`i-${data.id}`} />
              </NavItemLink>
            ))}
          </NavHorizonal>
        </nav>
        <p className={'c-copyright'}>2021 hrkmtsmt</p>
      </div>
    </footer>
  );
};
