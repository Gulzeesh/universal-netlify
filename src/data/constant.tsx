import { BrightnessAlertIcon } from '@/components/icons';
import Plan3d from '@/components/SolarPanel3d';
import { ExploreRoutingType, VideoCardProps } from '@/lib/types';

export const EXPLORE_ROUTING: ExploreRoutingType[] = [
  {
    title: 'Explore',
    href: '/explore/explore',
    image: '/images/thumbnail-01.webp',
    chipProps: { type: 'secondary' },
    content: <Plan3d modelUrl="/ss.glb" />,
  },
  {
    title: 'Problem',
    href: '/explore/problem',
    image: '/images/thumbnail-02.webp',
    chipProps: { type: 'secondary' },
    content: {
      headerData: {
        content: {
          title: [
            { text: `Panels Don't Fail,` },
            { text: 'Structures Do', variant: 'blue' },
          ],
          description: 'Click on any of the below tiles to learn more',
        },
      },
      pointerListData: {
        title: 'Problems with Other Solars',
        pointers: [
          {
            icon: <BrightnessAlertIcon />,
            title: 'Point 1',
            subTitle: 'Lorem ipsum dolor sit amet',
          },
          {
            icon: <BrightnessAlertIcon />,
            title: 'Point 2',
            subTitle: 'Lorem ipsum dolor sit amet',
          },
          {
            icon: <BrightnessAlertIcon />,
            title: 'Point 3',
            subTitle: 'Lorem ipsum dolor sit amet',
          },
          {
            icon: <BrightnessAlertIcon />,
            title: 'Point 4',
            subTitle: 'Lorem ipsum dolor sit amet',
          },
        ],
      },
      videoData: {
        src: '/videos/ec-recognised-by-experts-with-music.webm',
      },
    },
  },
  {
    title: 'Solution',
    href: '/explore/solution',
    image: '/images/thumbnail-01.webp',
    chipProps: { type: 'secondary' },
    content: {
      headerData: {
        content: {
          title: [
            { text: 'A Structure' },
            { text: 'Built to Last', variant: 'blue' },
          ],
          description:
            'Discover what makes WindPro the most reliable solar structure in India.',
        },
      },
      pointerListData: {
        title: 'Safe, Sturdy & Feature Rich',
        pointers: [
          {
            icon: <BrightnessAlertIcon />,
            title: 'Feature 1',
            subTitle: 'Lorem ipsum dolor sit amet',
          },
          {
            icon: <BrightnessAlertIcon />,
            title: 'Feature 2',
            subTitle: 'Lorem ipsum dolor sit amet',
          },
          {
            icon: <BrightnessAlertIcon />,
            title: 'Feature 3',
            subTitle: 'Lorem ipsum dolor sit amet',
          },
          {
            icon: <BrightnessAlertIcon />,
            title: 'Feature 4',
            subTitle: 'Lorem ipsum dolor sit amet',
          },
        ],
      },
      videoData: {
        src: '/videos/ec-recognised-by-experts-with-music.webm',
      },
    },
  },
  {
    title: 'Proof',
    href: '/explore/proof',
    image: '/images/thumbnail-02.webp',
    content: <Plan3d modelUrl="/ss.glb" />,
  },
  {
    title: 'Delivery',
    href: '/explore/delivery',
    image: '/images/thumbnail-01.webp',
    chipProps: { type: 'secondary' },
    content: {
      headerData: {
        content: {
          title: [
            { text: 'Only the' },
            { text: 'Best Panels', variant: 'blue' },
            { text: 'Make It to Your Home' },
          ],
          description:
            'Step inside our factory to see how quality is built into your panels.',
        },
      },
      pointerListData: {
        title: 'Advanced Delivery Vans',
        pointers: [
          {
            icon: <BrightnessAlertIcon />,
            title: 'Step 1',
            subTitle: 'Lorem ipsum dolor sit amet',
          },
          {
            icon: <BrightnessAlertIcon />,
            title: 'Step 2',
            subTitle: 'Lorem ipsum dolor sit amet',
          },
          {
            icon: <BrightnessAlertIcon />,
            title: 'Step 3',
            subTitle: 'Lorem ipsum dolor sit amet',
          },
          {
            icon: <BrightnessAlertIcon />,
            title: 'Step 4',
            subTitle: 'Lorem ipsum dolor sit amet',
          },
        ],
      },
      videoData: {
        src: '/videos/ec-recognised-by-experts-with-music.webm',
      },
    },
  },
  {
    title: 'Installation',
    href: '/explore/installation',
    image: '/images/thumbnail-02.webp',
    chipProps: { type: 'secondary' },
    content: {
      headerData: {
        content: {
          title: [
            { text: 'Hassle-free Installation in' },
            { text: '8 hours', variant: 'blue' },
          ],
          description:
            'Experience the smooth, same-day WindPro installation process.',
        },
      },
      pointerListData: {
        title: 'Fastest Installation Process',
        pointers: [
          {
            icon: <BrightnessAlertIcon />,
            title: 'Step/Point 1',
            subTitle: 'Lorem ipsum dolor sit amet',
          },
          {
            icon: <BrightnessAlertIcon />,
            title: 'Step/Point 2',
            subTitle: 'Lorem ipsum dolor sit amet',
          },
          {
            icon: <BrightnessAlertIcon />,
            title: 'Step/Point 3',
            subTitle: 'Lorem ipsum dolor sit amet',
          },
          {
            icon: <BrightnessAlertIcon />,
            title: 'Step/Point 4',
            subTitle: 'Lorem ipsum dolor sit amet',
          },
        ],
      },
      videoData: {
        src: '/videos/ec-recognised-by-experts-with-music.webm',
      },
    },
  },
  {
    title: 'Experts',
    href: '/explore/experts',
    image: '/images/thumbnail-01.webp',
    chipProps: { type: 'secondary' },
    content: {
      headerData: {
        content: {
          title: [
            { text: 'Recognised By' },
            { text: 'Industry Experts', variant: 'blue' },
          ],
          description:
            'See the certifications, awards, and bodies that endorse WindPro',
        },
      },
      pointerListData: {
        title: 'Fastest Installation Process',
        pointers: [
          {
            icon: <BrightnessAlertIcon />,
            title: 'Recognition 1',
            subTitle: 'Lorem ipsum dolor sit amet',
          },
          {
            icon: <BrightnessAlertIcon />,
            title: 'Recognition 2',
            subTitle: 'Lorem ipsum dolor sit amet',
          },
          {
            icon: <BrightnessAlertIcon />,
            title: 'Recognition 3',
            subTitle: 'Lorem ipsum dolor sit amet',
          },
          {
            icon: <BrightnessAlertIcon />,
            title: 'Recognition 4',
            subTitle: 'Lorem ipsum dolor sit amet',
          },
        ],
      },
      videoData: {
        src: '/videos/ec-recognised-by-experts-with-music.webm',
      },
    },
  },
  {
    title: 'Testimonials',
    href: '/explore/testimonials',
    image: '/images/thumbnail-02.webp',
    chipProps: { type: 'secondary' },
    content: {
      headerData: {
        content: {
          title: [
            { text: 'What customers say after' },
            { text: 'one year of storms', variant: 'blue' },
          ],
          description:
            'Hear real stories from families who trusted WindPro for their homes.',
        },
      },
      pointerListData: {
        title: 'Trusted by over 30,000 customers',
        pointers: [
          {
            icon: <BrightnessAlertIcon />,
            title: 'Testimonial 1',
            subTitle: 'Lorem ipsum dolor sit amet',
          },
          {
            icon: <BrightnessAlertIcon />,
            title: 'Testimonial 2',
            subTitle: 'Lorem ipsum dolor sit amet',
          },
          {
            icon: <BrightnessAlertIcon />,
            title: 'Testimonial 3',
            subTitle: 'Lorem ipsum dolor sit amet',
          },
          {
            icon: <BrightnessAlertIcon />,
            title: 'Testimonial 4',
            subTitle: 'Lorem ipsum dolor sit amet',
          },
        ],
      },
      videoData: {
        src: '/videos/ec-recognised-by-experts-with-music.webm',
      },
    },
  },
];

export const HOME_ROUTING = [
  {
    title: 'WindPro Mount™',
    href: '/explore',
  },
  {
    title: 'All Content',
    href: '/content',
  },
];
export const VIDEO_DATA: VideoCardProps[] = [
  {
    href: '/content/1',
    thumbnail: '/images/customer-testimonials.webp',
    src: '/videos/ec-recognised-by-experts-with-music.webm',
    duration: '01:53',
    title: 'Customer Testimonials + Before and after of Rooftops and Bills',
  },
  {
    href: '/content/2',
    thumbnail: '/images/360-degree.webp',
    src: '/videos/ec-recognised-by-experts-with-music.webm',
    duration: '01:53',
    title: '360 degree wind pro mount',
  },
  {
    href: '/content/3',
    thumbnail: '/images/360-degree-1.webp',
    src: '/videos/ec-recognised-by-experts-with-music.webm',
    duration: '01:53',
    title: '360 degree wind pro mount',
  },
  {
    href: '/content/4',
    thumbnail: '/images/360-degree-2.webp',
    src: '/videos/ec-recognised-by-experts-with-music.webm',
    duration: '01:53',
    title: '360 degree wind pro mount',
  },
  {
    href: '/content/5',
    thumbnail: '/images/360-degree-3.webp',
    src: '/videos/ec-recognised-by-experts-with-music.webm',
    duration: '01:53',
    title: '360 degree wind pro mount',
  },
  {
    href: '/content/6',
    thumbnail: '/images/360-degree-4.webp',
    src: '/videos/ec-recognised-by-experts-with-music.webm',
    duration: '01:53',
    title: '360 degree wind pro mount',
  },
  {
    href: '/content/7',
    thumbnail: '/images/intro-to-structure.webp',
    src: '/videos/ec-recognised-by-experts-with-music.webm',
    duration: '01:53',
    title: 'Introduction to our Structure & Features',
  },
];
