import type { Metadata } from 'next';
import { Bricolage_Grotesque, IBM_Plex_Sans, IBM_Plex_Mono } from 'next/font/google';
import { ProfessionalNav } from '@/components/layout/ProfessionalNav';
import { ProfessionalFooter } from '@/components/layout/ProfessionalFooter';
import './globals.css';

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-bricolage',
  display: 'swap',
});

const plexSans = IBM_Plex_Sans({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-plex-sans',
  display: 'swap',
});

const plexMono = IBM_Plex_Mono({
  weight: ['400', '500'],
  subsets: ['latin'],
  variable: '--font-plex-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'TensorTopology | AI & Automation and Networking',
  description:
    'TensorTopology is a two-person team: an AI engineer and a networking engineer. AI agents, RAG and automation, plus network, CCTV and IT infrastructure installation.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bricolage.variable} ${plexSans.variable} ${plexMono.variable}`}>
      <body className="bg-white text-gray-900 min-h-screen font-body">
        <ProfessionalNav />
        <main id="main">{children}</main>
        <ProfessionalFooter />
      </body>
    </html>
  );
}
