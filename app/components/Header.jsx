import React from 'react';
import Logo from './Logo';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FiSearch, FiShoppingBag } from 'react-icons/fi';

const Header = () => {
  return (
    <header className='flex justify-around items-center h-[85px] bg-white'>
      <section className='flex w-[15%] justify-between'>
        <GiHamburgerMenu />
        <FiSearch />
      </section>
      <Logo />
      <FiShoppingBag />
    </header>
  );
};

export default Header;
