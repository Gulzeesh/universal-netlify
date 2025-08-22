import { ButtonProps } from '@/lib/types';

const Button = ({
  leftIcon,
  content,
  rightIcon,
  variant,
  className = '',
  ...props
}: ButtonProps) => {
  const commonClasses =
    'font-dm-sans flex cursor-pointer items-center justify-center gap-3 rounded-xl border border-neutral-500 px-6 py-4 text-2xl/[33px] font-semibold tracking-[-0.96px]';
  const classes = {
    primary: 'bg-primary-300 text-white',
    secondary: 'bg-background-400 text-neutral-400 [&>svg]:fill-black-550',
  };

  return (
    <button
      className={`${commonClasses} ${classes[variant]} ${className}`}
      {...props}
    >
      {leftIcon}
      {content}
      {rightIcon}
    </button>
  );
};

export default Button;
