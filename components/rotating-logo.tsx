'use client';

import { AnimatePresence, motion, type Transition } from 'motion/react';
import * as React from 'react';
import { cn } from '@/lib/utils';

type RotatingLogoProps = {
  logos: string[];
  duration?: number;
  delay?: number;
  startTime: number;
  transition?: Transition;
  y?: number;
  aspectRatio?: number;
  containerClassName?: string;
  logoClassName?: string;
};

function RotatingLogo({
  logos,
  duration = 3000,
  delay = 0,
  startTime,
  transition = {
    duration: 0.2,
    ease: 'easeIn',
  },
  y = -5,
  aspectRatio = 1000 / 300,
  containerClassName,
  logoClassName,
}: RotatingLogoProps) {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    if (logos.length <= 1) return;

    let timeout: ReturnType<typeof setTimeout>;

    const scheduleNextRotation = () => {
      const elapsed = Date.now() - startTime;

      // The first rotation happens after duration + delay.
      // Every rotation after that happens exactly duration apart.
      const firstRotation = duration + delay;

      if (elapsed < firstRotation) {
        timeout = setTimeout(scheduleNextRotation, firstRotation - elapsed);
        return;
      }

      // Calculate which rotation we're currently on
      const rotation = Math.floor((elapsed - delay) / duration);

      const nextIndex = rotation % logos.length;

      setIndex(nextIndex);

      // Calculate the exact next rotation time
      const nextRotation = delay + (rotation + 1) * duration;

      timeout = setTimeout(
        scheduleNextRotation,
        Math.max(0, nextRotation - (Date.now() - startTime)),
      );
    };

    scheduleNextRotation();

    return () => clearTimeout(timeout);
  }, [logos.length, duration, delay, startTime]);

  if (logos.length === 0) {
    return null;
  }

  const currentLogo = logos[index];

  return (
    <div
      className={cn(
        'relative flex w-full items-center justify-center overflow-hidden',
        containerClassName,
      )}
      style={{ aspectRatio }}
    >
      <AnimatePresence mode="wait">
        <motion.img
          key={currentLogo}
          src={currentLogo}
          alt=""
          className={cn(
            'absolute max-h-full max-w-full object-contain',
            logoClassName,
          )}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 1, y }}
          initial={{ opacity: 0, y: -y }}
          transition={transition}
        />
      </AnimatePresence>
    </div>
  );
}

export { RotatingLogo, type RotatingLogoProps };
export default RotatingLogo;
