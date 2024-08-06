import React from 'react';

const VideoBackground = () => {
  return (
    <div className='h-[630px] relative overflow-hidden flex items-center justify-center'>
      <h1 className='z-30 text-white text-5xl font-bold text-center fade-in'>
        Para longas jornadas, <br /> muito mais energia
      </h1>
      <div className='bg-black w-full h-full top-0 left-0 absolute z-20 opacity-90'></div>
      <video className='w-full h-full object-cover absolute top-0 left-0' autoPlay muted loop>
        <source src={'/assets/videos/video-banner.mp4'} type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoBackground;
