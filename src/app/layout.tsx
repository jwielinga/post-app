import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { twMerge } from "tailwind-merge";

import { Providers } from "./providers";

const roboto = Roboto({ subsets: ["latin"], weight: "400" });

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
    roboto.className,
    "bg-neutral w-full h-full text-color-700"
  );
  return (
    <html lang="en">
      <body className={bodyClasses}>
        <div className="fixed -z-10 bg-gradient-to-br from-primary from-50% to-neutral to-50% h-64 w-full" />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
