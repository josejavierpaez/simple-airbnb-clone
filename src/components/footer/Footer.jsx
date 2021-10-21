import React from 'react';

export const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-fr'>
        <p>
          Made with<i className='fa-solid fa-heart'></i>By{' '}
          <i className='fa-brands fa-github'></i>
          <a
            href='https://github.com/josejavierpaez'
            target='_blank'
            rel='noreferrer'
          >
            Jose Javier Paez
          </a>
        </p>
      </div>

      <div className='footer-sr'></div>
    </div>
  );
};
