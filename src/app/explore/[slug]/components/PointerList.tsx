import PointerCard from '@/components/ui/Cards/PointerCard';
import { PointerListProps } from '@/lib/types';

const PointerList = ({ title, pointers }: PointerListProps) => {
  return (
    <div
      className="bg-background-200 border-background-400 flex w-[424px] min-w-[424px] flex-grow flex-col justify-between rounded-xl border-2 p-8"
      style={{ zoom: 0.62 }}
    >
      <h2 className="font-dm-sans text-[40px] leading-14 font-bold -tracking-[0.8px] text-neutral-500">
        {title}
      </h2>
      {pointers?.map((pointer, index) => (
        <PointerCard key={index} {...pointer} />
      ))}
    </div>
  );
};

export default PointerList;
