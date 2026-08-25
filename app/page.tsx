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
    label: 'X',
    href: 'https://x.com/ianjure',
    icon: Heart,
  },
  {
    label: 'Email',
    href: 'mailto:ianjure.data@email.com',
    icon: Mail,
  },
];

export default function Home() {
  return (
    <div>
      <Hero />
      <HatchSeparator />
      <div className="mx-2 mb-20 sm:mx-5">
        <div className="mt-10 mb-6 text-base text-gray-500 sm:text-lg">
          WORK EXPERIENCE
        </div>

        <div>
          {/* USTP - CDO */}
          <div className="grid grid-cols-2 py-4 sm:grid-cols-3 sm:items-center">
            <div className="text-left font-medium text-stone-800">
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
            <div className="text-left font-medium text-stone-800">Symph</div>

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
            <div className="text-left font-medium text-stone-800">
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
        <div className="mt-10 mb-6 text-base sm:text-lg text-gray-500">
          FEATURED PROJECTS
        </div>
        <div className="space-y-12">
          <ProjectCard
            mainImage="/images/philnet-main.png"
            slides={[
              '/images/philnet-1.png',
              '/images/philnet-2.png',
              '/images/philnet-3.png',
              '/images/philnet-4.png',
            ]}
            title="Real-Time Multimodal Phishing Detection System"
            award="TECHNICAL EXCELLENCE AWARD"
            name="PhiLNet"
            description="Protect users from phishing websites through fast, accurate, and robust detection via a browser extension."
          />
          <ProjectCard
            mainImage="/images/cardioscope-main.png"
            slides={[
              '/images/cardioscope-1.png',
              '/images/cardioscope-2.png',
              '/images/cardioscope-3.png',
              '/images/cardioscope-4.png',
            ]}
            title="Early Detection of Heart Disease Through Sound"
            award="BPI-DOST INNOVATION AWARDS 2025 WINNER"
            name="CardioScope"
            description="Support accessible cardiac screening by detecting abnormalities from phonocardiogram recordings."
          />
          <ProjectCard
            mainImage="/images/paldo-main.png"
            slides={[
              '/images/paldo-1.png',
              '/images/paldo-2.png',
              '/images/paldo-3.png',
              '/images/paldo-4.png',
            ]}
            title="Alternative Credit Scoring and Financing for MSMEs"
            award="YBLL 2.0 IDEATHON CHAMPION"
            name="Paldo"
            description="Help underserved MSMEs access suitable financing using alternative data beyond traditional credit history."
          />
        </div>
      </div>
      <HatchSeparator />
      <div className="mx-2 mb-20 sm:mx-5">
        <div className="mt-10 mb-6 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="text-base text-gray-500 sm:text-lg">GET IN TOUCH</div>

          <nav className="flex flex-col items-start gap-4 text-base lg:flex-row lg:items-center lg:gap-12">
            {SOCIAL_LINKS.map((link) => {
              const Icon = link.icon;

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-zinc-500 transition-colors hover:text-black"
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
