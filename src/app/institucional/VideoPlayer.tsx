'use client'
import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import { GoPlay } from "react-icons/go";

const VideoPlayer = () => {
  const [playing, setPlaying] = useState(false);

  const handlePlay = () => {
    setPlaying(true);
  };

  return (
    <ReactPlayer
      width={'100%'}
      height={'400px'}
      url='https://youtu.be/gHOsCbQawMA'
      controls
      light={'/assets/images/player-video.webp'}
      playing={playing}
      playIcon={<button onClick={handlePlay}><GoPlay size={80} className='text-[#DF0209] hover:text-[#E7C000]' /></button>}
    />
  );
};

export default VideoPlayer;