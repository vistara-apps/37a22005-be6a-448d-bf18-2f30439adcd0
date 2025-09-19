import type { Metadata } from 'next';
import { Providers } from './providers';
import './globals.css';

export const metadata: Metadata = {
  title: 'CareCircles - Connect Anonymously, Heal Together',
  description: 'Anonymous peer support groups for mental health within Base App',
  openGraph: {
    title: 'CareCircles',
    description: 'Connect Anonymously, Heal Together',
    images: ['/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-bg">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
