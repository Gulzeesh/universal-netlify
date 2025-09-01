import { TagProps } from '@/lib/types';
import Image from 'next/image';

const Tag = ({ title, description, className = '' }: TagProps) => {
  return (
    <div
      className={`shadow-tag absolute bottom-9 flex h-fit w-[254px] flex-col rounded-[15px] border-[1.2px] border-white bg-white ${className}`}
    >
      <Image
        height={0}
        width={0}
        sizes="100vw"
        alt="tag-logo"
        src="/icons/tag-logo.svg"
        className="shadow-tag-logo absolute -top-20 left-1/2 h-[151px] w-[80px] -translate-x-1/2 [filter:var(--shadow-tag-logo)]"
      />
      <div className="mt-10 mb-12 flex w-full flex-col items-center justify-between gap-4 overflow-hidden px-6 py-3">
        <h1 className="font-poppins text-center text-2xl font-extrabold text-[#363A44]">
          {title}
        </h1>
        <div className="my-5 h-1 w-32 bg-[#00AAFF]"></div>
        <p className="font-poppins px-1 text-center text-sm font-extrabold text-[#00AAFF]">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Tag;
