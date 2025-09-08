'use client';
import { useEffect, useMemo, useRef, useState } from 'react';
import {
  PauseIcon,
  PlayIcon,
  VolumeOffIcon,
  VolumeUpIcon,
} from '@/components/icons';
import { VideoProps } from '@/lib/types';

function formatTime(time: number) {
  if (!isFinite(time) || time < 0) return '0:00';
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes}:${String(seconds).padStart(2, '0')}`;
}

const Video = ({ src, className = '' }: VideoProps) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const progressRef = useRef<HTMLDivElement | null>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const progress = useMemo(
    () => (duration ? currentTime / duration : 0),
    [currentTime, duration],
  );

  // video events
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onLoaded = () => setDuration(video.duration || 0);
    const onTime = () => setCurrentTime(video.currentTime || 0);
    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);
    const onEnd = () => setIsPlaying(false);

    video.addEventListener('loadedmetadata', onLoaded);
    video.addEventListener('timeupdate', onTime);
    video.addEventListener('play', onPlay);
    video.addEventListener('pause', onPause);
    video.addEventListener('ended', onEnd);

    return () => {
      video.removeEventListener('loadedmetadata', onLoaded);
      video.removeEventListener('timeupdate', onTime);
      video.removeEventListener('play', onPlay);
      video.removeEventListener('pause', onPause);
      video.removeEventListener('ended', onEnd);
    };
  }, []);

  // Controls
  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) video.play();
    else video.pause();
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  const seekToFraction = (frac: number) => {
    const video = videoRef.current;
    if (!video || !duration) return;
    const clamped = Math.max(0, Math.min(1, frac));
    video.currentTime = clamped * duration;
  };

  // Click + drag seek
  const onProgressPointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    const element = progressRef.current;
    if (!element) return;
    element.setPointerCapture(event.pointerId);

    const updateFromEvent = (clientX: number) => {
      const rect = element.getBoundingClientRect();
      const frac = (clientX - rect.left) / rect.width;
      seekToFraction(frac);
    };

    updateFromEvent(event.clientX);

    const move = (event: PointerEvent) => updateFromEvent(event.clientX);
    const up = () => {
      element.releasePointerCapture(event.pointerId);
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };

    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };

  // Keyboard: space toggles play/pause when the bar has focus
  const onBarKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.code === 'Space') {
      event.preventDefault();
      togglePlay();
    }
    if (event.code === 'ArrowLeft') {
      event.preventDefault();
      seekToFraction(progress - 0.05);
    }
    if (event.code === 'ArrowRight') {
      event.preventDefault();
      seekToFraction(progress + 0.05);
    }
  };

  return (
    <div
      className={`border-background-400 relative h-[561px] w-full overflow-hidden rounded-xl border-2 ${className}`}
    >
      <video
        ref={videoRef}
        src={src}
        className="h-full w-full object-cover"
        playsInline
        preload="metadata"
      />

      {/* controls */}
      <div className="absolute inset-x-8 bottom-8 flex h-[88px] items-center gap-10 rounded-xl bg-[rgba(14,17,24,0.40)] px-6 py-3 backdrop-blur-[2px]">
        {/* Play/Pause button */}
        <button
          onClick={togglePlay}
          className="cursor-pointer border-none outline-none"
        >
          {isPlaying ? (
            <PauseIcon className="drop-shadow-svg" />
          ) : (
            <PlayIcon className="drop-shadow-svg h-[38px] w-8" />
          )}
        </button>

        {/* Seek bar */}
        <div
          ref={progressRef}
          onKeyDown={onBarKeyDown}
          onPointerDown={onProgressPointerDown}
          className="group bg-background-400 relative h-3 grow cursor-pointer outline-none"
        >
          <div
            className="bg-secondary-500 h-full transition-[width]"
            style={{ width: `${progress * 100}%` }}
          />
          {/* Thumb */}
          <div
            className="absolute -top-1 size-5 rounded-full bg-white opacity-0 shadow-md transition-opacity group-hover:opacity-100"
            style={{ left: `calc(${progress * 100}% - 10px)` }}
          />
        </div>

        {/* Time */}
        <span className="font-dm-sans text-2xl/[33px] font-medium tracking-[-0.96px] text-white tabular-nums">
          {formatTime(currentTime)} / {formatTime(duration)}
        </span>

        {/* Volume */}
        <button
          onClick={toggleMute}
          className="cursor-pointer border-none outline-none"
        >
          {isMuted ? (
            <VolumeOffIcon className="drop-shadow-svg" />
          ) : (
            <VolumeUpIcon className="drop-shadow-svg" />
          )}
        </button>
      </div>
    </div>
  );
};

export default Video;
