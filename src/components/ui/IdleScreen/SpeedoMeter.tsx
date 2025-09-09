'use client';
import { WIND_DATA } from '@/data/constant';
import { WindDataType } from '@/lib/types';
import Image from 'next/image';
import {
  CSSProperties,
  Dispatch,
  SetStateAction,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

function WindInfo({ currentWindData }: { currentWindData: WindDataType }) {
  const [displayedData, setDisplayedData] = useState(currentWindData);
  const [animating, setAnimating] = useState<'in' | 'out'>('in');

  useEffect(() => {
    // when data changes, trigger exit first
    setAnimating('out');

    const timeout = setTimeout(() => {
      setDisplayedData(currentWindData);
      setAnimating('in');
    }, 300);
    return () => clearTimeout(timeout);
  }, [currentWindData]);

  return (
    <div className="mt-2 flex h-full flex-col items-center justify-center overflow-hidden">
      <div
        className={`flex transform flex-col items-center justify-center transition-all duration-300 ${animating === 'in' ? 'translate-x-0 opacity-100' : 'translate-x-16 opacity-0'}`}
      >
        <h2 className="font-akira text-[40px]/[56px] font-extrabold tracking-[1.6px] text-white uppercase">
          {displayedData.heading}
        </h2>
        <p className="font-dm-sans text-[32px]/[44.8px] font-medium tracking-[-1.28px] text-white italic opacity-80">
          {displayedData.description}
        </p>
      </div>
    </div>
  );
}

const SpeedoMeter = ({
  currentValue,
  eqz,
  setEqz,
  isIdle,
}: {
  currentValue: number;
  eqz: number;
  setEqz: Dispatch<SetStateAction<number>>;
  isIdle: boolean;
}) => {
  const [prevValue, setPrevValue] = useState(10);

  const [uiValue, setUiValue] = useState(eqz);
  const [dragging, setDragging] = useState(false);

  const [thumbCenter, setThumbCenter] = useState(0);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const [windData, setWindData] = useState(WIND_DATA[0]);

  useEffect(() => {
    if (isIdle) {
      setWindData((prev) => ({
        ...prev,
        description: WIND_DATA[4].description,
      }));
    }
  }, [isIdle]);

  const vars = useMemo<CSSProperties>(
    () => ({ ['--eqz' as string]: String(uiValue) }),
    [uiValue],
  );

  const THUMB_W = 90;

  // keep the overlay following the LIVE uiValue so motion is smooth
  useEffect(() => {
    const el = inputRef.current;
    if (!el) return;

    const compute = () => {
      const w = el.clientWidth;
      const pos = (uiValue / 90) * (w - THUMB_W) + THUMB_W / 2;
      setThumbCenter(pos);
    };

    compute();

    // observe width changes
    const ro = new ResizeObserver(compute);
    ro.observe(el);
    return () => ro.disconnect();
  }, [uiValue]);

  // keep uiValue synced with eqz when not dragging (external updates)
  useEffect(() => {
    if (!dragging) setUiValue(eqz);
  }, [eqz, dragging]);

  // original movement guards preserved, but applied on commit
  const commitValue = (raw: number) => {
    const snapped = Math.round(raw / 10) * 10;

    if (prevValue === 10 && snapped < 10) {
      setUiValue(10);
      setEqz(10);
      setPrevValue(10);
      return;
    }
    if (prevValue === 80 && snapped > 80) {
      setUiValue(80);
      setEqz(80);
      setPrevValue(80);
      return;
    }

    setUiValue(snapped);
    setEqz(snapped);
    setPrevValue(snapped);
  };

  // smooth while dragging
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = parseFloat(e.target.value);
    if (v < 10 || v > 80) {
      setDragging(false);
      return;
    }
    setUiValue(v); // no snapping here
  };

  const handlePointerDown = () => {
    setDragging(true);
  };
  const handlePointerUp = () => {
    setDragging(false);
    commitValue(uiValue); // snap to your 10-step logic on release
  };

  useEffect(() => {
    if (currentValue === 40 || currentValue === 60) {
      setWindData(WIND_DATA[0]);
    }
    if (currentValue === 80 || currentValue === 100) {
      setWindData(WIND_DATA[1]);
    }
    if (currentValue === 120) {
      setWindData(WIND_DATA[2]);
    }
    if (currentValue === 140 || currentValue === 160 || currentValue === 180) {
      setWindData(WIND_DATA[3]);
    }
  }, [currentValue]);

  const isHandAnimation =
    JSON.stringify(windData.description) ===
    JSON.stringify(WIND_DATA[4].description);

  return (
    <>
      <div
        className="trick-demo absolute inset-x-[300px] top-7 z-10 h-1/2"
        style={vars}
      >
        <input
          ref={inputRef}
          type="range"
          id="eqz"
          value={uiValue}
          step="any"
          max={90}
          onChange={handleInput}
          onPointerDown={handlePointerDown}
          onPointerUp={handlePointerUp}
          onTouchStart={handlePointerDown}
          onTouchEnd={handlePointerUp}
          className="range"
        />

        {/* Follower overlay: same rotation as the slider so X = along the track */}
        <div
          ref={overlayRef}
          className="pointer-events-none absolute inset-0"
          style={{
            transform: `rotate(${uiValue * 0.1}deg)`,
            transformOrigin: '100% 50%',
          }}
        >
          <div
            className="absolute -rotate-3"
            style={{
              left: `${thumbCenter}px`,
              top: 'calc(var(--sz) * 12)', // adjust vertical offset if you want
              transform: 'translate(-50%, -50%)', // centers the div horizontally on the thumb
            }}
          >
            <span className="font-dm-sans rounded-lg bg-white px-6 py-3 text-[32px] font-bold tracking-[-1.28px] whitespace-nowrap text-neutral-500">
              {currentValue} km/hr
            </span>
            {isHandAnimation && (
              <Image
                src="/gifs/hand-move.gif"
                alt="Hand Movement"
                width={400}
                height={400}
                className="absolute -top-40 left-1/2"
                unoptimized
              />
            )}
          </div>
        </div>
        <WindInfo currentWindData={windData} />
      </div>
      <style>{`
.trick-demo {
  --sz: 10px;
  --eqz: 0;
}

/* Range */
.range {
  width: 100%;
  height: calc(var(--sz) * 2);
  position: absolute;
  --bg-thumb: white;
  --bs-thumb: 0 0 0px 20px rgba(255, 255, 255, 0.10);
  transform: rotate(calc(var(--eqz) * 0.1deg));
  transform-origin: 100% 50%;
  -webkit-appearance: none;
}
.range:focus,
.range:focus::-webkit-slider-runnable-track { outline: none; }
.range::-webkit-slider-runnable-track { background: #fff0; height: calc(var(--sz) * 3.5); }
.range::-moz-range-track { background: #fff0; height: calc(var(--sz) * 3.5); }
.range::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 90px;
  height: 90px;
  border-radius: calc(var(--sz) * 5);
  cursor: pointer;
  margin-top: calc(var(--sz) * -2);
  background: white url('/icons/code.svg') center / 60% no-repeat;
  box-shadow: var(--bs-thumb);
  position: relative;
}
.range::-moz-range-thumb {
  width: calc(var(--sz) * 5);
  height: calc(var(--sz) * 5);
  border-radius: calc(var(--sz) * 5);
  cursor: pointer;
  margin-top: calc(var(--sz) * -1);
  background: var(--bg-thumb);
  box-shadow: var(--bs-thumb);
}
      `}</style>
    </>
  );
};

export default SpeedoMeter;
