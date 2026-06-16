import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Tiotai // Unified Physical Intelligence Layer',
  description: 'Enterprise middleware ingestion gateway and bespoke hardware deployment orchestration across the UAE.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#08080A] antialiased">{children}</body>
    </html>
  );
}