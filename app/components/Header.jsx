import React from 'react';
import Logo from './Logo';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FiSearch, FiShoppingBag } from 'react-icons/fi';

const Header = () => {
  return (
    <header className='flex justify-between items-center h-[85px] bg-white p-4'>
      <section className='flex w-[60px] justify-between lg:hidden'>
        <GiHamburgerMenu className='text-[20px]' />
        <FiSearch className='text-[20px]' />
      </section>
      <section className='hidden lg:block w-[33%]'>
        <nav>
          <ul className='flex justify-between'>
            <li>About</li>
            <li>Contact Us</li>
            <li>T&Cs</li>
            <li>Shop</li>
            <li>Blog</li>
          </ul>
        </nav>
      </section>
      <Logo />
      <FiShoppingBag className='w-[60px] text-[20px]' />
    </header>
  );
};

export default Header;
