import type { Metadata, Viewport } from 'next';
import { Providers } from './providers';
import { ErrorBoundary } from '../components/ErrorBoundary';
import './globals.css';

export const metadata: Metadata = {
  title: 'CareCircles - Connect Anonymously, Heal Together',
  description: 'Anonymous peer support groups for mental health within Base App',
  metadataBase: new URL('https://37a22005-be6a-448d-bf18-2f30439adcd0.vercel.app'),
  openGraph: {
    title: 'CareCircles',
    description: 'Connect Anonymously, Heal Together',
    images: ['/og-image.png'],
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#ffffff' }
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-bg font-sans antialiased">
        <ErrorBoundary>
          <Providers>
            {children}
          </Providers>
        </ErrorBoundary>
      </body>
    </html>
  );
}
