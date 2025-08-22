import Chip from '@/components/ui/Chip';
import { ExploreRoutingType } from '@/lib/types';
import Image from 'next/image';
import Link from 'next/link';

const ExploreHomeCard = ({ data }: { data: ExploreRoutingType }) => {
  return (
    <Link
      href={data.href}
      className="border-background-400 shadow-explore-home-card relative h-[273px] rounded-xl border-2"
    >
      <Image
        height={0}
        width={0}
        sizes="100vw"
        src={data.image}
        alt="home-card-img"
        className="h-full w-full rounded-xl object-cover"
      />
      <Chip
        text={data.title}
        className={`absolute -top-4 right-3 uppercase ${data.chipProps?.className}`}
        {...data.chipProps}
      />
    </Link>
  );
};

export default ExploreHomeCard;
