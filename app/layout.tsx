import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "react-notifications/lib/notifications.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Auto Search",
  description: "You can find a Vin decoder, Make and Models, and listings here",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
