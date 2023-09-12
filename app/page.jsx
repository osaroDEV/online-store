'use client';
import { useState } from 'react';
import Newsletter from './components/Newsletter';
import Header from './components/Header';
import Slider from './components/Slider';
import PreHeader from './components/PreHeader';
import ProductGallery from './components/ProductGallery';
import YouTubeVideo from './components/YouTubeVideo';
import DeliverablesList from './components/DeliverablesList';
import Footer from './components/Footer';

export default function Home() {
  const [isNewsletter, setIsNewsletter] = useState(true);

  const videoId = 'e5Hc2B50Z7c';

  const handleNewsletter = () => {
    setIsNewsletter(!isNewsletter);
  };

  return (
    <main className='bg-[#DFE6F1]'>
      <PreHeader />
      <Header />
      <Slider />
      <ProductGallery />
      {isNewsletter && (
        <Newsletter handleNewsletter={handleNewsletter} />
      )}
      <DeliverablesList />
      <YouTubeVideo videoId={videoId} />
      <Footer />
    </main>
  );
}
