'use client';
import { useState } from 'react';
import Newsletter from './components/Newsletter';
import Header from './components/Header';
import Slider from './components/Slider';
import PreHeader from './components/PreHeader';
import ProductGallery from './components/ProductGallery';

export default function Home() {
  const [isNewsletter, setIsNewsletter] = useState(true);

  const handleNewsletter = () => {
    setIsNewsletter(!isNewsletter);
  };

  return (
    <main className='h-[300vh] bg-[#DFE6F1]'>
      <PreHeader />
      <Header />
      <Slider />
      <ProductGallery />
      {isNewsletter && (
        <Newsletter className='' handleNewsletter={handleNewsletter} />
      )}
    </main>
  );
}
