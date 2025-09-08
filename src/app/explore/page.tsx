'use client';
import { EXPLORE_ROUTING } from '@/data/constant';
import ExploreHomeCard from './components/ExploreHomeCard';
import Header from '@/components/ui/Header';
import { useRouter } from 'next/navigation';
import useIdle from '@/hooks/useIdle';

function ExploreHome() {
  const router = useRouter();
  useIdle({ onIdle: () => router.push('/idle-screen'), autoStart: true });

  return (
    <div
      className="flex h-[calc(100vh-74px)] flex-col gap-8 pb-8"
      style={{ zoom: 0.67 }}
    >
      {/* <Tag
        title="High Quality Virgin Steel"
        children={
          <div className="flex flex-col gap-2.5">
            {[
              { src: '/images/tag/tata-steel.webp', className: 'h-6' },
              { src: '/images/tag/essar.webp', className: 'h-10' },
              { src: '/images/tag/jsw.webp', className: 'h-11' },
            ].map((item, index) => (
              <div key={index} className="flex items-end gap-2.5">
                <BoldArrowIcon className="h-6 w-6" />
                <Image
                  height={0}
                  width={0}
                  sizes="100vw"
                  alt={item.src}
                  src={item.src}
                  className={`flex-grow object-contain object-left ${item.className}`}
                />
              </div>
            ))}
          </div>
        }
        className="absolute top-1/2 left-1/2 z-[100] -translate-x-1/2 -translate-y-1/2"
      /> */}
      {/* <Tag
        title="BIS-Compliant Structures"
        children={
          <Image
            height={0}
            width={0}
            sizes="100vw"
            alt="manak"
            src="/images/tag/manak.webp"
            className={`h-[147px] w-full object-cover`}
          />
        }
        className="absolute top-1/2 left-1/2 z-[100] -translate-x-1/2 -translate-y-1/2 [&>div]:inset-x-6"
      /> */}
      {/* <Tag
        title="IIT Bombay Approved"
        children={
          <div className="text-3xl font-extrabold text-[#B56666]">Logo</div>
        }
        className="absolute top-1/2 left-1/2 z-[100] -translate-x-1/2 -translate-y-1/2"
      /> */}
      {/* <Tag
        title="Steel Coating"
        children={
          <div className="font-poppins flex flex-col text-[29px] leading-10 font-extrabold -tracking-[0.576px] text-[#363A44]">
            <span className="underline decoration-[#0AF] !decoration-4 underline-offset-8">
              80 Micron
            </span>
            <span>Hot Dip</span>
            <span className="text-[#0AF]">Galvanized Zinc Coating</span>
          </div>
        }
        className="absolute top-1/2 left-1/2 z-[100] -translate-x-1/2 -translate-y-1/2"
      /> */}
      {/* <Tag
        title="Fast Install"
        children={
          <div className="font-poppins text-[28px] leading-10 font-extrabold -tracking-[0.56px] text-[#0AF]">
            Within 8 Hours Using Japanese Poka-Yoke Method
          </div>
        }
        className="absolute top-1/2 left-1/2 z-[100] -translate-x-1/2 -translate-y-1/2"
      /> */}
      {/* <Tag
        title="Chemical Anchoring"
        children={
          <ul className="font-poppins list-disc pl-9 text-left text-[28px] leading-10 font-extrabold -tracking-[0.56px] text-[#0AF]">
            <li>100% Water Leakage Proof Installation.</li>
            <li>Using HILTI Airtight Seal</li>
            <li>No Damage to Roof</li>
          </ul>
        }
        className="absolute top-1/2 left-1/2 z-[100] h-[538px] -translate-x-1/2 -translate-y-1/2"
      /> */}
      <Header
        content={{
          title: [
            { text: 'WindPro Mount™', break: true },
            { text: "India's" },
            { text: 'Safest & Strongest', variant: 'blue' },
            { text: 'Solar' },
          ],
          description: 'Click on any of the below tiles to learn more',
          mixColorsClassName: 'text-center justify-center',
        }}
        className="px-16 pt-6 [&>div]:gap-2"
      />
      <div className="grid w-full flex-grow grid-cols-4 gap-8 px-16">
        {EXPLORE_ROUTING.map((data, index) => (
          <ExploreHomeCard key={index} data={data} />
        ))}
      </div>
    </div>
  );
}

export default ExploreHome;
