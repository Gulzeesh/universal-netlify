import { IconTextDisplayProps } from '@/lib/types';

const MixColorsText = ({
  className = '',
  content,
  contentClassName = '',
}: IconTextDisplayProps) => {
  const color = (value: string) => {
    return value === 'blue'
      ? 'text-primary-500'
      : value === 'green'
        ? 'text-green-success-500'
        : value
          ? value
          : 'text-neutral-500';
  };

  return (
    <h1 className={`font-poppins flex flex-wrap ${className}`}>
      {content.map((item, index) => {
        return (
          <span
            key={index}
            className={`font-poppins text-[72px]/[100px] font-bold tracking-[-1.44px] ${
              item.break ? 'w-full' : ''
            } ${color((item.variant || item.color) as string)} ${contentClassName}`}
          >
            {item.text}
            {index === content.length - 1 ? '' : <>&nbsp;</>}
          </span>
        );
      })}
    </h1>
  );
};

export default MixColorsText;
