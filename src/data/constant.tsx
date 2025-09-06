import { BrightnessAlertIcon } from '@/components/icons';
import Plan3d from '@/components/SolarPanel3d';
import { ExploreRoutingType, VideoCardProps } from '@/lib/types';

export const EXPLORE_ROUTING: ExploreRoutingType[] = [
  {
    title: 'Explore',
    href: '/explore/explore',
    image: '/images/thumbnail.webp',
    chipProps: { type: 'secondary' },
    content: <Plan3d modelUrl="/ss3.glb" />,
  },
  {
    title: 'Problem',
    href: '/explore/problem',
    image: '/images/thumbnail.webp',
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
    image: '/images/thumbnail.webp',
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
    image: '/images/thumbnail.webp',
    content: <Plan3d modelUrl="/ss.glb" />,
  },
  {
    title: 'Delivery',
    href: '/explore/delivery',
    image: '/images/thumbnail.webp',
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
    image: '/images/thumbnail.webp',
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
    image: '/images/thumbnail.webp',
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
    image: '/images/thumbnail.webp',
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

export const LABELS = [
  {
    title: 'Rock-Solid Foundation',
    position: 'right',
    children: (
      <p>
        Anchored with world-class Hilti chemicals —{' '}
        <strong> stronger than regular bolts and 100% leak-proof </strong> for
        your roof.
      </p>
    ),
  },
  {
    title: '⁠Rust-Proof for 10+ Years',
    position: 'left',
    children: (
      <p>
        {' '}
        Every steel part is{' '}
        <strong>
          {' '}
          coated with a thick zinc layer (80 microns) so it won’t rust,
        </strong>{' '}
        even in heavy rains.
      </p>
    ),
  },
  {
    title: 'Fast & Error-Free Install',
    position: 'left',
    children: (
      <p>
        Smart Japanese design (poka-yoke) — everything is pre-fabricated, so
        your solar setup is installed in just{' '}
        <strong> 8 hours with zero cutting or welding. </strong>
      </p>
    ),
  },
  {
    title: 'Storm-Ready Design',
    position: 'right',
    children: (
      <p>
        Special tapering channels keep the structure stable in{' '}
        <strong> winds up to 180 km/hr — as strong as a cyclone. </strong>
      </p>
    ),
  },
  {
    title: '⁠Premium-Grade Steel',
    position: 'right',
    children: (
      <p>
        Made only from Tata/JSW/Essar steel.{' '}
        <strong>
          {' '}
          Our columns use 350 MPa steel and rafters 550 MPa steel
        </strong>{' '}
        — far stronger than the 250 MPa used by others.
      </p>
    ),
  },
  {
    title: 'Anti-Loosening Bolts',
    position: 'left',
    children: (
      <p>
        <strong>Unique wedge locked washers keep every bolt tight</strong> ,
        even during strong winds and vibrations.
      </p>
    ),
  },
  {
    title: '⁠Certified by Experts',
    position: 'right',
    children: (
      <p>
        Our design follows strict Indian standards and is{' '}
        <strong>approved by IIT Bombay</strong> after advanced wind and safety
        tests.
      </p>
    ),
  },
];
