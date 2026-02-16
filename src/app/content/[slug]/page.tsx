'use client';
import { VIDEO_DATA } from '@/data/constant';
import { usePathname } from 'next/navigation';
import VideoCard from '../../../components/ui/Cards/VideoCard';
import Header from '@/components/ui/Header';
import Video from '@/components/ui/Video';
import { useMemo } from 'react';

const ContentSection = () => {
  const pathName = usePathname();
  const route = useMemo(
    () => VIDEO_DATA.find((r) => r.href === pathName),
    [pathName],
  );

  if (!route) return <div>Page not found</div>;

  return (
    <div className="flex h-[calc(100vh-74px)] flex-col gap-8">
      <Header
        content={{
          title: [
            { text: `Your solar journey,` },
            { text: 'simplified', variant: 'blue' },
          ],
          description:
            'Everything you need to know before making the switch to solar.',
        }}
        className="px-16 pt-6"
        style={{ zoom: 0.59 }}
      />

      <div className="flex flex-grow overflow-hidden">
        <div
          className="relative flex w-[510px] min-w-[510px] flex-col gap-8"
          style={{ zoom: 0.6 }}
        >
          <div className="ml-14 overflow-y-scroll">
            <div className="bg-background-300 mr-2 flex flex-grow flex-col gap-8 p-2.5">
              {VIDEO_DATA.map((data, index) => (
                <VideoCard key={index} {...data} />
              ))}
            </div>
          </div>
        </div>
        <Video src={route.src} thumbnail={route.thumbnail} className="mr-14 ml-4" />
      </div>
    </div>
  );
};

export default ContentSection;
