import { ChipProps } from '@/lib/types';

const Chip = ({ type = 'primary', text, className = '' }: ChipProps) => {
  return (
    <div
      className={`font-dm-sans rounded-lg px-3 py-1 text-xl leading-7 font-semibold tracking-[2px] ${type === 'primary' ? 'bg-primary-300 text-background-50' : 'bg-primary-200 text-primary-500'} ${className}`}
    >
      {text}
    </div>
  );
};

export default Chip;
