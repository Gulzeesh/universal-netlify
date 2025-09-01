import { IconProps } from '@/lib/types';

export const PlayIcon = ({ ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="19"
    height="25"
    viewBox="0 0 19 25"
    fill="white"
    {...props}
  >
    <path d="M0.332031 24.1654V0.832031L18.6654 12.4987L0.332031 24.1654Z" />
  </svg>
);

export const PauseIcon = ({ ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="38"
    viewBox="0 0 32 38"
    fill="white"
    {...props}
  >
    <path d="M21.3333 37.6673V0.333984H32V37.6673H21.3333ZM0 37.6673V0.333984H10.6667V37.6673H0Z" />
  </svg>
);

export const VerifiedIcon = ({ ...props }: IconProps) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="33"
    height="33"
    viewBox="0 0 33 33"
    fill="none"
  >
    <mask
      id="mask0_1294_36106"
      className="mask-type-alpha"
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="33"
      height="33"
    >
      <rect x="0.730469" y="0.796875" width="32" height="32" fill="#D9D9D9" />
    </mask>
    <g mask="url(#mask0_1294_36106)">
      <path
        d="M12.1958 30.7969L9.6625 26.5302L4.8625 25.4635L5.32917 20.5302L2.0625 16.7969L5.32917 13.0635L4.8625 8.13021L9.6625 7.06354L12.1958 2.79688L16.7292 4.73021L21.2625 2.79688L23.7958 7.06354L28.5958 8.13021L28.1292 13.0635L31.3958 16.7969L28.1292 20.5302L28.5958 25.4635L23.7958 26.5302L21.2625 30.7969L16.7292 28.8635L12.1958 30.7969ZM15.3292 21.5302L22.8625 13.9969L20.9958 12.0635L15.3292 17.7302L12.4625 14.9302L10.5958 16.7969L15.3292 21.5302Z"
        fill="white"
      />
    </g>
  </svg>
);

export const VolumeUpIcon = ({ ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="48"
    height="48"
    viewBox="0 -960 960 960"
    fill="#ffffff"
    {...props}
  >
    <path d="M560-131v-82q90-26 145-100t55-168q0-94-55-168T560-749v-82q124 28 202 125.5T840-481q0 127-78 224.5T560-131ZM120-360v-240h160l200-200v640L280-360H120Zm440 40v-322q47 22 73.5 66t26.5 96q0 51-26.5 94.5T560-320Z" />
  </svg>
);

export const VolumeOffIcon = ({ ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="48"
    height="48"
    viewBox="0 -960 960 960"
    fill="#ffffff"
    {...props}
  >
    <path d="M792-56 671-177q-25 16-53 27.5T560-131v-82q14-5 27.5-10t25.5-12L480-368v208L280-360H120v-240h128L56-792l56-56 736 736-56 56Zm-8-232-58-58q17-31 25.5-65t8.5-70q0-94-55-168T560-749v-82q124 28 202 125.5T840-481q0 53-14.5 102T784-288ZM650-422l-90-90v-130q47 22 73.5 66t26.5 96q0 15-2.5 29.5T650-422ZM480-592 376-696l104-104v208Z" />
  </svg>
);

export const BrightnessAlertIcon = ({ ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="65"
    height="65"
    viewBox="0 0 65 65"
    fill="none"
    {...props}
  >
    <mask
      id="mask0_1685_34885"
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="65"
      height="65"
    >
      <rect x="0.667969" y="0.75" width="64" height="64" fill="#D9D9D9" />
    </mask>
    <g mask="url(#mask0_1685_34885)">
      <path
        d="M32.6646 46.0799C33.4201 46.0799 34.0535 45.8244 34.5646 45.3133C35.0757 44.8022 35.3312 44.1688 35.3312 43.4133C35.3312 42.6577 35.0757 42.0244 34.5646 41.5133C34.0535 41.0022 33.4201 40.7466 32.6646 40.7466C31.909 40.7466 31.2757 41.0022 30.7646 41.5133C30.2535 42.0244 29.9979 42.6577 29.9979 43.4133C29.9979 44.1688 30.2535 44.8022 30.7646 45.3133C31.2757 45.8244 31.909 46.0799 32.6646 46.0799ZM29.9979 35.4133H35.3312V19.4133H29.9979V35.4133ZM32.6646 62.8799L23.7312 54.0799H11.3312V41.6799L2.53125 32.7466L11.3312 23.8133V11.4133H23.7312L32.6646 2.61328L41.5979 11.4133H53.9979V23.8133L62.7979 32.7466L53.9979 41.6799V54.0799H41.5979L32.6646 62.8799ZM32.6646 55.4133L39.3312 48.7466H48.6646V39.4133L55.3312 32.7466L48.6646 26.0799V16.7466H39.3312L32.6646 10.0799L25.9979 16.7466H16.6646V26.0799L9.99792 32.7466L16.6646 39.4133V48.7466H25.9979L32.6646 55.4133Z"
        fill="#0E1118"
      />
    </g>
  </svg>
);

export const HomeIcon = ({ ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="33"
    height="32"
    viewBox="0 0 33 32"
    fill="none"
    {...props}
  >
    <mask
      id="mask0_1715_6328"
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="33"
      height="32"
    >
      <rect x="0.667969" width="32" height="32" fill="#D9D9D9" />
    </mask>
    <g mask="url(#mask0_1715_6328)">
      <path
        d="M8.67057 25.3333H12.6706V17.3333H20.6706V25.3333H24.6706V13.3333L16.6706 7.33333L8.67057 13.3333V25.3333ZM6.00391 28V12L16.6706 4L27.3372 12V28H18.0039V20H15.3372V28H6.00391Z"
        fill="#1C1B1F"
      />
    </g>
  </svg>
);

export const ArrowIcon = ({ ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="44"
    height="32"
    viewBox="0 0 44 32"
    fill="#1C1B1F"
    {...props}
  >
    <path d="M16.668 32L0.667969 16L16.668 0L20.4013 3.86667L10.9346 13.3333H43.3346V18.6667H10.9346L20.4013 28.1333L16.668 32Z" />
  </svg>
);

export const BoldArrowIcon = ({ ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="87"
    height="87"
    viewBox="0 0 87 87"
    fill="none"
    {...props}
  >
    <path
      d="M16.1901 75.0069L75.6251 48.5019C80.3906 46.3768 80.3906 40.0248 75.6251 37.8996L16.1901 11.3946C10.8051 8.9932 5.21945 14.3257 7.8868 19.3216L19.2341 40.575C20.1166 42.228 20.1167 44.1736 19.2341 45.8266L7.8868 67.08C5.21945 72.0759 10.8051 77.4084 16.1901 75.0069Z"
      fill="#363A44"
    />
  </svg>
);
