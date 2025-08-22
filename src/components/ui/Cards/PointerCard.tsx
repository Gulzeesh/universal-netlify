import { PointerCardProps } from '@/lib/types';

const PointerCard = ({ icon, title, subTitle }: PointerCardProps) => {
  return (
    <div className="flex gap-2 py-1.5">
      <div className="aspect-square h-16 w-16">{icon}</div>
      <div className="flex flex-grow flex-col justify-between">
        <div className="text-black-500 text-[28px] leading-10 font-semibold -tracking-[1.12px]">
          {title}
        </div>
        <div className="text-black-300 font-dm-sans text-2xl leading-[34px] -tracking-[0.96px]">
          {subTitle}
        </div>
      </div>
    </div>
  );
};

export default PointerCard;
