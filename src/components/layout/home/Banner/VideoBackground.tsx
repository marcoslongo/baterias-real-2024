'use client'
import React, { useEffect, useState } from 'react';

const VideoBackground = () => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const videoStyle = {
    transform: `translateY(${scrollY * 0.5}px)`,
  };

  return (
    <video
      className="w-full h-full object-cover absolute top-0 left-0"
      autoPlay
      muted
      loop
      style={videoStyle}
    >
      <source src="/assets/videos/video-banner.mp4" type="video/mp4" />
    </video>
  );
};

export default VideoBackground;
