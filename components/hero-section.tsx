'use client';

import * as React from 'react';
import RotatingLogo from '@/components/rotating-logo';
import { buttonVariants } from '@/components/ui/button';
import Link from 'next/link';
import { CloudDownloadIcon, ExternalLinkIcon } from 'lucide-react';

const logoGroups = [
  [
    '/logos/python-logo.svg',
    '/logos/numpy-logo.svg',
    '/logos/supabase-logo.svg',
  ],
  [
    '/logos/github-logo.svg',
    '/logos/pandas-logo.svg',
    '/logos/firebase-logo.svg',
  ],
  [
    '/logos/figma-logo.svg',
    '/logos/pytorch-logo.svg',
    '/logos/docker-logo.svg',
  ],
  [
    '/logos/nextjs-logo.svg',
    '/logos/tensorflow-logo.svg',
    '/logos/fastapi-logo.svg',
  ],
];

export default function Hero() {
  const rotationStartTime = React.useRef(Date.now()).current;

  return (
    <section className="flex min-h-[calc(100vh-65px)] items-center justify-center pt-20">
      <div className="mx-auto w-full max-w-6xl text-center">
        <h1 className="px-4 text-4xl font-bold leading-[1.1] tracking-tight text-[#0C0C0D] sm:text-5xl md:text-5xl lg:text-6xl">
          Data. AI. Products.
          <br className="font-italic" /> Built to solve real problems.
        </h1>

        <p className="mx-auto mt-10 max-w-3xl px-4 text-lg leading-relaxed text-gray-500 sm:text-lg md:text-xl">
          From machine learning models to full-stack applications, I bridge the
          gap between technical possibilities and real-world impact.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/Ian-Jure-Macalisang-CV.pdf"
            download
            className={buttonVariants({
              variant: 'default',
              className:
                'h-12 !rounded-full !border-0 bg-slate-500 px-7 text-base font-medium hover:bg-slate-600',
            })}
          >
            <CloudDownloadIcon aria-hidden="true" />
            Download my CV
          </Link>

          <Link
            href="https://linkedin.com/in/ianjuremacalisang"
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({
              variant: 'outline',
              className:
                'h-12 !rounded-full !border-1 !border-gray-500 px-7 text-base font-medium text-gray-500 hover:!border-gray-600 hover:bg-white hover:text-gray-600',
            })}
          >
            Let’s Connect
            <ExternalLinkIcon aria-hidden="true" />
          </Link>
        </div>

        <div className="mt-20 mb-4 text-base text-gray-500 sm:text-lg">
          TECHNOLOGIES I WORK WITH
        </div>

        <div className="mb-20 px-5">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
            {logoGroups.map((logos, index) => (
              <RotatingLogo
                key={index}
                logos={logos}
                duration={3000}
                delay={index * 150}
                startTime={rotationStartTime}
                aspectRatio={1000 / 400}
                logoClassName="h-auto w-30 sm:w-35"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
