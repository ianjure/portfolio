'use client';

import { useEffect, useState } from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';

interface ProjectCardProps {
  mainImage: string;
  slides?: string[];
  title: string;
  award?: string;
  name: string;
  description: string;
  interval?: number;
}

export default function ProjectCard({
  mainImage,
  slides = [],
  title,
  award,
  name,
  description,
  interval = 1800,
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isSlideshowActive, setIsSlideshowActive] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = slides.length > 0 ? slides : [mainImage];

  // Wait after hover before starting the slideshow
  useEffect(() => {
    if (!isHovered) {
      setIsSlideshowActive(false);
      return;
    }

    const timeout = setTimeout(() => {
      setIsSlideshowActive(true);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [isHovered]);

  // Start cycling through slides after the delay
  useEffect(() => {
    if (!isSlideshowActive || images.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [isSlideshowActive, images.length, interval]);

  const handleMouseEnter = () => {
    setCurrentSlide(0);
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setIsSlideshowActive(false);
    setCurrentSlide(0);
  };

  return (
    <Card
      className="
        group
        w-full
        overflow-visible
        rounded-[0px]
        ring-0
        shadow-none
        p-0
        [--card-spacing:0px]
        cursor-pointer
    "
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Image */}
      <CardContent className="p-0">
        <div
          className="
            z-10
            relative
            w-full
            overflow-hidden
            rounded-[16px]
            bg-black
            aspect-[4/3]
            sm:aspect-[2240/980]
            transition-transform
            duration-300
            ease-[cubic-bezier(0.22,1,0.36,1)]
            group-hover:scale-[1.008]
        "
        >
          {/* Main image */}
          <img
            src={mainImage}
            alt={title}
            className={`
                absolute
                inset-0
                block
                h-full
                w-full
                object-cover
                transition-opacity
                duration-700
                ease-in-out
                ${isSlideshowActive ? 'opacity-0' : 'opacity-100'}
                `}
          />

          {/* Slideshow images */}
          {images.map((image, index) => (
            <img
              key={`${image}-${index}`}
              src={image}
              alt=""
              className={`
            absolute
            inset-0
            block
            h-full
            w-full
            object-cover
            transition-opacity
            duration-700
            ease-in-out
            ${isSlideshowActive && index === currentSlide ? 'opacity-100' : 'opacity-0'}
          `}
            />
          ))}
        </div>
      </CardContent>

      {/* Footer */}
      <CardFooter className="flex flex-col items-stretch gap-2 pt-4 bg-white border-0">
        {/* Title + Award */}
        <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex min-w-0 items-center">
            {/* Arrow */}
            <span
              className="
        inline-flex
        w-0
        overflow-hidden
        opacity-0
        transition-all
        duration-300
        ease-[cubic-bezier(0.22,1,0.36,1)]
        group-hover:w-8
        group-hover:opacity-100
      "
              aria-hidden="true"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4 shrink-0"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </span>

            {/* Title */}
            <h3 className="text-xl font-semibold tracking-tight leading-tight sm:text-2xl text-stone-800">
              {title}
            </h3>
          </div>

          {award && (
            <span className="shrink-1 text-base font-medium text-gray-400 sm:text-right">
              {award}
            </span>
          )}
        </div>

        {/* Name + Description */}
        <div className="text-base text-slate-500">
          <span className="font-bold">{name}</span>

          <span
            aria-hidden="true"
            className="mx-2 inline-block h-1 w-1 -translate-y-px rounded-full bg-slate-500"
          />

          <span>{description}</span>
        </div>
      </CardFooter>
    </Card>
  );
}
