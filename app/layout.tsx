import type { Metadata } from 'next';
import { Geist, Geist_Mono, Instrument_Sans } from 'next/font/google';
import { Navbar } from '@/components/navbar';
import './globals.css';
import { cn } from '@/lib/utils';
import { Footer } from '@/components/footer';

const instrumentSansHeading = Instrument_Sans({
  subsets: ['latin'],
  variable: '--font-heading',
});

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
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
        geistSans.variable,
        geistMono.variable,
        instrumentSansHeading.variable,
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
