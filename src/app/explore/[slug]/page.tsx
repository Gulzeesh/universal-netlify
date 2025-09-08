'use client';
import { EXPLORE_ROUTING } from '@/data/constant';
import { usePathname } from 'next/navigation';
import { isValidElement, useMemo } from 'react';
import Header from '@/components/ui/Header';
import Video from '@/components/ui/Video';

function ExploreSection() {
  const pathName = usePathname();
  const route = useMemo(
    () => EXPLORE_ROUTING.find((r) => r.href === pathName),
    [pathName],
  );

  if (!route) return <div>Page not found</div>;

  if (isValidElement(route.content))
    return <div className="h-screen w-full">{route.content}</div>;

  return (
    <div className="flex h-[calc(100vh-74px)] flex-col gap-8 pb-8">
      <Header
        {...route.content.headerData}
        className={`px-16 pt-6 ${route.content.headerData.className || ''}`}
        style={{ zoom: 0.58 }}
      />

      <Video {...route.content.videoData} className="mx-auto! w-[75%]!" />
    </div>
  );
}

export default ExploreSection;
