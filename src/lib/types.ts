import { ButtonHTMLAttributes, ReactElement, ReactNode, SVGProps } from 'react';

export interface TextItem {
  text: string;
  variant?: 'blue' | 'green';
  color?: string;
  break?: boolean;
}

export interface IconTextDisplayProps {
  content: TextItem[];
  className?: string;
  contentClassName?: string;
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  leftIcon?: ReactNode;
  content: string;
  rightIcon?: ReactNode;
  variant: 'primary' | 'secondary';
  className?: string;
}

export interface ChipProps {
  text: string;
  type?: 'primary' | 'secondary';
  className?: string;
}

export type IconProps = SVGProps<SVGSVGElement>;

export type ExploreRoutingType = {
  title: string;
  href: string;
  image: string;
  chipProps?: Omit<ChipProps, 'text'>;
  content:
    | ReactElement
    | {
        headerData: HeaderProps;
        pointerListData: PointerListProps;
        videoData: VideoProps;
      };
};

export interface PointerCardProps {
  icon: ReactElement;
  title: string;
  subTitle: string;
}

export interface PointerListProps {
  title: string;
  pointers: PointerCardProps[];
}

export interface VideoCardProps {
  href: string;
  thumbnail: string;
  src: string;
  duration: string;
  title: string;
}

export interface HeaderProps {
  content: {
    title: TextItem[];
    description: string;
    mixColorsClassName?: string;
  };
  isRightImage?: boolean;
  className?: string;
}

export interface VideoProps {
  src: string;
  className?: string;
}
