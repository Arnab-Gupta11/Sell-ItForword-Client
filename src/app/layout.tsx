import type { Metadata } from "next";

import { Kanit } from "next/font/google";
import "./globals.css";
import Providers from "@/providers/Providers";

const kanit = Kanit({
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-kanit",
});

export const metadata: Metadata = {
  title: "SellItForword",
  description:
    "SellItForward encapsulates the act of selling used items with a conscious purpose, extending their lifespan and contributing to a sustainable cycle. It goes beyond a simple transaction, promoting the idea of reuse and recycling, fostering a circular economy where goods are passed on rather than discarded, and ultimately carrying a positive and encouraging message of responsible consumption.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${kanit.variable}`} suppressHydrationWarning>
      <body className="font-kanit bg-light-primary-bg dark:bg-dark-primary-bg">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
