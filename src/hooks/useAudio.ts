import { useState, useEffect, useRef } from "react";
import useSound from "use-sound";
import song from "../assets/music.mp3";
// Background music URL - using a royalty-free music track
const BACKGROUND_MUSIC_URL = song;

export default function useAudio() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Create audio element
    const audio = new Audio(BACKGROUND_MUSIC_URL);
    audio.loop = true;
    audio.volume = 0.5;
    audioRef.current = audio;

    // Cleanup on unmount
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const startAudio = () => {
    if (audioRef.current) {
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((error) => {
          console.error("Error playing audio:", error);
        });
    }
  };

  const stopAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !audioRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  return {
    isPlaying,
    isMuted,
    startAudio,
    stopAudio,
    toggleMute,
  };
}
