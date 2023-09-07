'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const Carousel = () => {
  const [index, setIndex] = useState(0);

  const imagesArr = ['/images/white.jpg', '/images/chair.jpg'];

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
    <section className='relative'>
      <div className='absolute top-0 left-0 w-full h-[50vh]'>
        <Image src={imagesArr[index]} fill={true} alt='' />
      </div>
    </section>
  );
};

export default Carousel;
