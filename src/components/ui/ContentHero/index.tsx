'use client';
import Image from 'next/image';
import MixColorsText from '../MixColorsText';
import Button from '../Button';
import { PlayIcon } from '@/components/icons';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { slidesData } from '@/data/constant';
import useIdle from '@/hooks/useIdle';

const ContentHero = () => {
  const [currentSlide, setCurrentSlide] = useState(2);
  const router = useRouter();
  useIdle({
    onIdle: () => router.push('/idle-screen'),
    autoStart: true,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slidesData.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative mb-8">
      <Image
        src={slidesData[currentSlide].image}
        alt="Group Image"
        width={0}
        height={547}
        sizes="100vw"
        className="absolute top-0 z-0 h-full w-[80%] object-cover blur-[48px]"
      />
      <div className="absolute inset-0 bg-linear-(--fade-white-x) blur-[48px]" />

      <div className="relative h-[547px] overflow-hidden">
        <Image
          src={slidesData[currentSlide].image}
          alt={`Group Image ${currentSlide + 1}`}
          width={0}
          height={547}
          sizes="100vw"
          className="absolute z-0 h-[532px] w-full object-cover"
        />

        <div className="absolute right-0 bottom-4 left-0 z-20 flex justify-center space-x-2">
          {slidesData.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`cursor-pointer rounded-full transition-colors ${
                index === currentSlide
                  ? 'h-5 w-5 bg-white'
                  : 'h-4 w-4 bg-white/50'
              }`}
            />
          ))}
        </div>

        <div className="relative z-[1] mt-6 ml-16">
          <Image
            src="/images/logo-white.webp"
            width={222}
            height={150}
            alt="solar logo"
            className="mb-[37px] h-[150px] w-[222px] object-contain"
          />

          {/* TODO: if dynamic text needed */}
          <MixColorsText content={slidesData[currentSlide].text} />
          <Button
            content={slidesData[currentSlide].buttonText}
            leftIcon={<PlayIcon />}
            variant="primary"
            className="mt-5"
            onClick={() => {
              if (slidesData[currentSlide].href) {
                router.push(slidesData[currentSlide].href);
              }
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ContentHero;
