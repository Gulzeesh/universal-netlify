import Link from 'next/link';
import Image from 'next/image';
import { VideoCardProps } from '@/lib/types';

const CarouselCard = ({ href, thumbnail, title }: VideoCardProps) => {
  return (
    <div className="flex flex-col gap-2.5">
      <Link href={href}>
        <Image
          width={384}
          height={216}
          src={thumbnail}
          alt={title}
          className="h-[216px] min-w-[384px] rounded-xl object-cover"
        />
      </Link>
      <div className="font-dm-sans text-2xl/[33px] font-medium tracking-[-0.96px] text-neutral-500">
        {title}
      </div>
    </div>
  );
};

export default CarouselCard;
