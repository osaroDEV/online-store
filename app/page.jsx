'use client';
import { useState } from 'react';
import Newsletter from '../components/Newsletter';
// import Login from './components/Login';
import Slider from '../components/Slider';
import ProductGallery from '../components/ProductGallery';
import YouTubeVideo from '../components/YouTubeVideo';
import DeliverablesList from '../components/DeliverablesList';

export default function Home() {
  const [isNewsletter, setIsNewsletter] = useState(true);
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  const videoId = 'e5Hc2B50Z7c';

  const handleNewsletter = () => {
    setIsNewsletter(!isNewsletter);
  };

  // const handleLoginModal = () => {
  //   setIsLoggedIn(!isLoggedIn);
  // };

  return (
    <main className=''>
      <Slider />
      <ProductGallery />
      {isNewsletter && <Newsletter handleNewsletter={handleNewsletter} />}
      {/* {isLoggedIn ? null : <Login />} */}
      <DeliverablesList />
      <YouTubeVideo videoId={videoId} />
    </main>
  );
}
