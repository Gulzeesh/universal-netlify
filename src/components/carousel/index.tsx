'use client';
import CarouselCard from './CarouselCard';
import { VIDEO_DATA } from '@/data/constant';
import { ArrowIcon } from '../icons';
import { useRef } from 'react';

const Carousel = () => {
  const ref = useRef<HTMLDivElement>(null);

  const handleNextScroll = () => {
    if (ref.current) {
      ref.current.scrollTo({
        left: ref.current.scrollLeft + ref.current.offsetWidth,
        behavior: 'smooth',
      });
    }
  };

  const handlePrevScroll = () => {
    if (ref.current) {
      ref.current.scrollTo({
        left: ref.current.scrollLeft - ref.current.offsetWidth,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="relative z-[1] flex flex-col gap-6">
      <div className="flex items-center justify-between px-16">
        <div className="font-dm-sans text-[40px]/[56px] font-bold text-neutral-500">
          Go Solar, with Confidence
        </div>
        <div className="flex items-center justify-between gap-6">
          <button
            onClick={handlePrevScroll}
            className="cursor-pointer px-[10px] py-4"
          >
            <ArrowIcon />
          </button>
          <button
            onClick={handleNextScroll}
            className="rotate-180 cursor-pointer px-[10px] py-4"
          >
            <ArrowIcon />
          </button>
        </div>
      </div>
      <div
        ref={ref}
        className="no-scrollbar flex gap-8 overflow-x-scroll px-16 transition-transform duration-500"
      >
        {VIDEO_DATA.filter((item) => !item.isTrending).map((item, index) => (
          <CarouselCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
