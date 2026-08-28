import type { Metadata } from 'next';
import { DM_Mono, Figtree } from 'next/font/google';
import localFont from 'next/font/local';
import { Navbar } from '@/components/navbar';
import './globals.css';
import { cn } from '@/lib/utils';
import { Footer } from '@/components/footer';

const figtree = Figtree({
  subsets: ['latin'],
  variable: '--font-figtree',
});

const dmMono = DM_Mono({
  weight: ['400', '500'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-dm-mono',
});

const liebling = localFont({
  src: './fonts/Liebling-Bold.woff2',
  weight: '700',
  style: 'normal',
  variable: '--font-liebling',
});

export const metadata: Metadata = {
  title: 'Ian Jure Macalisang • Data, AI, and Product',
  description:
    'Explore my skills, experience, and projects in data science, machine learning, and product development.',
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html
      lang="en"
      className={cn(
        'h-full',
        'antialiased',
        figtree.variable,
        dmMono.variable,
        liebling.variable,
      )}
    >
      <body className="min-h-full flex flex-col bg-white">
        <Navbar />

        <main className="flex flex-1 justify-center px-2 sm:px-4">
          <div className="flex w-full max-w-[900px] flex-col border-l border-r border-gray-300 bg-white">
            {children}
          </div>
        </main>

        <Footer />
      </body>
    </html>
  );
}
