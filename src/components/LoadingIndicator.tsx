import React, { useEffect } from 'react';
export const LoadingIndicator = () => {
  useEffect(() => {
    const loader = document.getElementById('loader')!;
    const addIsLoaded = () => loader.classList.add('is-loaded')!;
    addEventListener('load', addIsLoaded());
    setTimeout(addIsLoaded(), 2000);
  }, []);
  return (
    <div id={'loader'} className={'c-loader'}>
      <div className={'c-loader-container'}>
        <div className={'c-loader-dot'}></div>
        <div className={'c-loader-dot'}></div>
        <div className={'c-loader-dot'}></div>
      </div>
    </div>
  );
};
