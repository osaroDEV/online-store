import React from 'react';

const YouTubeVideo = ({ videoId }) => {
  return (
    <div className='w-full flex justify-center items-center p-4'>
      <iframe
        width='640'
        height='360'
        src={`https://www.youtube.com/embed/${videoId}`}
        title='YouTube video player'
        frameBorder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default YouTubeVideo;