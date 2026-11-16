import HatchSeparator from '@/components/hatch-separator';
import Hero from '@/components/hero-section';
import ProjectCard from '@/components/project-card';
import { Separator } from '@/components/ui/separator';

import Link from 'next/link';
import { Briefcase, CodeXml, Heart, Mail } from 'lucide-react';

const SOCIAL_LINKS = [
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/ianjuremacalisang',
    icon: Briefcase,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/ianjure',
    icon: CodeXml,
  },
  {
    label: 'Email',
    href: 'mailto:ianjure.data@email.com',
    icon: Mail,
  },
  {
    label: 'X',
    href: 'https://x.com/ianjure',
    icon: Heart,
  },
];

export default function Home() {
  return (
    <div>
      <Hero />
      <HatchSeparator />
      <div className="mx-2 mb-20 sm:mx-5">
        <div className="mt-10 mb-6 font-mono text-base font-normal text-gray-500 sm:text-lg">
          WORK EXPERIENCE
        </div>

        <div>
          {/* USTP - CDO */}
          <div className="grid grid-cols-2 py-4 sm:grid-cols-3 sm:items-center">
            <div className="text-left font-medium text-[#0C0C0D]">
              USTP - CDO
            </div>

            <div className="col-span-1 row-start-2 text-left text-slate-500 sm:col-span-1 sm:row-start-auto sm:text-center">
              Data Science Instructor
            </div>

            <div className="col-start-2 row-start-1 text-right text-gray-400 sm:col-start-auto sm:row-start-auto">
              present
            </div>
          </div>

          <Separator />

          {/* Symph */}
          <div className="grid grid-cols-2 py-4 sm:grid-cols-3 sm:items-center">
            <div className="text-left font-medium text-[#0C0C0D]">Symph</div>

            <div className="col-span-1 row-start-2 text-left text-slate-500 sm:col-span-1 sm:row-start-auto sm:text-center">
              Business Development Intern
            </div>

            <div className="col-start-2 row-start-1 text-right text-gray-400 sm:col-start-auto sm:row-start-auto">
              2026
            </div>
          </div>

          <Separator />

          {/* Freelance */}
          <div className="grid grid-cols-2 py-4 sm:grid-cols-3 sm:items-center">
            <div className="text-left font-medium text-[#0C0C0D]">
              Freelance
            </div>

            <div className="col-span-1 row-start-2 text-left text-slate-500 sm:col-span-1 sm:row-start-auto sm:text-center">
              Business Automation Specialist
            </div>

            <div className="col-start-2 row-start-1 text-right text-gray-400 sm:col-start-auto sm:row-start-auto">
              2025
            </div>
          </div>
        </div>
      </div>
      <HatchSeparator />
      <div className="mx-2 sm:ml-5 sm:mr-5 mb-20">
        <div className="mt-10 mb-6 font-mono text-base font-normal text-gray-500 sm:text-lg">
          FEATURED PROJECTS
        </div>
        <div className="space-y-12">
          <ProjectCard
            mainImage="/images/blueshift-main.webp"
            slides={[
              '/images/blueshift-1.webp',
              '/images/blueshift-2.webp',
              '/images/blueshift-3.webp',
              '/images/blueshift-4.webp',
            ]}
            title="Satellite-Based Ocean and Fisheries Intelligence"
            award="NASA SPACE APPS CHALLENGE 2026"
            name="BlueShift"
            description="Analyze how changing ocean conditions affect Philippine fisheries using satellite data."
            href="/projects/blueshift"
          />
          <ProjectCard
            mainImage="/images/philnet-main.webp"
            slides={[
              '/images/philnet-1.webp',
              '/images/philnet-2.webp',
              '/images/philnet-3.webp',
              '/images/philnet-4.webp',
            ]}
            title="Real-Time Multimodal Phishing Detection System"
            award="TECHNICAL EXCELLENCE AWARD"
            name="PhiLNet"
            description="Protect users from phishing websites through fast, accurate, and robust detection via a browser extension."
            href="/projects/philnet"
          />
          <ProjectCard
            mainImage="/images/cardioscope-main.webp"
            slides={[
              '/images/cardioscope-1.webp',
              '/images/cardioscope-2.webp',
              '/images/cardioscope-3.webp',
              '/images/cardioscope-4.webp',
            ]}
            title="Early Detection of Heart Disease Through Sound"
            award="BPI-DOST INNOVATION AWARDS 2025 WINNER"
            name="CardioScope"
            description="Support accessible cardiac screening by detecting abnormalities from phonocardiogram recordings."
            href="/projects/cardioscope"
          />
          <ProjectCard
            mainImage="/images/paldo-main.webp"
            slides={[
              '/images/paldo-1.webp',
              '/images/paldo-2.webp',
              '/images/paldo-3.webp',
              '/images/paldo-4.webp',
            ]}
            title="Alternative Credit Scoring and Financing for MSMEs"
            award="YBLL 2.0 IDEATHON CHAMPION"
            name="Paldo"
            description="Help underserved MSMEs access suitable financing using alternative data beyond traditional credit history."
            href="/projects/paldo"
          />
        </div>
      </div>
      <HatchSeparator />
      <div className="mx-2 mb-10 sm:mx-5">
        <div className="mt-10 mb-6 flex flex-col items-center gap-6 text-center lg:flex-row lg:items-center lg:justify-between lg:text-left">
          <div className="font-mono text-base font-normal text-gray-500 sm:text-lg">
            GET IN TOUCH
          </div>

          <nav className="flex flex-col items-center gap-2 text-base lg:flex-row lg:items-center lg:gap-10">
            {SOCIAL_LINKS.map((link) => {
              const Icon = link.icon;

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-400 transition-colors hover:text-gray-600"
                >
                  <Icon className="h-4 w-4" />
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
      <HatchSeparator className="border-b-0" />
    </div>
  );
}
