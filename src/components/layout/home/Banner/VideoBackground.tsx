import React from 'react';

const VideoBackground = () => {
  return (
    <video className='w-full h-full object-cover absolute top-0 left-0' autoPlay muted loop>
      <source src={'/assets/videos/video-banner.mp4'} type="video/mp4" />
    </video>
  );
};

export default VideoBackground;
