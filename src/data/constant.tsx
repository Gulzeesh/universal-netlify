import { BrightnessAlertIcon } from '@/components/icons';
import Plan3d from '@/components/SolarPanel3d';
const IdleScreen = dynamic(() => import('@/components/ui/IdleScreen'));
import {
  ExploreRoutingType,
  TextItem,
  VideoCardProps,
  WindDataType,
} from '@/lib/types';
import dynamic from 'next/dynamic';

export const EXPLORE_ROUTING: ExploreRoutingType[] = [
  {
    title: 'Explore',
    href: '/explore/explore',
    image: '/images/thumbnail/explore.webp',
    chipProps: { type: 'secondary' },
    content: <Plan3d modelUrl="/ss3.glb" />,
  },
  {
    title: 'Strength',
    href: '/explore/strength',
    image: '/images/thumbnail/strength.webp',
    chipProps: { type: 'secondary' },
    content: {
      headerData: {
        content: {
          title: [
            { text: `Panels Don't Fail,` },
            { text: 'Structures Do', variant: 'blue' },
          ],
          description:
            'Understand how weak structures cause long-term damage, leaks, and losses.',
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
        src: '/videos/tile-2-why-strength-matters1.mp4',
        thumbnail: '/images/thumbnail/strength.webp',
      },
    },
  },
  // TODO: uncommet after idle screen is implemented
  {
    title: 'Compare',
    href: '/explore/compare',
    image: '/images/thumbnail/compare.webp',
    chipProps: { type: 'secondary' },
    content: <IdleScreen />,
  },
  {
    title: 'Installation',
    href: '/explore/installation',
    image: '/images/thumbnail/installation.webp',
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
        src: '/videos/tile-4-installation1.mp4',
        thumbnail: '/images/thumbnail/installation.webp',
      },
    },
  },
  {
    title: 'Quality',
    href: '/explore/quality',
    image: '/images/thumbnail/quality.webp',
    chipProps: { type: 'secondary' },
    content: {
      headerData: {
        content: {
          title: [
            { text: 'Only the ' },
            { text: 'Best Panels', variant: 'blue' },
            { text: 'Make It to Your Home.' },
          ],
          description:
            'Experience the smooth, same-day WindPro installation process.',
        },
      },
      // pointerListData: {
      //   title: 'Fastest Installation Process',
      //   pointers: [
      //     {
      //       icon: <BrightnessAlertIcon />,
      //       title: 'Step/Point 1',
      //       subTitle: 'Lorem ipsum dolor sit amet',
      //     },
      //     {
      //       icon: <BrightnessAlertIcon />,
      //       title: 'Step/Point 2',
      //       subTitle: 'Lorem ipsum dolor sit amet',
      //     },
      //     {
      //       icon: <BrightnessAlertIcon />,
      //       title: 'Step/Point 3',
      //       subTitle: 'Lorem ipsum dolor sit amet',
      //     },
      //     {
      //       icon: <BrightnessAlertIcon />,
      //       title: 'Step/Point 4',
      //       subTitle: 'Lorem ipsum dolor sit amet',
      //     },
      //   ],
      // },
      videoData: {
        src: '/videos/tile-5-quality1.mp4',
        thumbnail: '/images/thumbnail/quality.webp',
      },
    },
  },
  {
    title: 'Impact',
    href: '/explore/impact',
    image: '/images/thumbnail/impact.webp',
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
      // pointerListData: {
      //   title: 'Safe, Sturdy & Feature Rich',
      //   pointers: [
      //     {
      //       icon: <BrightnessAlertIcon />,
      //       title: 'Feature 1',
      //       subTitle: 'Lorem ipsum dolor sit amet',
      //     },
      //     {
      //       icon: <BrightnessAlertIcon />,
      //       title: 'Feature 2',
      //       subTitle: 'Lorem ipsum dolor sit amet',
      //     },
      //     {
      //       icon: <BrightnessAlertIcon />,
      //       title: 'Feature 3',
      //       subTitle: 'Lorem ipsum dolor sit amet',
      //     },
      //     {
      //       icon: <BrightnessAlertIcon />,
      //       title: 'Feature 4',
      //       subTitle: 'Lorem ipsum dolor sit amet',
      //     },
      //   ],
      // },
      videoData: {
        src: '/videos/stories-of-trust-testimonal-kunal-meshram1.mp4',
        thumbnail: '/images/thumbnail/impact.webp',
      },
    },
  },
  // {
  //   title: 'Proof',
  //   href: '/explore/proof',
  //   image: '/images/thumbnail.webp',
  //   content: <Plan3d modelUrl="/ss.glb" />,
  // },
  {
    title: 'Commitment',
    href: '/explore/commitment',
    image: '/images/thumbnail/commitment.webp',
    chipProps: { type: 'secondary' },
    content: {
      headerData: {
        content: {
          title: [
            { text: 'Expertise you can' },
            { text: 'trust', variant: 'blue' },
          ],
          description:
            'Meet the engineers & innovators who have built India’s safest solar structure',
        },
      },
      // pointerListData: {
      //   title: 'Advanced Delivery Vans',
      //   pointers: [
      //     {
      //       icon: <BrightnessAlertIcon />,
      //       title: 'Step 1',
      //       subTitle: 'Lorem ipsum dolor sit amet',
      //     },
      //     {
      //       icon: <BrightnessAlertIcon />,
      //       title: 'Step 2',
      //       subTitle: 'Lorem ipsum dolor sit amet',
      //     },
      //     {
      //       icon: <BrightnessAlertIcon />,
      //       title: 'Step 3',
      //       subTitle: 'Lorem ipsum dolor sit amet',
      //     },
      //     {
      //       icon: <BrightnessAlertIcon />,
      //       title: 'Step 4',
      //       subTitle: 'Lorem ipsum dolor sit amet',
      //     },
      //   ],
      // },
      videoData: {
        src: '/videos/tile-people-behind-the-structure1.mp4',
        thumbnail: '/images/thumbnail/commitment.webp',
      },
    },
  },
  {
    title: 'Recognition',
    href: '/explore/recognition',
    image: '/images/thumbnail/recognition.webp',
    chipProps: { type: 'secondary' },
    content: {
      headerData: {
        content: {
          title: [
            { text: 'Quality that wins' },
            { text: 'appreciation', variant: 'blue' },
          ],

          description:
            'See the certifications, awards & bodies that endorse WindPro',
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
        src: '/videos/tile-stories-of-trust1.mp4',
        thumbnail: '/images/thumbnail/recognition.webp',
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
    thumbnail:
      '/images/thumbnail/all-content/monofacial-vs-bifacial-solar-panels--which-should-you-choose-in-2025.webp',
    src: '/videos/monofacial-vs-bifacial-solar-panels--which-should-you-choose-in-20251.mp4',
    duration: '03:52',
    title: 'Monofacial vs Bifacial Solar Panels',
  },
  {
    href: '/content/2',
    thumbnail:
      '/images/thumbnail/all-content/customer-review-of-solarsquares-5-year-maintenance-service.webp',
    src: '/videos/customer-review-of-solarsquares-5-year-maintenance-service-solarsquare-720p-h2641.mp4',
    duration: '01:12',
    title: `Customer review of SolarSquare's 5-year maintenance service`,
  },
  {
    href: '/content/3',
    thumbnail: '/images/thumbnail/all-content/hilti-water-leakage-video.webp',
    src: '/videos/solarsquares-hilti-chemical-anchoring-solutions-with-no-water-leakage-guarantee-hargharsolar-solarsquare-1080p-h2641.mp4',
    duration: '00:50',
    title: 'HILTI Water Leakage',
  },
  {
    href: '/content/4',
    thumbnail:
      '/images/thumbnail/all-content/how-to-calculate-right-solar-system-size-for-your-home-rooftop-solar-size-calculator.webp',
    src: '/videos/how-to-calculate-right-solar-system-size-for-your-home-rooftop-solar-size-calculator-solarsquare-1080p-h2641.mp4',
    duration: '01:59',
    title: `How to Calculate Right Solar System size for your home rooftop`,
  },
  {
    href: '/content/5',
    thumbnail:
      '/images/thumbnail/all-content/light-your-home-with-solar-1-1.webp',
    src: '/videos/light-up-your-home-with-solarsquares-solar-system1.mp4',
    duration: '00:30',
    title: 'Light Your Home With Solar',
  },
  {
    href: '/content/6',
    thumbnail: '/images/thumbnail/all-content/msedcl-bill-explained.webp',
    src: '/videos/msedcl-solar-electricity-bill-how-to-read-msedcl-solar-electricity-bill-solarsquare-1080p-h2641.mp4',
    duration: '04:05',
    title: 'MSEDCL Bill Explained',
  },
  {
    href: '/content/7',
    thumbnail: '/images/thumbnail/all-content/raat-ko-solar-chalega.webp',
    src: '/videos/do-solar-panels-work-at-night-the-complete-truth-solarsquare-720p-h2641.mp4',
    duration: '03:03',
    title: 'Raat Ko Solar ChalegaRaat Ko Solar Chalega',
  },
  {
    href: '/content/8',
    thumbnail: '/images/thumbnail/all-content/solar-se-ev-chalega.webp',
    src: '/videos/can-you-charge-your-ev-with-rooftop-solar-find-out1.mp4',
    duration: '03:21',
    title: 'Solar Se EV Chalega',
  },
  {
    href: '/content/9',
    thumbnail:
      '/images/thumbnail/all-content/what-is-net-metering-net-metering-process-net-vs-gross-metering-explained.webp',
    src: '/videos/what-is-net-metering-net-metering-process-net-vs-gross-metering-explained-solarsquare-720p-h2641.mp4',
    duration: '06:35',
    title: 'What is Net Metering?',
  },
  {
    href: '/content/10',
    thumbnail:
      '/images/thumbnail/all-content/3-easy-ways-of-solar-financing-solarsquares-10-minute-emi-financing-starting-3500.webp',
    src: '/videos/3-easy-ways-of-solar-financing-solarsquares-10-minute-emi-financing-starting-3500-hargharsolar1.mp4',
    duration: '01:01',
    title: '3 easy ways of Solar Financing',
  },
  {
    href: '/content/11',
    isTrending: true,
    trendingThumbnail: '/images/artboard1.webp',
    thumbnail: '/images/Artboard-1.webp',
    src: '/videos/solarsquares-savings-guarantee-solar--100-assured-savings-zero-fine-print-hindi.mp4',
    duration: '00:30',
    title: `Solar Square's Savings Guarantee Solar`,
  },
  {
    href: '/content/12',
    isTrending: true,
    thumbnail: '/images/Artboard-4.webp',
    trendingThumbnail: '/images/artboard4.webp',
    src: '/videos/dixit-nagar-nagpur-how-residents-went-from-10000-to-0-in-electricity-bills-with-solarsquare.mp4',
    duration: '01:12',
    title: `Dixit Nagar, Nagpur How Residents Went from ₹10,000 to ₹0 in Electricity Bills with SolarSquare!`,
  },
  {
    href: '/content/13',
    isTrending: true,
    trendingThumbnail: '/images/artboard3.webp',
    thumbnail: '/images/Artboard-3.webp',
    src: '/videos/sasta-solar-udega-solarsquare-ka-solar-tikega--bharat-ka-sahisolar.mp4',
    duration: '00:41',
    title: `Sasta Solar Udega, SolarSquare ka Solar Tikega`,
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

export const trendingVideos = VIDEO_DATA.filter((video) => video.isTrending);

export const slidesData: {
  text: TextItem[];
  buttonText: string;
  image: string;
  href?: string;
}[] = [
  {
    text: [
      { text: `Sahi Solar Means`, color: 'text-white', break: true },
      { text: 'Safe Solar', color: 'text-yellow-900' },
    ],
    buttonText: 'Watch Now',
    image: trendingVideos[0]?.trendingThumbnail || '',
    href: trendingVideos[0]?.href,
  },
  {
    image: trendingVideos[1]?.trendingThumbnail || '',
    href: trendingVideos[1]?.href,
    text: [
      { text: `No More Bijli Bills`, color: 'text-yellow-900', break: true },
      { text: 'For Dixit Nagar! ', color: 'text-white' },
    ],
    buttonText: 'Watch Now',
  },
  {
    image: trendingVideos[2]?.trendingThumbnail || '',
    text: [
      { text: `Solar With`, color: 'text-white' },
      { text: `Guaranteed`, color: 'text-yellow-900' },
      { text: 'Savings & Generations', color: 'text-yellow-900', break: true },
    ],
    buttonText: 'Watch Now',
    href: trendingVideos[2]?.href,
  },
];

export const WIND_DATA: WindDataType[] = [
  {
    heading: 'Breeze',
    description:
      'Everyday monsoon breeze — like a typical rainy day in Nagpur.',
  },
  {
    heading: 'Strong Winds',
    description:
      'Shakes windows and breaks weak branches — common in Nagpur’s peak monsoon.',
  },
  {
    heading: 'Storm',
    description:
      'Uproots trees and damages rooftops — Cyclone Tauktae (2021) hit Gujarat with winds of 140 km/h.',
  },
  {
    heading: 'Cyclone',
    description:
      'Rips roofs and destroys weak structures — Cyclone Amphan (2020) struck Bengal with winds of 165 km/h.',
  },
  {
    heading: 'STRONG WINDS',
    description: 'Slide to compare more weather conditions',
  },
];
