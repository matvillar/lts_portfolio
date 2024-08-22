import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import SocialMedia from '@/components/shared/SocialMedia';
import Navbar from '@/components/shared/Navbar';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Matias Villar's Portfolio",
  description: 'A modern and minimalistic portfolio',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <SocialMedia />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
