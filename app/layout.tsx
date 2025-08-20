import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Klutch Moments",
  description: "Moments Matter – Upload a clip, pay for a credit, and get your highlight instantly.",
  icons: [{ rel: "icon", url: "/logo.png" }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
