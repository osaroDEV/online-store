'use client';

import React, { useState } from 'react';
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import {
  MdOutlineExpandMore,
  MdOutlineExpandLess,
  MdOutlineMailOutline,
} from 'react-icons/md';
import { FaFacebookF } from 'react-icons/fa';
import { ImYoutube2 } from 'react-icons/im';
import Link from 'next/link';

const Footer = () => {
  const [isContactExpand, setIsContactExpand] = useState(false);
  const [isHelpExpand, setIsHelpExpand] = useState(false);
  const [isLearnMoreExpand, setIsLearnMoreExpand] = useState(false);
  const [isJoinUsExpand, setIsJoinUsExpand] = useState(false);

  const handleContactExpand = () => {
    setIsContactExpand((prev) => !prev);
  };

  const handleHelpExpand = () => {
    setIsHelpExpand((prev) => !prev);
  };

  const handleLearnMoreExpand = () => {
    setIsLearnMoreExpand((prev) => !prev);
  };

  const handleJoinUsExpand = () => {
    setIsJoinUsExpand((prev) => !prev);
  };

  return (
    <div className='p-4 mb-[300px]'>
      <section className='flex flex-col md:flex-row flex-wrap'>
        <div className='h-auto md:h-[200px] w-full md:w-[50%] lg:w-[25%] p-2'>
          <div className='flex md:block justify-between items-center'>
            <h2 className='uppercase font-bold'>contact us</h2>
            <span onClick={handleContactExpand} className='md:hidden text-2xl'>
              {isContactExpand ? (
                <MdOutlineExpandLess />
              ) : (
                <MdOutlineExpandMore />
              )}
            </span>
          </div>
          <div className='md:hidden'>
            {isContactExpand ? (
              <div>
                <section className='text-[14px]'>
                  <p>Add: 6C Bahados Str. Colorado Springs Way, Arizona</p>
                  <p>Tel: +234-703-103-6340</p>
                  <p>Email: support@sterilo.com</p>
                </section>
                <section className='w-[200px] flex flex-row'>
                  <span className='flex justify-center items-center w-[25%] md:w-full h-[50px]'>
                    <FaFacebookF className='text-[#3b5998]' />
                  </span>
                  <span className='flex justify-center items-center w-[25%] md:w-full h-[50px]'>
                    <BsTwitter className='text-[#1da1f2]' />
                  </span>
                  <span className='flex justify-center items-center w-[25%] md:w-full h-[50px]'>
                    <BsInstagram className='text-[red]' />
                  </span>
                  <span className='flex justify-center items-center w-[25%] md:w-full h-[50px]'>
                    <ImYoutube2 className='text-black text-[24px]' />
                  </span>
                </section>
              </div>
            ) : null}
          </div>
          <div className='hidden md:block'>
            <section className='text-[14px]'>
              <p>Add: 6C Bahados Str. Colorado Springs Way, Arizona</p>
              <p>Tel: +234-703-103-6340</p>
              <p>Email: support@sterilo.com</p>
            </section>
            <section className='w-[200px] flex flex-row'>
              <span className='flex justify-center items-center w-[25%] md:w-full h-[50px]'>
                <FaFacebookF className='text-[#3b5998]' />
              </span>
              <span className='flex justify-center items-center w-[25%] md:w-full h-[50px]'>
                <BsTwitter className='text-[#1da1f2]' />
              </span>
              <span className='flex justify-center items-center w-[25%] md:w-full h-[50px]'>
                <BsInstagram className='text-[red]' />
              </span>
              <span className='flex justify-center items-center w-[25%] md:w-full h-[50px]'>
                <ImYoutube2 className='text-black text-[24px]' />
              </span>
            </section>
          </div>
        </div>
        <div className='h-auto md:h-[200px] w-full md:w-[50%] lg:w-[25%] p-2'>
          <div className='flex md:block justify-between items-center'>
            <h2 className='uppercase font-bold'>help</h2>
            <span onClick={handleHelpExpand} className='md:hidden text-2xl'>
              {isHelpExpand ? <MdOutlineExpandLess /> : <MdOutlineExpandMore />}
            </span>
          </div>
          <div>
            {isHelpExpand ? (
              <section className='md:hidden text-[14px]'>
                <p>
                  <Link href='/terms'>Terms</Link>
                </p>
                <p>
                  <Link href='/refund-policy'>Refund Policy</Link>
                </p>
              </section>
            ) : null}
          </div>
          <section className='hidden md:block text-[14px]'>
            <p>
              <Link href='/terms'>Terms</Link>
            </p>
            <p>
              <Link href='/refund-policy'>Refund Policy</Link>
            </p>
          </section>
        </div>
        <div className='h-auto md:h-[200px] w-full md:w-[50%] lg:w-[25%] p-2'>
          <div className='flex md:block justify-between items-center'>
            <h2 className='uppercase font-bold'>learn more</h2>
            <span
              onClick={handleLearnMoreExpand}
              className='md:hidden text-2xl font-thin'
            >
              {isLearnMoreExpand ? (
                <MdOutlineExpandLess />
              ) : (
                <MdOutlineExpandMore />
              )}
            </span>
          </div>
          <div>
            {isLearnMoreExpand ? (
              <section className='md:hidden text-[14px]'>
                <p>
                  <Link href='/about-us'>About Us</Link>
                </p>
                <p>
                  <Link href='/blog'>Blog</Link>
                </p>
                <p>
                  <Link href='/contact-us'>Contact</Link>
                </p>
                <p>
                  <Link href='/shop'>Shop</Link>
                </p>
              </section>
            ) : null}
          </div>
          <section className='hidden md:block text-[14px]'>
            <p>
              <Link href='/about-us'>About Us</Link>
            </p>
            <p>
              <Link href='/blog'>Blog</Link>
            </p>
            <p>
              <Link href='/contact-us'>Contact</Link>
            </p>
            <p>
              <Link href='/shop'>Shop</Link>
            </p>
          </section>
        </div>
        <div className='h-auto md:h-[200px] w-full md:w-[50%] lg:w-[25%] p-2'>
          <div className='flex md:block justify-between items-center'>
            <h2 className='uppercase font-bold'>join us</h2>
            <span onClick={handleJoinUsExpand} className='md:hidden text-2xl'>
              {isJoinUsExpand ? (
                <MdOutlineExpandLess />
              ) : (
                <MdOutlineExpandMore />
              )}
            </span>
          </div>
          <div>
            {isJoinUsExpand ? (
              <section className='md:hidden text-[14px]'>
                <p>New subscribers get 30% off their first purchase</p>
                <div className='flex w-full'>
                  <input type='text' className='w-[80%]' />
                  <span className='flex justify-center items-center p-4 md:w-full h-[50px] bg-black'>
                    <MdOutlineMailOutline className='text-3xl text-white' />
                  </span>
                </div>
              </section>
            ) : null}
          </div>
          <section className='hidden md:block text-[14px]'>
            <p>New subscribers get 30% off their first purchase</p>
            <div className='flex'>
              <input type='text' className='w-[80%]' />
              <span className='flex justify-center items-center p-4 h-[50px] bg-black w-[20%]'>
                <MdOutlineMailOutline className='text-3xl text-white' />
              </span>
            </div>
          </section>
        </div>
      </section>
      <hr className='border border-[rgba(0,0,0,0.3)] mb-[1rem]' />
      <span className='p-[1rem_0]'>
        Copyright &copy; 2023. All rights reserved
      </span>
    </div>
  );
};

export default Footer;
