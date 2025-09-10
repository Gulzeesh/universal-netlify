import { useCallback, useEffect, useRef, useState } from 'react';

type UseIdleOptions = {
  onIdle?: () => void;
  timeout?: number; // ms
  autoStart?: boolean; // start immediately or wait
};

type UseIdleReturn = {
  isIdle: boolean;
  isRunning: boolean;
  start: (ms?: number) => void; // start or restart; also clears isIdle
  reset: (ms?: number) => void; // always restart; clears isIdle
  stop: () => void; // stop and clear timer + listeners
  triggerIdle: () => void; // force idle immediately
};

const useIdle = ({
  onIdle,
  timeout = 45000,
  autoStart = false,
}: UseIdleOptions = {}): UseIdleReturn => {
  const [isIdle, setIsIdle] = useState(false);
  const [isRunning, setIsRunning] = useState(autoStart);
  const savedOnIdle = useRef(onIdle);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    savedOnIdle.current = onIdle;
  }, [onIdle]);

  const clearTimer = useCallback(() => {
    if (typeof window === 'undefined') return;
    if (timerRef.current !== null) {
      window.clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const goIdle = useCallback(() => {
    setIsIdle(true);
    // IMPORTANT: stay running so we keep listeners attached.
    savedOnIdle.current?.();
    clearTimer();
  }, [clearTimer]);

  const start = useCallback(
    (ms?: number) => {
      if (typeof window === 'undefined') return;
      setIsIdle(false); // clear idle immediately
      setIsRunning(true); // ensure listeners are attached
      clearTimer();
      timerRef.current = window.setTimeout(goIdle, ms ?? timeout);
    },
    [clearTimer, goIdle, timeout],
  );

  const reset = useCallback(
    (ms?: number) => {
      // treat any activity as a full restart
      setIsIdle(false);
      start(ms);
    },
    [start],
  );

  const stop = useCallback(() => {
    setIsRunning(false);
    clearTimer();
  }, [clearTimer]);

  const triggerIdle = useCallback(() => {
    goIdle();
  }, [goIdle]);

  // Attach activity listeners only while running
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (!isRunning) return;

    const onActivity = () => reset();

    const events: (keyof WindowEventMap)[] = [
      'mousemove',
      'mousedown',
      'keydown',
      'touchstart',
      'wheel',
    ];

    events.forEach((evt) =>
      window.addEventListener(evt, onActivity, { passive: true }),
    );

    // kick off or restart the timer when we start running
    reset();

    return () => {
      events.forEach((evt) => window.removeEventListener(evt, onActivity));
      clearTimer();
    };
  }, [isRunning, reset, clearTimer]);

  // Optional autostart on mount
  useEffect(() => {
    if (autoStart) start();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { isIdle, isRunning, start, reset, stop, triggerIdle };
};

export default useIdle;
