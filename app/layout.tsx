import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { UserProvider } from "@/contexts/UserContext";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Leo Challenge 3.5",
  description: "Next.js app with user profile management and GraphQL integration",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex h-full bg-zinc-50 text-zinc-900`}
      >
        <div className="flex h-full w-full flex-col">
          <main className="flex-1">
            <UserProvider>{children}</UserProvider>
          </main>
          <footer className="p-4 text-end text-sm">
            <p>Challenge 3.5</p>
          </footer>
        </div>
      </body>
    </html>
  );
}
