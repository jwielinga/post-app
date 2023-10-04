import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { twMerge } from "tailwind-merge";

import Providers from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Post app",
  description: "A basic Post app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const bodyClasses = twMerge(
    inter.className,
    "bg-gradient-to-br from-purple-600 from-20% to-slate-200 to-20%"
  );
  return (
    <html lang="en">
      <body className={bodyClasses}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
