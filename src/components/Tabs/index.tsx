'use client';
import { EXPLORE_ROUTING, HOME_ROUTING } from '@/data/constant';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { HomeIcon } from '../icons';

function Tabs() {
  const pathname = usePathname();
  const isInExploreSection = pathname.startsWith('/explore/');
  const routingData = isInExploreSection
    ? [
        { title: <HomeIcon className="h-10 w-10" />, href: '/explore' },
        ...EXPLORE_ROUTING,
      ]
    : HOME_ROUTING;

  return (
    <div className="bg-primary-100 fixed bottom-0 flex w-full items-center">
      {routingData.map((data, index) => (
        <Link
          key={index}
          className={`font-dm-sans flex flex-1 items-center justify-center px-5 py-4 text-[28px] font-semibold ${pathname === data.href ? 'bg-primary-500 text-white' : !isInExploreSection && pathname.includes(data.href) ? 'bg-primary-200 text-primary-500' : 'bg-transparent text-neutral-500'}`}
          href={data.href}
        >
          {data.title}
        </Link>
      ))}
    </div>
  );
}

export default Tabs;
