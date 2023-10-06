import { ReactNode } from 'react';
import { Metadata } from 'next';
import './globals.css';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Cluster',
  description: 'Universe of Knowledge',
  icons: '/cluster.ico',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="dark:bg-dark bg-gray-100">
        <nav className="px-6 py-4 dark:bg-black bg-white">
          <Link
            className="dark:text-white text-black uppercase text-xl font-bold tracking-wider"
            href="/"
          >
            Cluster 🌌
          </Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
