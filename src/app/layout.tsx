"use client";

import { ClerkProvider } from '@clerk/nextjs';
import { Inter } from 'next/font/google';
import './globals.css';
import { Button } from '@/components/ui/button';
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'SaaS Data Entry App',
  description: 'Business data entry with Excel backend',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en" className={inter.className}>
        <body className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-gray-100">
          <header className="bg-white shadow-sm">
            <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
              <Link href="/" className="text-2xl font-bold text-gray-800">DataEntry SaaS</Link>
              <div className="flex items-center space-x-4">
                <SignedOut>
                  <Link href="/sign-in"><Button variant="outline">Sign In</Button></Link>
                  <Link href="/sign-up"><Button>Sign Up</Button></Link>
                </SignedOut>
                <SignedIn>
                  <Link href="/dashboard" className="text-gray-600 hover:text-gray-900">Dashboard</Link>
                  {/* Admin link conditional - we'll add role check later */}
                  <UserButton afterSignOutUrl="/" />
                </SignedIn>
              </div>
            </nav>
          </header>
          <main className="flex-grow container mx-auto px-4 py-8">
            {children}
          </main>
          <footer className="bg-white shadow-t py-4 text-center text-gray-500">
            © 2023 DataEntry SaaS. All rights reserved.
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
