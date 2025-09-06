import { TagProps } from '@/lib/types';
import Image from 'next/image';

const Tag = ({ title, children, className = '' }: TagProps) => {
  return (
    <div
      className={`shadow-tag absolute bottom-9 flex h-fit w-[254px] flex-col rounded-[15px] border-[1.2px] border-white bg-white ${className}`}
      style={{ zoom: 0.67 }}
    >
      <Image
        height={0}
        width={0}
        sizes="100vw"
        alt="tag-logo"
        src="/icons/tag-logo.svg"
        className="shadow-tag-logo absolute -top-20 left-1/2 h-[151px] w-[80px] -translate-x-1/2 [filter:var(--shadow-tag-logo)]"
      />
      <div className="font-dm-sans mt-10 mb-12 flex w-full flex-col items-center justify-between gap-4 overflow-hidden px-4 py-3 text-center text-lg/tight font-normal text-[#363A44]">
        <h1 className="text-center text-2xl font-extrabold text-[#363A44]">
          {title}
        </h1>
        {children}
      </div>
    </div>
  );
};

export default Tag;
