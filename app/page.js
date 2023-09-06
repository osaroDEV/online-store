'use client'
import { useState } from 'react';
import Newsletter from './components/Newsletter';
import Header from './components/Header';

export default function Home() {
  const [isNewsletter, setIsNewsletter] = useState(true);

  const handleNewsletter = () => {
    setIsNewsletter(!isNewsletter)
  }

  return (
    <main className='relative h-[100vh] bg-[#DFE6F1]'>
      <Header />
      {isNewsletter && <Newsletter handleNewsletter={handleNewsletter} />}
    </main>
  );
}
