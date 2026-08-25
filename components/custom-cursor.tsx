'use client';

import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isNearEdge, setIsNearEdge] = useState(false);

  useEffect(() => {
    const edgeThreshold = 5;

    const move = (e: MouseEvent) => {
      const nearEdge =
        e.clientX <= edgeThreshold ||
        e.clientX >= window.innerWidth - edgeThreshold ||
        e.clientY <= edgeThreshold ||
        e.clientY >= window.innerHeight - edgeThreshold;

      setPosition({
        x: e.clientX,
        y: e.clientY,
      });

      setIsNearEdge(nearEdge);

      const target = e.target as HTMLElement;

      setIsPointer(
        !!target.closest(
          'a, button, [role="button"], input, textarea, select, .cursor-pointer',
        ),
      );

      document.body.classList.toggle('custom-cursor-active', !nearEdge);
    };

    document.addEventListener('mousemove', move);

    return () => {
      document.removeEventListener('mousemove', move);
      document.body.classList.remove('custom-cursor-active');
    };
  }, []);

  return (
    <img
      src={isPointer ? '/cursor-pointer.svg' : '/cursor-arrow.svg'}
      alt=""
      className={`pointer-events-none fixed z-[9999] ${
        isPointer ? 'h-6' : 'h-5'
      } w-auto transition-opacity duration-150 ${
        isNearEdge ? 'opacity-0' : 'opacity-100'
      }`}
      style={{
        left: position.x,
        top: position.y,
      }}
    />
  );
}
