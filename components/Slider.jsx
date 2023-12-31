import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Slider = () => {
  const [index, setIndex] = useState(0);
  const [imageOpacity, setImageOpacity] = useState(0);

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
    // start the opacity animation when the index changes
    setImageOpacity(0);
    setTimeout(() => setImageOpacity(1), 100);

    // change slide after a delay
    setTimeout(handleIndex, 2000);

    // clean up th timer to avoid memory leaks
  }, [index]);

  return (
    <>
      <section className='relative'>
        <div className='relative h-[60vh] 375:h-[70vh] 425:h-[80vh] 550:h-[90vh] sm:h-[100vh] md:h-[110vh] lg:h-[150vh] w-full'>
          <Image
            src={slides[index].src}
            layout='fill'
            objectFit='cover'
            className=''
            alt={slides[index].alt}
            style={{ opacity: imageOpacity }}
          />
        </div>
      </section>
      <div className='flex flex-col items-center gap-4 mb-[2rem]'>
        <p className='pt-4 text-[12px]'>{slides[index].note}</p>
        <span className='border-l-4 border-[#f1c40f] text-[32px] pl-2'>
          {slides[index].header}
        </span>
        <Link href='/account'>
          <button className='block bg-black text-white w-[100px] h-[35px]'>
            Shop Now
          </button>
        </Link>
      </div>
    </>
  );
};

export default Slider;
