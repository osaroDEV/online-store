'use client';
import { useState } from 'react';
import Newsletter from './components/Newsletter';
import Header from './components/Header';
import Carousel from './components/Carousel';

export default function Home() {
  const [isNewsletter, setIsNewsletter] = useState(true);

  const handleNewsletter = () => {
    setIsNewsletter(!isNewsletter);
  };

  return (
    <main className='h-[300vh] bg-[#DFE6F1]'>
      <Header />
      <Carousel />
      {isNewsletter && (
        <Newsletter className='' handleNewsletter={handleNewsletter} />
      )}
    </main>
  );
}
