'use client';

import { useState } from 'react';
import Newsletter from '../components/Newsletter';
import Slider from '../components/Slider';
import ProductGallery from '../components/ProductGallery';
import YouTubeVideo from '../components/YouTubeVideo';
import DeliverablesList from '../components/DeliverablesList';

export default function Home() {
  const [isNewsletter, setIsNewsletter] = useState(true);

  const videoId = 'e5Hc2B50Z7c';

  const handleNewsletter = () => {
    setIsNewsletter(!isNewsletter);
  };

  return (
    <main className=''>
      <Slider />
      <ProductGallery />
      {isNewsletter && <Newsletter handleNewsletter={handleNewsletter} />}
      <DeliverablesList />
      <YouTubeVideo videoId={videoId} />
    </main>
  );
}
