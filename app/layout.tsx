import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "../components/Navigation";
import PasswordProtection from "../components/PasswordProtection";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Countdown Timer",
  description: "Countdown to PA SOCIAL!! :O",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-100`}>
        <PasswordProtection>
          <Navigation />
          {children}
        </PasswordProtection>
      </body>
    </html>
  );
} 