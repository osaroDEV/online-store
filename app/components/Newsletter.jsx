import React from 'react';
import NewsletterHamburger from './NewsletterHamburger';
import NewsletterInput from './NewsletterInput';

const Newsletter = ({handleNewsletter}) => {
  return (
    <main className='absolute flex w-[90vw] smm:w-[70vw] sml:w-[60vw] md:w-[70vw] h-[50vh] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
      <section className='hidden md:block w-[50%] h-full bg-[#E1E9F2]'></section>
      <section className='relative flex flex-col justify-around w-full md:w-[50%] bg-white p-6  h-full'>
        <h2 className='text-[24px] md:text-2xl text-center'>Join house osaroDEV</h2>
        <p className='text-[16px] md:text-[16px] text-slate-500 text-center'>
          Sign up for our newsletter and receive updates you&#39;re looking for:
          interior deco inspiration, discounts and latest trends
        </p>
        <NewsletterHamburger handleNewsletter={handleNewsletter} />
        <NewsletterInput />
      </section>
    </main>
  );
};

export default Newsletter;
