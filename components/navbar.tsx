'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { RotatingText } from '@/components/rotating-text';

export function Navbar() {
  const [logoHovered, setLogoHovered] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`
        sticky top-0 z-50
        border-b border-gray-300
        bg-white
        transition-shadow duration-300
        ${scrolled ? 'shadow-sm' : 'shadow-none'}
      `}
    >
      <div className="flex justify-center px-2 sm:px-4">
        <div className="flex h-20 w-full max-w-[900px] items-center overflow-hidden border-l border-r border-gray-300 bg-white px-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-4">
            <Image
              src={logoHovered ? '/logo-2.png' : '/logo-1.png'}
              alt="Ian Jure"
              width={40}
              height={40}
              className="h-9 w-9 object-contain sm:h-12 sm:w-12"
              onMouseEnter={() => setLogoHovered(true)}
              onMouseLeave={() => setLogoHovered(false)}
            />

            <div className="flex items-center gap-2">
              <span className="text-lg sm:text-xl font-medium text-stone-800">
                ianjure
              </span>

              <span className="text-lg sm:text-xl font-semibold text-gray-400">
                /
              </span>

              <RotatingText
                text={['Data Scientist', 'AI Builder', 'Product Thinker']}
                duration={3000}
                containerClassName="text-lg sm:text-xl font-medium text-slate-500"
              />
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
}
