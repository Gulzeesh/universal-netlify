import Carousel from '@/components/carousel';
import ContentHero from '@/components/ui/ContentHero';
import React from 'react';

function ContentHome() {
  return (
    <div
      className="flex h-[calc(100vh-74px)] flex-col justify-between pb-12"
      style={{ zoom: 0.72 }}
    >
      <ContentHero />
      <Carousel />
    </div>
  );
}

export default ContentHome;
