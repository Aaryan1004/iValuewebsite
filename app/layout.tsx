import type {Metadata} from 'next';
import './globals.css';
import { Inter, Space_Grotesk } from "next/font/google";
import { cn } from "@/lib/utils";
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ObjectConfig } from "@/content/siteConfig";

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-display' });

export const metadata: Metadata = {
  title: `${ObjectConfig.name} - Enterprise IT Services & Staff Augmentation`,
  description: ObjectConfig.description,
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={cn("font-sans", inter.variable, spaceGrotesk.variable)}>
      <body suppressHydrationWarning className="min-h-screen bg-gray-50 text-gray-900 antialiased flex flex-col">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
