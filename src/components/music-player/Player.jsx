import React, { useState, useEffect } from "react";
import './Player.scss'



const Player = ({ url, isMusicPlaying, setIsMusicPlaying }) => {

    const useAudio = url => {
        const [audio] = useState(new Audio(url));
        // const [playing, setPlaying] = useState(false);
      
        const toggle = () => setIsMusicPlaying(!isMusicPlaying);
      
        useEffect(() => {
            isMusicPlaying ? audio.play() : audio.pause();
          },
          [isMusicPlaying]
        );
      
        useEffect(() => {
          audio.addEventListener('ended', () => setIsMusicPlaying(false));
          return () => {
            audio.removeEventListener('ended', () => setIsMusicPlaying(false));
          };
        }, []);
      
        return [isMusicPlaying, toggle];
      };
  const [playing, toggle] = useAudio(url);

  return (
    <div className="music-player">
      <button onClick={toggle}>{playing ? "Pause" : "Play"}</button>
    </div>
  );
};

export default Player;