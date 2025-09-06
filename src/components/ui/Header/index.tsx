import Image from 'next/image';
import MixColorsText from '../MixColorsText';
import { HeaderProps } from '@/lib/types';

const Header = ({
  content,
  isRightImage = true,
  className = '',
  style,
}: HeaderProps) => {
  return (
    <div
      className={`flex items-center justify-between ${className}`}
      style={style}
    >
      <Image
        src="/images/logo.webp"
        width={197}
        height={133}
        alt="solar logo"
        className="object-contain"
      />
      <div className="flex flex-col items-center justify-center">
        <MixColorsText
          content={content.title}
          className={content.mixColorsClassName}
          contentClassName="text-[54px]/[75px]! tracking-[-1.08px]! font-bold!"
        />
        <p className="font-dm-sans text-[32px]/[44px] font-medium tracking-[-1.28px] text-neutral-50">
          {content.description}
        </p>
      </div>
      {isRightImage && (
        <Image
          src="/images/time-logo.webp"
          width={130}
          height={160}
          alt="solar logo"
          className="object-contain"
        />
      )}
    </div>
  );
};

export default Header;
