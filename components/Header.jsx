'use client';

import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FiSearch, FiShoppingBag, FiUser } from 'react-icons/fi';
import { MdExpandMore } from 'react-icons/md';
import Link from 'next/link';

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const headerClassName = `flex justify-between items-center h-[85px] bg-white p-4 lg:p-8 shadow-lg transition-all ${
    isSticky ? 'fixed top-0 left-0 w-full z-50' : 'sticky'
  }`;

  return (
    <header className={headerClassName}>
      <section className='flex w-[60px] justify-between lg:hidden'>
        <GiHamburgerMenu className='text-[20px]' />
        <FiSearch className='text-[20px] cursor-pointer hover:text-[#ffc107] duration-200 ease-out' />
      </section>
      <section className='hidden lg:block w-[33%]'>
        <nav>
          <ul className='flex justify-between'>
            <li className='hover:text-[#ffc107] duration-200 ease-out'>
              <Link href='/about'>About</Link>
            </li>
            <li className='hover:text-[#ffc107] duration-200 ease-out'>
              <Link href='/contact'>Contact Us</Link>
            </li>
            <li className='hover:text-[#ffc107] duration-200 ease-out'>
              <Link href='/terms-conditions'>T&Cs</Link>
            </li>
            <li className='hover:text-[#ffc107] duration-200 ease-out'>
              <Link href='/shop' className='flex items-center'>
                Shop
                <span>
                  <MdExpandMore />
                </span>
              </Link>
            </li>
            <li className='hover:text-[#ffc107] duration-200 ease-out'>
              <Link href='/blog'>Blog</Link>
            </li>
          </ul>
        </nav>
      </section>
      <Link href='/'>
        <Logo />
      </Link>
      <span className='flex items-center gap-4'>
        <FiSearch className='hidden lg:block text-[20px] cursor-pointer hover:text-[#ffc107] duration-200 ease-out' />
        <Link href='/account'>
          <FiUser className='hidden lg:block text-[20px] cursor-pointer hover:text-[#ffc107] duration-200 ease-out' />
        </Link>
        <FiShoppingBag className='lg:w-[auto] text-[20px] cursor-pointer hover:text-[#ffc107] duration-200 ease-out' />
      </span>
    </header>
  );
};

export default Header;
