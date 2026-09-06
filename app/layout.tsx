import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { RootProvider } from 'fumadocs-ui/provider/next';
import './global.css';

export const metadata: Metadata = {
  title: {
    default: 'Watchtower',
    template: '%s · Watchtower',
  },
  description: 'Documentation for Watchtower, its extension system, and its declarative UI.',
  metadataBase: new URL('https://ferelking242.github.io/watchtower-website/'),
  openGraph: {
    title: 'Watchtower documentation',
    description: 'Build, extend, and understand Watchtower.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="flex min-h-screen flex-col">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}