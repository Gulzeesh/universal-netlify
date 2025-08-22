import Image from 'next/image';
import MixColorsText from '../MixColorsText';
import Button from '../Button';
import { PlayIcon } from '@/components/icons';

const ContentHero = () => {
  return (
    <div className="relative mb-8">
      <Image
        src={'/images/group.webp'}
        alt="Group Image"
        width={0}
        height={0}
        sizes="100vw"
        className="absolute top-0 -right-40 z-0 h-full w-[80%] blur-[48px]"
      />
      <div className="absolute inset-0 bg-linear-(--fade-white-x)" />
      <div className="relative h-[547px] overflow-hidden">
        <Image
          src={'/images/group.webp'}
          alt="Group Image"
          width={0}
          height={0}
          sizes="100vw"
          className="absolute -top-2 -right-40 z-0 w-[80%]"
        />
        <div className="absolute inset-0 bg-linear-(--fade-white-x)" />
        <div className="relative z-[1] mt-6 ml-16">
          <Image
            src="/images/logo.webp"
            width={0}
            height={0}
            sizes="100vw"
            alt="solar logo"
            className="mb-[37px] h-[150px] w-[222px] object-contain"
          />
          <MixColorsText
            content={[
              {
                text: `We're Solarizing,`,
                variant: 'blue',
                break: true,
              },
              {
                text: 'One Rooftop at a Time',
              },
            ]}
          />
          <Button
            content="Watch Now"
            leftIcon={<PlayIcon />}
            variant="primary"
            className="mt-5"
          />
        </div>
      </div>
    </div>
  );
};

export default ContentHero;
