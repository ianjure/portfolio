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
import { Button } from '@/components/ui/button';

const techLogos = [
  {
    node: (
      <SiPython className="text-gray-400 transition-colors hover:text-gray-600" />
    ),
    title: 'Python',
    href: 'https://www.python.org',
  },
  {
    node: (
      <SiPytorch className="text-gray-400 transition-colors hover:text-gray-600" />
    ),
    title: 'PyTorch',
    href: 'https://pytorch.org',
  },
  {
    node: (
      <SiTensorflow className="text-gray-400 transition-colors hover:text-gray-600" />
    ),
    title: 'TensorFlow',
    href: 'https://www.tensorflow.org',
  },
  {
    node: (
      <SiPandas className="text-gray-400 transition-colors hover:text-gray-600" />
    ),
    title: 'Pandas',
    href: 'https://pandas.pydata.org',
  },
  {
    node: (
      <SiNumpy className="text-gray-400 transition-colors hover:text-gray-600" />
    ),
    title: 'NumPy',
    href: 'https://numpy.org',
  },
  {
    node: (
      <SiReact className="text-gray-400 transition-colors hover:text-gray-600" />
    ),
    title: 'React',
    href: 'https://react.dev',
  },
  {
    node: (
      <SiNextdotjs className="text-gray-400 transition-colors hover:text-gray-600" />
    ),
    title: 'Next.js',
    href: 'https://nextjs.org',
  },
  {
    node: (
      <SiFastapi className="text-gray-400 transition-colors hover:text-gray-600" />
    ),
    title: 'FastAPI',
    href: 'https://fastapi.tiangolo.com',
  },
  {
    node: (
      <SiDocker className="text-gray-400 transition-colors hover:text-gray-600" />
    ),
    title: 'Docker',
    href: 'https://www.docker.com',
  },
  {
    node: (
      <SiGithub className="text-gray-400 transition-colors hover:text-gray-600" />
    ),
    title: 'GitHub',
    href: 'https://github.com',
  },
  {
    node: (
      <SiSupabase className="text-gray-400 transition-colors hover:text-gray-600" />
    ),
    title: 'Supabase',
    href: 'https://supabase.com',
  },
  {
    node: (
      <SiFirebase className="text-gray-400 transition-colors hover:text-gray-600" />
    ),
    title: 'Firebase',
    href: 'https://firebase.google.com',
  },
  {
    node: (
      <SiFigma className="text-gray-400 transition-colors hover:text-gray-600" />
    ),
    title: 'Figma',
    href: 'https://www.figma.com',
  },
];

export default function Hero() {
  return (
    <section className="flex min-h-[calc(100vh-65px)] items-center justify-center py-20">
      <div className="mx-auto w-full max-w-6xl text-center">
        <h1 className="text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl md:text-5xl lg:text-6xl px-4">
          Data. AI. Products.
          <br className="font-italic" /> Built to solve real problems.
        </h1>

        <p className="mx-auto mt-8 max-w-3xl text-base leading-relaxed text-gray-500 sm:text-lg md:text-xl px-4">
          I’m a Data Scientist, AI Builder, and Product Thinker who transforms
          complex problems into intelligent, practical products. From machine
          learning models to full-stack applications, I bridge the gap between
          technical possibilities and real-world impact.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button className="h-14 rounded-lg bg-orange-500 px-7 text-base font-medium text-white shadow-sm transition-all hover:bg-orange-600 hover:shadow-md">
            <a href="/Ian-Jure-Macalisang-CV.pdf" download>
              Download my CV
            </a>
          </Button>

          <Button
            variant="ghost"
            className="h-14 rounded-lg px-7 text-base font-medium text-gray-900 transition-colors hover:bg-transparent hover:text-gray-500"
          >
            <a
              href="https://linkedin.com/in/ianjuremacalisang"
              className="flex items-center gap-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              Let’s Connect!
              <span aria-hidden="true">→</span>
            </a>
          </Button>
        </div>
        <div className="mt-26 px-2 sm:px-5">
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
