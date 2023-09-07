'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const Carousel = () => {
  const [index, setIndex] = useState(0);

  const slides = [
    {
      src: '/images/white.jpg',
      alt: 'white chair',
      header: 'New Collection',
      note: '30% OFF EVERYTHING',
    },
    {
      src: '/images/chair.jpg',
      alt: 'blue chair',
      header: 'Tiny Budget',
      note: 'MAKE YOUR DREAM ENVIRONMENT',
    },
  ];

  const handleIndex = () => {
    setIndex((prevIndex) => {
      if (prevIndex === 0) {
        return prevIndex + 1;
      } else {
        return prevIndex - 1;
      }
    });
  };

  useEffect(() => {
    setTimeout(handleIndex, 2000);
  }, [index]);

  return (
    <>
      <section className='relative'>
        <div className='absolute top-0 left-0 w-full h-[100vh]'>
          <Image src={slides[index].src} fill={true} alt={slides[index].alt} />
        </div>
        <div className='absolute top-[600px] h-[100px]'>
          <span className='border-l-4 border-[#f1c40f] text-[26px] pl-2'>
            {slides[index].header}
          </span>
          <p className='pt-4'>{slides[index].note}</p>
        </div>
      </section>
    </>
  );
};

export default Carousel;
