'use client';
import Image from 'next/image';
import SpeedoMeter from './SpeedoMeter';
import { useMemo, useState } from 'react';
import Button from '../Button';
import { HomeIcon } from '@/components/icons';
import Link from 'next/link';
import useIdle from '@/hooks/useIdle';

const IdleScreen = () => {
  const [eqz, setEqz] = useState(10);
  const currentValue = useMemo(() => eqz * 2 + 20, [eqz]);
  const idle = useIdle({ autoStart: true });
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const videoUrl = useMemo(() => {
    return [40, 60].includes(currentValue)
      ? '/videos/rain.mp4'
      : [80, 100].includes(currentValue)
        ? '/videos/severe-rain.mp4'
        : currentValue === 120
          ? '/videos/storm.mp4'
          : [140, 160, 180].includes(currentValue)
            ? '/videos/cyclone.mp4'
            : '';
  }, [currentValue]);

  return (
    <div
      className={`absolute inset-0 z-20 overflow-hidden select-none`}
      style={{ zoom: 0.67 }}
    >
      <div className="absolute top-[21px] right-0 left-[38px] flex items-center justify-between">
        <div className="flex-1">
          <Image
            src="/images/logo-white.webp"
            width={197}
            height={133}
            alt="solar logo"
            className="object-contain"
          />
        </div>
        <div className="flex-1">
          <h2 className="font-akira ml-[38px] max-w-[300px] text-[28px] leading-none font-extrabold tracking-[2.8px] text-white [text-shadow:var(--text-shadow-custom)]">
            LOCAL SOLAR STRUCTURE
          </h2>
        </div>
      </div>
      <video
        src={videoUrl}
        playsInline
        autoPlay
        loop
        preload="auto"
        className="h-[80%] w-full object-cover object-top"
        onLoadStart={() => setIsVideoLoaded(false)}
        onLoadedData={() => setIsVideoLoaded(true)}
      />
      <div
        className={`absolute inset-0 z-10 flex items-center justify-center bg-gray-200 ${!isVideoLoaded ? 'opacity-100' : 'opacity-0'} pointer-events-none`}
      >
        <Image
          width={198}
          height={134}
          alt="logo"
          priority
          src="/images/logo.webp"
          className="animate-pulse"
        />
      </div>
      <div
        className={`from-secondary-500 to-primary-500 absolute -inset-x-[310px] -bottom-[240px] z-10 h-1/2 rounded-[50%] bg-gradient-to-r pt-8`}
      >
        <div className="from-primary-500 to-gradient-end relative z-0 h-full rounded-[50%] bg-gradient-to-r" />
        <div className="absolute inset-0 top-[51px] z-20 h-full rounded-[50%]">
          <SpeedoMeter
            isIdle={idle.isIdle}
            currentValue={currentValue}
            eqz={eqz}
            setEqz={setEqz}
          />
          <Image
            width={0}
            height={413}
            src="/icons/meter.svg"
            alt="Meter"
            className="absolute -top-[166px] left-[310px] z-0 w-[75%]"
          />
        </div>
        <Link href="/explore">
          <Button
            leftIcon={<HomeIcon />}
            variant="secondary"
            content=""
            className="absolute bottom-[280px] left-[330px] z-50"
          />
        </Link>
      </div>
    </div>
  );
};

export default IdleScreen;
