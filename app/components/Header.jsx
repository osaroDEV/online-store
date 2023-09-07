import React from 'react';
import Logo from './Logo';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FiSearch, FiShoppingBag, FiUser } from 'react-icons/fi';
import Link from 'next/link';

const Header = () => {
  return (
    <header className='flex relative justify-between items-center h-[85px] bg-white p-4'>
      <section className='flex w-[60px] justify-between lg:hidden'>
        <GiHamburgerMenu className='text-[20px]' />
        <FiSearch className='text-[20px] cursor-pointer hover:text-[#ffc107] duration-200 ease-out' />
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
      <Link href='https://osarodev-online-store.vercel.app'>
        <Logo />
      </Link>
      <span className='flex items-center gap-4'>
        <FiSearch className='hidden lg:block text-[20px] cursor-pointer hover:text-[#ffc107] duration-200 ease-out' />
        <FiUser className='hidden lg:block text-[20px] cursor-pointer hover:text-[#ffc107] duration-200 ease-out' />
        <FiShoppingBag className='lg:w-[auto] text-[20px] cursor-pointer hover:text-[#ffc107] duration-200 ease-out' />
      </span>
    </header>
  );
};

export default Header;
