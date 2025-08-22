import { VideoCardProps } from '@/lib/types';
import Image from 'next/image';
import Link from 'next/link';

const VideoCard = ({ href, thumbnail, duration, title }: VideoCardProps) => {
  return (
    <Link href={href} className="flex cursor-pointer items-center gap-5">
      <div className="relative">
        <Image
          height={0}
          width={0}
          sizes="100vw"
          src={thumbnail}
          alt={thumbnail}
          className="h-[100px] min-w-[140px] rounded-xl"
        />
        <div className="text-background-50 font-dm-sans absolute right-2 bottom-2 rounded-sm bg-[rgba(14,_17,_24,_0.50)] px-1 text-lg leading-[26px] font-medium -tracking-[0.72px]">
          {duration}
        </div>
      </div>
      <div className="font-dm-sans text-2xl leading-[34px] font-medium -tracking-[0.96px] text-neutral-500">
        {title}
      </div>
    </Link>
  );
};

export default VideoCard;
