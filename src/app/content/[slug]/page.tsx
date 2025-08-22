'use client';
import { VIDEO_DATA } from '@/data/constant';
import { usePathname } from 'next/navigation';
import VideoCard from '../../../components/ui/Cards/VideoCard';
import Header from '@/components/ui/Header';
import Video from '@/components/ui/Video';
import Button from '@/components/ui/Button';
import Link from 'next/link';
import { HomeIcon } from '@/components/icons';
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
            { text: `Panels Don't Fail,` },
            { text: 'Structures Do', variant: 'blue' },
          ],
          description:
            'Understand how weak structures cause long-term damage, leaks, and losses.',
        }}
        className="px-16 pt-6"
      />

      <div className="flex flex-grow overflow-hidden">
        <div className="relative flex w-[510px] min-w-[510px] flex-col gap-8">
          <div className="ml-14 overflow-y-scroll">
            <div className="bg-background-300 mr-2 flex flex-grow flex-col gap-8 p-2.5 pb-36">
              {VIDEO_DATA.map((data, index) => (
                <VideoCard key={index} {...data} />
              ))}
            </div>
          </div>
          <div className="absolute inset-x-0 bottom-0 flex h-[183px] items-end bg-linear-(--thumbnail-gradient) px-10 pb-10">
            <Link href="/content">
              <Button
                variant="secondary"
                content="Back to Home"
                leftIcon={<HomeIcon />}
                className="self-start"
              />
            </Link>
          </div>
        </div>
        <Video src={route.src} className="mr-14 ml-4" />
      </div>
    </div>
  );
};

export default ContentSection;
