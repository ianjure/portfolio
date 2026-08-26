import LogoLoop from '@/components/logo-loop';
import {
  SiReact,
  SiNextdotjs,
  SiFigma,
  SiPython,
  SiPytorch,
  SiTensorflow,
  SiPandas,
  SiFastapi,
  SiNumpy,
  SiDocker,
  SiGithub,
  SiSupabase,
  SiFirebase,
} from 'react-icons/si';
import { buttonVariants } from '@/components/ui/button';
import Link from 'next/link';
import { CloudDownloadIcon, ExternalLinkIcon } from 'lucide-react';

const techLogos = [
  {
    node: (
      <SiPython className="text-gray-400 transition-colors duration-300 hover:text-[#3776AB]" />
    ),
    title: 'Python',
    href: 'https://www.python.org',
  },
  {
    node: (
      <SiPytorch className="text-gray-400 transition-colors duration-300 hover:text-[#EE4C2C]" />
    ),
    title: 'PyTorch',
    href: 'https://pytorch.org',
  },
  {
    node: (
      <SiTensorflow className="text-gray-400 transition-colors duration-300 hover:text-[#FF6F00]" />
    ),
    title: 'TensorFlow',
    href: 'https://www.tensorflow.org',
  },
  {
    node: (
      <SiPandas className="text-gray-400 transition-colors duration-300 hover:text-[#133C58]" />
    ),
    title: 'Pandas',
    href: 'https://pandas.pydata.org',
  },
  {
    node: (
      <SiNumpy className="text-gray-400 transition-colors duration-300 hover:text-[#013243]" />
    ),
    title: 'NumPy',
    href: 'https://numpy.org',
  },
  {
    node: (
      <SiReact className="text-gray-400 transition-colors duration-300 hover:text-[#61DAFB]" />
    ),
    title: 'React',
    href: 'https://react.dev',
  },
  {
    node: (
      <SiNextdotjs className="text-gray-400 transition-colors duration-300 hover:text-[#000000]" />
    ),
    title: 'Next.js',
    href: 'https://nextjs.org',
  },
  {
    node: (
      <SiFastapi className="text-gray-400 transition-colors duration-300 hover:text-[#009688]" />
    ),
    title: 'FastAPI',
    href: 'https://fastapi.tiangolo.com',
  },
  {
    node: (
      <SiDocker className="text-gray-400 transition-colors duration-300 hover:text-[#2496ED]" />
    ),
    title: 'Docker',
    href: 'https://www.docker.com',
  },
  {
    node: (
      <SiGithub className="text-gray-400 transition-colors duration-300 hover:text-[#181717]" />
    ),
    title: 'GitHub',
    href: 'https://github.com',
  },
  {
    node: (
      <SiSupabase className="text-gray-400 transition-colors duration-300 hover:text-[#3FCF8E]" />
    ),
    title: 'Supabase',
    href: 'https://supabase.com',
  },
  {
    node: (
      <SiFirebase className="text-gray-400 transition-colors duration-300 hover:text-[#DD2C00]" />
    ),
    title: 'Firebase',
    href: 'https://firebase.google.com',
  },
  {
    node: (
      <SiFigma className="text-gray-400 transition-colors duration-300 hover:text-[#F24E1E]" />
    ),
    title: 'Figma',
    href: 'https://www.figma.com',
  },
];

export default function Hero() {
  return (
    <section className="flex min-h-[calc(100vh-65px)] items-center justify-center pt-45">
      <div className="mx-auto w-full max-w-6xl text-center">
        <h1 className="text-4xl text-stone-800 font-bold leading-[1.1] tracking-tight sm:text-5xl md:text-5xl lg:text-6xl px-4">
          Data. AI. Products.
          <br className="text-stone-800 font-italic" /> Built to solve real
          problems.
        </h1>

        <p className="mx-auto mt-10 max-w-3xl text-lg leading-relaxed text-gray-500 sm:text-lg md:text-xl px-4">
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
                'h-14 !border-0 bg-slate-500 px-7 text-base font-medium hover:bg-slate-600',
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
                'h-14 !border-1 !border-gray-500 px-7 text-base text-gray-500 font-medium hover:text-gray-600 hover:!border-gray-600 hover:bg-white',
            })}
          >
            Let’s Connect
            <ExternalLinkIcon aria-hidden="true" />
          </Link>
        </div>

        <div className="mt-45 mb-20 px-2 sm:px-5">
          <LogoLoop
            logos={techLogos}
            speed={40}
            direction="left"
            logoHeight={45}
            gap={60}
            hoverSpeed={0}
            scaleOnHover
          />
        </div>
      </div>
    </section>
  );
}
