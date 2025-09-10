'use client';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  PauseIcon,
  PlayIcon,
  VolumeOffIcon,
  VolumeUpIcon,
} from '@/components/icons';
import { VideoProps } from '@/lib/types';
import useIdle from '@/hooks/useIdle';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

function formatTime(time: number) {
  if (!isFinite(time) || time < 0) return '0:00';
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes}:${String(seconds).padStart(2, '0')}`;
}

const Video = ({ src, thumbnail, className = '' }: VideoProps) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const progressRef = useRef<HTMLDivElement | null>(null);
  const router = useRouter();
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const idle = useIdle({
    onIdle: () => router.push('/idle-screen'),
    autoStart: true,
  });

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

  useEffect(() => {
    if (isPlaying) {
      idle.stop();
    } else {
      idle.start();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPlaying]);

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

  // Seek to a fraction of the video duration
  const seekToFraction = useCallback(
    (frac: number) => {
      const video = videoRef.current;
      if (!video || !duration) return;

      const clamped = Math.max(0, Math.min(1, frac));
      video.currentTime = clamped * duration;

      if (isPlaying) {
        const resume = () => {
          if (video.readyState >= 2) {
            video.play().catch(() => {});
            video.removeEventListener('seeked', resume);
          }
        };
        video.addEventListener('seeked', resume);
      }
    },
    [duration, isPlaying],
  );

  const onProgressPointerDown = useCallback(
    (event: React.PointerEvent<HTMLDivElement>) => {
      const element = progressRef.current;
      if (!element) return;

      const pointerId = event.pointerId;
      element.setPointerCapture(pointerId);

      const updateFromEvent = (clientX: number) => {
        const rect = element.getBoundingClientRect();
        const frac = (clientX - rect.left) / rect.width;
        seekToFraction(frac);
      };

      // Initial seek on press
      updateFromEvent(event.clientX);

      const move = (e: PointerEvent) => updateFromEvent(e.clientX);

      const up = () => {
        // Only release if the element still has capture
        if (element.hasPointerCapture(pointerId)) {
          element.releasePointerCapture(pointerId);
        }
        window.removeEventListener('pointermove', move);
        window.removeEventListener('pointerup', up);
      };

      window.addEventListener('pointermove', move);
      window.addEventListener('pointerup', up);
    },
    [seekToFraction],
  );

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
      className={`border-background-400 relative h-[491px] w-full overflow-hidden rounded-xl border-2 ${className}`}
    >
      <video
        ref={videoRef}
        src={src}
        className="h-full w-full object-cover object-center"
        playsInline
        preload="metadata"
        onEnded={() => idle.start()}
        onLoadStart={() => setIsVideoLoaded(false)}
        onLoadedData={() => setIsVideoLoaded(true)}
        poster={thumbnail}
      />
      <div
        className={`absolute inset-0 z-10 flex items-center justify-center bg-gray-200 ${!isVideoLoaded ? 'opacity-100' : 'opacity-0'} pointer-events-none`}
      >
        <Image
          width={108}
          height={134}
          alt="logo"
          priority
          src="/images/logo.webp"
          className="animate-pulse"
        />
      </div>
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
