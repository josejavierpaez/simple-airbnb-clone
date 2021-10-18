import React from 'react';
import logo from '../../assets/svg/logo.svg';
import {SearchInput} from '../searchInput/SearchInput';
export const NavBar = () => {
  return (
    <div className='wrapper navbar'>
      <img src={logo} alt='logo web' />
      <SearchInput/>
    </div>
  );
};
