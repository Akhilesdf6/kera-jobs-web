import type { ReactNode } from "react";
import "./globals.css";

export const metadata = {
  title: "Kera Jobs | Kerala Government Jobs",
  description:
    "Latest Kerala PSC and Government Job Notifications.",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
