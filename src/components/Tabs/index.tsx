'use client';
import { EXPLORE_ROUTING, HOME_ROUTING } from '@/data/constant';
import { useGLTF } from '@react-three/drei';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { HomeIcon } from '../icons';
import { Fragment } from 'react';

function Tabs() {
  const pathname = usePathname();
  useGLTF.preload('public/ss3.glb');
  const isInExploreSection = pathname.startsWith('/explore/');
  const isInContentSection = pathname.startsWith('/content/');
  const isInCompareSection = pathname.includes('/explore/compare');

  const routingData = isInExploreSection
    ? [
        { title: <HomeIcon className="h-10 w-10" />, href: '/' },
        ...EXPLORE_ROUTING,
      ]
    : isInContentSection
      ? [
          { title: <HomeIcon className="h-10 w-10" />, href: '/' },
          ...HOME_ROUTING,
        ]
      : HOME_ROUTING;

  if (isInCompareSection) {
    return <></>;
  }

  return (
    <div
      className="bg-primary-100 fixed bottom-0 z-10 flex w-full items-center"
      style={{ zoom: 0.74 }}
    >
      {routingData.map((data, index) => {
        const isInContentSectionHome = isInContentSection && data.href === '/';

        return (
          <Fragment key={index}>
            <Link
              className={`font-dm-sans flex items-center justify-center px-5 py-4 text-[28px] font-semibold ${
                pathname === data.href
                  ? 'bg-primary-500 z-1 text-white'
                  : !isInExploreSection && pathname.includes(data.href)
                    ? 'bg-primary-200 text-primary-500'
                    : 'bg-transparent text-neutral-500'
              } ${isInContentSectionHome ? 'w-53 bg-transparent!' : 'flex-1'}`}
              href={data.href}
            >
              {data.title}
            </Link>

            <div className="bg-primary-200 absolute inset-x-0 bottom-0 h-2 w-full" />
          </Fragment>
        );
      })}
    </div>
  );
}

export default Tabs;
